---
layout: post
title: IE 7 and its RSS Feeds
date: '2005-08-01 08:10:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I installed IE7 on one of my play boxes last week, and I need to say, I'm impressed.&nbsp; There are some really great new features in there that will help make life easier and prettier.&nbsp; I'm really hoping they come along way in the CSS support.&nbsp; I'm fine with IE not passing the Acid2 test, I just want to make sure that its easier for web designers to not have to put all these hacks into their website to make them look consistent across browsers.

One very cool feature (and Safari or FireFox may have this), is the ability to detect the RSS feeds in a page, and give you a link to it.&nbsp; I'm not sure how useful it is yet, but we'll see.&nbsp; I've added the RSS feeds to the nGallery v2 that I've been working on (I'm still waiting on legal here too).&nbsp; For reference, if you page supports RSS feeds, you should include 

&lt;link rel="alternate" type="application/rss+xml" title="Top stories" href="/rss/home.xml"/&gt;

in your page, so that IE and other browsers pick up on it, and can easily use it.