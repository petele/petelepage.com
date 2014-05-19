---
layout: post
title: 'nGallery Migration : Day 1'
date: '2005-07-12 12:30:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

After spending a good bit of time this morning trying to figure out the whole template stuff from nGallery, I finally gave up.  The templates and skins for nGallery are pretty convoluted, with pages being built from just chunks of html in individual pages.Part of the whole migration thing that I wanted to do was use some of the new ASP.NET 2.0 controls, and to do that, I have to get rid of some of the old stuff.  Thus, I figured it'd be easier to start over from scratch.  

The biggest pain in the a** I had today was trying to get the top and bottom rounded corners to work.  I believe very strongly in DIVs as opposed to tables, and I'm trying to build this whole thing using only DIVs.  Well, I had to break down this afternoon and put a TABLE in a DIV to get the desired effect.

I'll post the code tomorrow with what I was trying to do (I'm at home now) and maybe someone can tell me what I was doing wrong, or if there was no way of doing it.

Day 1 was successful, all be it, slow.  Tomorrow is a team meeting most of the afternoon, so I don't expect to get much done, but we'll see.