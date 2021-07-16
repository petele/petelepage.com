---
layout: post
title: 'High DPI: Tips and Tricks'
date: 2013-05-22
category: web development
tags:
- Conferences
- Web Design
- BestPractices
- mobile
- viewport
- io13
- highdpi
- retina
---
During the presentation that [John Mellor](https://plus.google.com/115120259572077332394/posts) and I did at [I/O](https://developers.google.com/events/io/2013/) this year covering building beautiful websites for high DPI displays, we summarized our talk into about 7 key points.

If you follow these seven simple guidelines, you'll find your site looks great on any high DPI display.

*   Setting `width=device-width` means you only have to care about <span style="color: #0da861;">device independent pixels</span>
*   If you don't set the viewport to `width=device-width`, or if you use a <span style="color: #f44a3f;">fixed width</span>, you're in a <span style="color: #f44a3f;">world of hurt</span>.
*   The `devicePixelRatio` on high DPI devices can range from <span style="color: #4387fd;">1.3 to 3</span> and is about <span style="color: #4387fd;">more than just phones or tablets</span>, there are laptops too!
*   Use <span style="color: #0da861;">vector images</span> wherever possible
*   Use `@media` queries to specify appropriate background images
*   <span style="color: #0da861;">Highly compressed 2x</span> images work well in many cases
*   For sharp `canvas` images, beware of `webkitBackingStorePixelRatio`

You can find the video on YouTube at [http://youtu.be/alG-UwRWV_U](http://youtu.be/alG-UwRWV_U), and we've also posted the slides at [http://goo.gl/j5Z5W](http://goo.gl/j5Z5W).
