---
layout: post
title: Getting/Reading HTTP Responses
date: '2006-03-02 02:16:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

There has been a semi-frequent request on forums and such for people who want to do an HTTP request from their application (either web or client) and get the response as a string back so that they can process it from there.&nbsp; I had some code that did something similar, so I figured I'd modify it and post it here for all to use.&nbsp; 

This will work in any application, either Windows Client, or as part of a Web Application (if you wanted to create a magic proxy site).&nbsp; 

<div style="FONT-SIZE: 9pt; FONT-FAMILY: monospace; BACKGROUND-COLOR: white"><font color="blue">using</font><font color="black"> System;
</font><font color="blue">using</font><font color="black"> System.IO;
</font><font color="blue">using</font><font color="black"> System.Net;</p>

</font><font color="blue">namespace</font><font color="black"> HTTPReader
{
&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">class</font><font color="black"> </font><font color="teal">HTTPReader
</font><font color="black">&nbsp;&nbsp;&nbsp;&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">public</font><font color="black"> </font><font color="blue">static</font><font color="black"> </font><font color="blue">string</font><font color="black"> GetHTML(</font><font color="blue">string</font><font color="black"> url, </font><font color="blue">string</font><font color="black"> proxy)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Net.</font><font color="teal">WebRequest</font><font color="black"> wr = System.Net.</font><font color="teal">WebRequest</font><font color="black">.Create(url);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wr.Timeout = 2500; </font><font color="green">// 2.5 seconds
</font><font color="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">if</font><font color="black"> (!</font><font color="teal">String</font><font color="black">.IsNullOrEmpty(proxy))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Net.</font><font color="teal">WebProxy</font><font color="black"> myProxy = </font><font color="blue">new</font><font color="black"> System.Net.</font><font color="teal">WebProxy</font><font color="black">(proxy, </font><font color="blue">true</font><font color="black">);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wr.Proxy = myProxy;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">using</font><font color="black"> (System.Net.</font><font color="teal">WebResponse</font><font color="black"> wresp = wr.GetResponse())
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="teal">Stream</font><font color="black"> s = wresp.GetResponseStream();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">using</font><font color="black"> (</font><font color="teal">StreamReader</font><font color="black"> sr = </font><font color="blue">new</font><font color="black"> </font><font color="teal">StreamReader</font><font color="black">(s))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">return</font><font color="black"> sr.ReadToEnd();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}
</font></div>
<p>**Edit1: **You know, one thing I love about the community, you tell me when I'm wrong, or can do things better.&nbsp; This is slightly updated after poppyto provided a few suggestions!&nbsp; Thanks!

**Edit2: **Thanks to toub, I've added his suggested changes.&nbsp; It's fair to note, that I'm not catching any exceptions in here, and that is intentional.&nbsp; You could wrap this in a try catch block, but I'd rather you handle this how you want your app to deal with it.