---
layout: post
title: 'Efficiency: Tables vs. CSS for layout'
date: '2005-06-17 04:31:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

In a post I made a few days ago, I said that tables were inefficient for layout out data, and someone asked why tables are less efficient.&nbsp; There are numerous reasons for this, and I want to explore some of them.

First, lets look at size.&nbsp; If you take the example I used in a [previous post](http://blogs.msdn.com/petel/archive/2005/06/14/429085.aspx), comparing sizes of a straight table plus some style vs, CSS style sheet we get the following chart:

<table style="WIDTH: 100%" cellspacing="1" cellpadding="1" border="1">
<tbody>
<tr>
<td></td>
<td>1 Page</td>
<td>2 Pages</td>
</tr>
<tr>
<td>CSS + HTML</td>
<td>844 (html) + 573 (css)&nbsp;= 1417 bytes</td>
<td>1688 (html) + 573 (css) = 2261 bytes</td>
</tr>
<tr>
<td>Tables + HTML</td>
<td>1347 bytes</td>
<td>2694 bytes</td>
</tr>
</tbody>
</table>
<p>From this, doing only a single page, it looks like tables wins out, but as soon as you start using that same layout on more than one page, using a separate CSS style sheet really takes over. 

Another point to look at, is the consistency of changing all of those pages.&nbsp; With the CSS style sheet, if you want to change the background colour on the header from blue to pink, there is only a single file to change.&nbsp; If you want to do this on 2 html pages, you now have two files to modify.

Accessibility and viewing the pages with non-PC devices also becomes a bit of an issue with tables.&nbsp; Tables are great for reporting tabluar data (like I posted above), but what about people who are viewing pages with a screen reader?&nbsp; The page doesn't quite flow in the same way with tables as it does CSS.&nbsp; Or what about that person who is viewing your page on a mobile phone or other small screen device.

Tables aren't evil, but they do have their place.