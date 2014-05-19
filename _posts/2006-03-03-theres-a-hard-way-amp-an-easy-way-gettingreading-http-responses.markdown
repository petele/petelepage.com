---
layout: post
title: 'There''s A Hard Way &amp;amp; An Easy Way: Getting/Reading HTTP Responses'
date: '2006-03-03 02:08:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Yesterday, after somone asked on the forums how to do a web request in an application, I posted some code that I had written a while ago, and I got some great feedback on it.&nbsp; It solved a problem that I was working on, and did exactly what a few people have been asking for.

As it turns out, that was the hard way of doing things.&nbsp; If you don't count { } on separate lines, that took 9 lines of code.&nbsp; Someone yesterday pointed out how to do it in 4.&nbsp; 

So I present to you, 4 lines:

<div style="FONT-SIZE: 9pt; FONT-FAMILY: monospace; BACKGROUND-COLOR: white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="blue">public</font><font color="black"> </font><font color="blue">static</font><font color="black"> </font><font color="blue">string</font><font color="black"> GetHTML(</font><font color="blue">string</font><font color="black"> url, </font><font color="blue">string</font><font color="black"> proxy)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Net.</font><font color="teal">WebClient</font><font color="black"> client = </font><font color="blue">new</font><font color="black"> </font><font color="teal">WebClient</font><font color="black">();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">if</font><font color="black"> (!</font><font color="teal">String</font><font color="black">.IsNullOrEmpty(proxy))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client.Proxy = proxy;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font><font color="blue">return</font><font color="black"> client.DownloadString(</font><font color="blue">new</font><font color="black"> </font><font color="teal">Uri</font><font color="black">(</font>url<font color="black">));</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</font> </div>
<p>The one difference on this, it that in the one from yesterday, I was able to put a timeout of 2.5 seconds.&nbsp; If the page hadn't downloaded in that, it failed.&nbsp; With the code I've posted today, there doesn't seem to be a method or property to set that value.