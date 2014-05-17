---
layout: post
status: publish
published: true
title: Meta viewport syntax - comma or semi-colon?
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
excerpt: If you’re using a semi-colon to separate values in your viewport meta tag,
  your site may break! Use a comma instead.
wordpress_id: 2820
wordpress_url: http://petelepage.com/blog/?p=2820
date: '2013-02-14 13:25:50 -0500'
date_gmt: '2013-02-14 21:25:50 -0500'
categories:
- Web Design &amp; Development
- HTML5
- Mobile
tags:
- HTML5
- TipsAndTricks
- BestPractices
- mobile
- viewport
comments:
- id: 5092
  author: Kartik
  author_email: kartik@softnsolv.com
  author_url: http://www.softnsolv.com
  date: '2013-12-05 15:34:23 -0500'
  date_gmt: '2013-12-05 20:34:23 -0500'
  content: Thx, above described correct syntax is working fine for me.
---
<p>
<strong>TL;DR:</strong> If you’re using a semi-colon to separate values in your viewport meta tag, your site may break! Use a comma instead.</p>
<p>Browsers can be pretty forgiving most days, they do their best to fix our coding mistakes; but it’s a tough job.  Most days, they manage to get it right, but trying to fix all the possible error cases is pretty hard.  Worse yet, sometimes one browser fixes our code for us, while others don’t.</p>
<p>The viewport meta tag seems to be one of those elements that’s a little bit persnickety.  The <a href="http://dev.w3.org/csswg/css-device-adapt/" target="_blank">CSS Device Adaptation spec</a> says the correct syntax uses a comma to separate the values.  Unfortunately some sites use a semi-colon, which causes the browser to ignore your viewport settings completely!</p>
<h3 style="color:green;">Correct Syntax</h3>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0&quot; /&gt;<br />
[/html]</p>
<h3 style="color:red;">Incorrect Syntax</h3>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width; initial-scale=1.0; maximum-scale=1.0&quot; /&gt;<br />
[/html]</p>
<p>If you want to see this in action and how bad things can look, use the remote debugger with Chrome for Android Beta to change the comma to a semi-colon in the viewport meta tag on Google.com.  The site will suddenly go from looking good, to looking awful.  </p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2013/02/vp-comma.png"><img src="http://petelepage.com/blog/wp-content/uploads/2013/02/vp-comma-180x300.png" alt="Good viewport syntax" width="180" height="300" class="alignleft size-medium wp-image-2824" /></a><br />
<a href="http://petelepage.com/blog/wp-content/uploads/2013/02/vp-semicolon.png"><img src="http://petelepage.com/blog/wp-content/uploads/2013/02/vp-semicolon-180x300.png" alt="Invalid viewport syntax" width="180" height="300" class="alignright size-medium wp-image-2823" /></a></p>
<div style="clear:both;"></div>
<p>The Developer Tools also warn you in the Console when it comes across an invalid viewport meta tag with the warning: <code>Viewport argument value "device-width;" for key "width" is invalid, and has been ignored. Note that ';' is not a separator in viewport values. The list should be comma-separated.</code></p>
<p>Go make awesome, but use a comma!</p>
