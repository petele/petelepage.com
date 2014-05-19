---
layout: post
title: IE7 Slow To Load Site Sometimes? A Fix!
date: '2007-03-15 14:58:28 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Every once in a while, when I've typed "blogs.msdn.com/petel" into my address bar, I find IE7 a little slow to load the site.  Especially after I've gotten home and am no longer on the corporate network.  As it turns out, Vista (and Windows XP), is actually checking my local network connections (mapped drives, etc) for a machine named blogs.msdn.com before it goes out to the internet to find the site.

The easy work around for this, always type http:// before your web request, and it'll always use http instead of checking for local file system, networked file systems and such!

![](http://blogs.msdn.com/aggbug.aspx?PostID=1889048)