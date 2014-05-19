---
layout: post
title: 'nGallery Migration : completed at the end of week 2'
date: '2005-07-22 08:23:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Well, it's finally done, I've finished the nGallery migration project, and just in time too!&nbsp; Today is the last day of app building for the Venus team, and its been a really valuable learning experience for me.&nbsp; I've gotten a lot out of this project, and found a few interesting bugs.&nbsp; Unfortunatly, many of them were postponed because we're getting close to RTM and the bug bar is really high right now.&nbsp; It's kind of frustrating that we did app building so late, when few bugs will actually get fixed, but at the same time, if I'd tried to migrate nGallery earlier, it would have been a mess.

The migration process was easy, and the thing that slowed me down the most was moving the HTML out of the templates and into master pages and using datalists, and other databound controls instead of doing all sorts of string replacement as nGallery currently does.&nbsp; I'm also using the SiteMap and all sorts of other new ASP.NET controls.&nbsp; Overall, it took me longer than I expected, but at the same time, it wasn't because of a product issue, but mostly it was a lot of tinkering around with HTML and CSS to get the site to look exactly how I wanted it to look, and provide the same functionality.

Admittedly, I didn't migrate the EXIF stuff, but that should be a pretty easy 1/2 day task, and I didn't migrate the admin site, which I suspect would take about another week to do.&nbsp; 

The one new feature that I wanted to get to and wasn't able to, was the ability to add movies to nGallery.&nbsp; Currently nGallery supports images only, and Gallery (the php app) does, both.&nbsp; I wanted nGallery to do both as well, as I occasionally take videos, and well, I want to be able to import my pictures.&nbsp; So, I guess thats a task for sometime later.&nbsp; 

I'm still waiting to hear from legal about putting the whole project online (sources), but in the mean time, if you are migrating nGallery, and want some samples of what I changed, let me know and I'll post a few of those.&nbsp; It should help to get you started.