---
layout: post
title: Random Image Loading With JavaScript
date: '2006-11-18 09:52:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I'm teaching the [From Prints To Online: Updating Your Website](http://www.pcnw.org/school/workshops.php#updatingweb) class today at PCNW, and I had someone ask how they could random show an image on their home page.&nbsp; All of the students aren't really web designer or developers, but fine art photographers.&nbsp; They know and understand photography like the back of their hands, but not HTML, CSS or JavaScript.

Normally with a big class, I would have said it's a little too hard to teach to all 12 students (remember, these are not people who understand code).&nbsp; But, I've got a small class this weekend, so I figured why not.&nbsp; I also figured I might as well post it for those who are interested.

In the head, you'll need to paste the following code:

<font color="#000080">&lt;script type="text/javascript" language="JavaScript"&gt;
&nbsp;&nbsp;&nbsp; MyImages=new Array();
&nbsp;&nbsp;&nbsp; MyImages[0]='034.jpg';
&nbsp;&nbsp;&nbsp; MyImages[1]='038.jpg';
&nbsp;&nbsp;&nbsp; MyImages[2]='acid2.jpg';
&nbsp;&nbsp;&nbsp; MyImages[3]='boat.jpg'; </font>

<font color="#000080">&nbsp;&nbsp;&nbsp; function newImage() 
&nbsp;&nbsp;&nbsp; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; document.getElementById("mainImage").setAttribute("src", MyImages[Math.round(Math.random()*3)])
&nbsp;&nbsp;&nbsp; }
&lt;/script&gt;</font> 

You'll obviously need to change the file names to what ever files you want to load. 

In the &lt;body&gt; tag, you'll also need to add onload="newImage()", so you get something like <font color="#000080">&lt;body onload="newImage()"&gt;</font> 

Finally, you need to make sure that you have an image with an ID of "mainImage" on your page somewhere.&nbsp; If you don't, you'll get JavaScript errors. 

<font color="#000080">&lt;img id="mainImage" /&gt;</font> 

Hope this helps!