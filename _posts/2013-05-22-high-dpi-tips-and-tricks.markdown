---
layout: post
status: publish
published: true
title: 'High DPI: Tips and Tricks'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2862
wordpress_url: http://petelepage.com/blog/?p=2862
date: '2013-05-22 07:45:43 -0400'
date_gmt: '2013-05-22 11:45:43 -0400'
categories:
- Web Design &amp; Development
- HTML5
- Mobile
- High DPI
tags:
- Conferences
- Web Design
- BestPractices
- mobile
- viewport
- io13
- highdpi
- retina
comments: []
---
<p><img class="alignleft size-thumbnail wp-image-2870" alt="io13-logo" src="http://petelepage.com/blog/wp-content/uploads/2013/05/io13-logo-150x150.png" style="width:150px;height:150px;margin-right:20px;margin-bottom:20px;" />During the presentation that <a href="https://plus.google.com/115120259572077332394/posts" target="_blank">John Mellor</a> and I did at <a href="https://developers.google.com/events/io/2013/" target="_blank">I/O</a> this year covering building beautiful websites for high DPI displays, we summarized our talk into about 7 key points.</p>
<p>If you follow these seven simple guidelines, you'll find your site looks great on any high DPI display.</p>
<ul>
<li>Setting <code style="color: #0da861;">width=device-width</code> means you only have to care about <span style="color: #0da861;">device independent pixels</span></li>
<li>If you don't set the viewport to <code>width=device-width</code>, or if you use a <span style="color: #f44a3f;">fixed width</span>, you're in a <span style="color: #f44a3f;">world of hurt</span>.</li>
<li>The <code>devicePixelRatio</code> on high DPI devices can range from <span style="color: #4387fd;">1.3 to 3</span> and is about <span style="color: #4387fd;">more than just phones or tablets</span>, there are laptops too!</li>
<li>Use <span style="color: #0da861;">vector images</span> wherever possible</li>
<li>Use <code style="color: #0da861;">@media</code> queries to specify appropriate background images</li>
<li><span style="color: #0da861;">Highly compressed 2x</span> images work well in many cases</li>
<li>For sharp <code>canvas</code> images, beware of <code style="color: #f44a3f;">webkitBackingStorePixelRatio</code></li>
</ul>
<p>You can find the video on YouTube at <a href="http://youtu.be/alG-UwRWV_U" target="_blank">http://youtu.be/alG-UwRWV_U</a>, and we’ve also posted the slides at <a href="http://goo.gl/j5Z5W" target="_blank">http://goo.gl/j5Z5W</a>.</p>
