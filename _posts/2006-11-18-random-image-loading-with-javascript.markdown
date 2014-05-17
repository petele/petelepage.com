---
layout: post
status: publish
published: true
title: Random Image Loading With JavaScript
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1506
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:1101369
date: '2006-11-18 20:52:00 -0500'
date_gmt: '2006-11-19 03:52:00 -0500'
categories:
- Web Design &amp; Development
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>I'm teaching the <a class="" href="http://www.pcnw.org/school/workshops.php#updatingweb" target=_blank mce_href="http://www.pcnw.org/school/workshops.php#updatingweb">From Prints To Online: Updating Your Website</a> class today at PCNW, and I had someone ask how they could random show an image on their home page.&nbsp; All of the students aren't really web designer or developers, but fine art photographers.&nbsp; They know and understand photography like the back of their hands, but not HTML, CSS or JavaScript.</p>
<p>Normally with a big class, I would have said it's a little too hard to teach to all 12 students (remember, these are not people who understand code).&nbsp; But, I've got a small class this weekend, so I figured why not.&nbsp; I also figured I might as well post it for those who are interested.</p>
<p>In the head, you'll need to paste the following code:</p>
<p><font color=#000080>&lt;script type="text/javascript" language="JavaScript"&gt;<br />&nbsp;&nbsp;&nbsp; MyImages=new Array();<br />&nbsp;&nbsp;&nbsp; MyImages[0]='034.jpg';<br />&nbsp;&nbsp;&nbsp; MyImages[1]='038.jpg';<br />&nbsp;&nbsp;&nbsp; MyImages[2]='acid2.jpg';<br />&nbsp;&nbsp;&nbsp; MyImages[3]='boat.jpg'; </font></p>
<p><font color=#000080>&nbsp;&nbsp;&nbsp; function newImage() <br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; document.getElementById("mainImage").setAttribute("src", MyImages[Math.round(Math.random()*3)])<br />&nbsp;&nbsp;&nbsp; }<br />&lt;/script&gt;</font></p>
<p>You'll obviously need to change the file names to what ever files you want to load.</p>
<p>In the &lt;body&gt; tag, you'll also need to add onload="newImage()", so you get something like <font color=#000080>&lt;body onload="newImage()"&gt;</font></p>
<p>Finally, you need to make sure that you have an image with an ID of "mainImage" on your page somewhere.&nbsp; If you don't, you'll get JavaScript errors.</p>
<p><font color=#000080>&lt;img id="mainImage" /&gt;</font></p>
<p>Hope this helps!</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=1101369" width="1" height="1"/></p>
