---
layout: post
title: 3 Column Layout in CSS
date: '2005-06-14 09:29:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

One of the more difficult things I've found in creating decent web sites, is getting a three column, plus header and footer layout going without using tables.&nbsp; Tables are great and all, but very inefficient, and not very accessible.&nbsp; Getting the three column layout in CSS to work right takes a bit of work, but once its been done, its super easy to use and play with.&nbsp; Tie that in with master pages, and themes and you've got a super accessible, easy to modify web site, that is XHTML compliant.

Lets start with the style sheet for the page:

<font size="2">body 
{
&nbsp;&nbsp;&nbsp; margin: 0px;
&nbsp;&nbsp;&nbsp; padding: 0px;
}</font>

<font size="2">#header
{
&nbsp;&nbsp;&nbsp; height: 30px;
&nbsp;&nbsp;&nbsp; background: blue;
&nbsp;&nbsp;&nbsp; padding: 10px;
}</font>

<font size="2">#leftCol
{
&nbsp;&nbsp;&nbsp; position: absolute;
&nbsp;&nbsp;&nbsp; top: 50px;
&nbsp;&nbsp;&nbsp; left: 0px;
&nbsp;&nbsp;&nbsp; width: 20%;
&nbsp;&nbsp;&nbsp; background: red;
&nbsp;&nbsp;&nbsp; padding: 10px;
}</font>

<font size="2">#rightCol
{
&nbsp;&nbsp;&nbsp; position: absolute;
&nbsp;&nbsp;&nbsp; top: 50px;
&nbsp;&nbsp;&nbsp; right: 0px;
&nbsp;&nbsp;&nbsp; width: 20%;
&nbsp;&nbsp;&nbsp; background: green;
&nbsp;&nbsp;&nbsp; padding: 10px;
}</font>

<font size="2">#mainCol
{
&nbsp;&nbsp;&nbsp; margin-left: 25%;
&nbsp;&nbsp;&nbsp; margin-right: 25%;
}</font>

<font size="2">#footer
{
&nbsp;&nbsp;&nbsp; margin-left: 25%;
&nbsp;&nbsp;&nbsp; margin-right: 25%;
&nbsp;&nbsp;&nbsp; padding: 15px;
&nbsp;&nbsp;&nbsp; background: yellow;
}
</font><font size="2"></font>

I've added the colours in the columns, header and footer so that you can easily see where things are coming from.&nbsp; Next, we need to create the html for the page.&nbsp; This is probably the easiest part: <font size="2">
<p>&lt;div id="header"&gt;
header
&lt;/div&gt; 

&lt;div id="leftCol"&gt;
left
&lt;/div&gt; 

&lt;div id="mainCol"&gt;
the quick brown fox jumped over the slow blue turtle 
&lt;/div&gt; 

&lt;div id="rightCol"&gt;
right
&lt;/div&gt; 

&lt;div id="footer"&gt;
footer
&lt;/div&gt;

</font>And there you have it, a 3 column, plus header and footer layout!&nbsp; You can see the sample [http://www.nocommonground.com/blogSamples/3col.htm](http://www.nocommonground.com/blogSamples/3col.htm)