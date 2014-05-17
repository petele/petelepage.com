---
layout: post
status: publish
published: true
title: 3 Column Layout in CSS
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1905
wordpress_url: http://petelepage.com/blog/2005/06/3-column-layout-in-css/
date: '2005-06-14 09:29:00 -0400'
date_gmt: '2005-06-14 16:29:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>One of the more difficult things I've found in creating decent web sites, is getting a three column, plus header and footer layout going without using tables.&nbsp; Tables are great and all, but very inefficient, and not very accessible.&nbsp; Getting the three column layout in CSS to work right takes a bit of work, but once its been done, its super easy to use and play with.&nbsp; Tie that in with master pages, and themes and you've got a super accessible, easy to modify web site, that is XHTML compliant.</p>
<p>Lets start with the style sheet for the page:</p>
<p><font size="2">body <br />{<br />&nbsp;&nbsp;&nbsp; margin: 0px;<br />&nbsp;&nbsp;&nbsp; padding: 0px;<br />}</font></p>
<p><font size="2">#header<br />{<br />&nbsp;&nbsp;&nbsp; height: 30px;<br />&nbsp;&nbsp;&nbsp; background: blue;<br />&nbsp;&nbsp;&nbsp; padding: 10px;<br />}</font></p>
<p><font size="2">#leftCol<br />{<br />&nbsp;&nbsp;&nbsp; position: absolute;<br />&nbsp;&nbsp;&nbsp; top: 50px;<br />&nbsp;&nbsp;&nbsp; left: 0px;<br />&nbsp;&nbsp;&nbsp; width: 20%;<br />&nbsp;&nbsp;&nbsp; background: red;<br />&nbsp;&nbsp;&nbsp; padding: 10px;<br />}</font></p>
<p><font size="2">#rightCol<br />{<br />&nbsp;&nbsp;&nbsp; position: absolute;<br />&nbsp;&nbsp;&nbsp; top: 50px;<br />&nbsp;&nbsp;&nbsp; right: 0px;<br />&nbsp;&nbsp;&nbsp; width: 20%;<br />&nbsp;&nbsp;&nbsp; background: green;<br />&nbsp;&nbsp;&nbsp; padding: 10px;<br />}</font></p>
<p><font size="2">#mainCol<br />{<br />&nbsp;&nbsp;&nbsp; margin-left: 25%;<br />&nbsp;&nbsp;&nbsp; margin-right: 25%;<br />}</font></p>
<p><font size="2">#footer<br />{<br />&nbsp;&nbsp;&nbsp; margin-left: 25%;<br />&nbsp;&nbsp;&nbsp; margin-right: 25%;<br />&nbsp;&nbsp;&nbsp; padding: 15px;<br />&nbsp;&nbsp;&nbsp; background: yellow;<br />}<br /></font><font size="2"></font></p>
<p>I've added the colours in the columns, header and footer so that you can easily see where things are coming from.&nbsp; Next, we need to create the html for the page.&nbsp; This is probably the easiest part: <font size="2">
<p>&lt;div id="header"&gt;<br />header<br />&lt;/div&gt; </p>
<p>&lt;div id="leftCol"&gt;<br />left<br />&lt;/div&gt; </p>
<p>&lt;div id="mainCol"&gt;<br />the quick brown fox jumped over the slow blue turtle <br />&lt;/div&gt; </p>
<p>&lt;div id="rightCol"&gt;<br />right<br />&lt;/div&gt; </p>
<p>&lt;div id="footer"&gt;<br />footer<br />&lt;/div&gt;</p>
<p></font>And there you have it, a 3 column, plus header and footer layout!&nbsp; You can see the sample <a href="http://www.nocommonground.com/blogSamples/3col.htm">http://www.nocommonground.com/blogSamples/3col.htm</a></p>
