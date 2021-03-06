---
layout: post
title: The Browser Icon - FavIcon.ico
date: '2006-01-10 04:50:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Welcome to 2006! 

For quite some time, I've wondered how people get their websites to display with the customized icon in the address bar, instead of the standard IE (or applicable icon) icon.&nbsp; I was talking with my friend [Cam](http://www.livejournal.com/users/c9/) about this while he was down in Seattle for New Years and he explained it was simply a file that you put in the root of your web site and bam, there&nbsp;it is.&nbsp; 

So, after a little investigation, some mild head banging and the assorted fun that goes along with IE6, I was able to get it working on my [nGallery](http://www.bigbackpack.ca/ngallery/) web site!&nbsp; Want to do this on your website, simple add a FAVICON.ICO file to the root of your website.&nbsp; There are a few caveats as I figured out though.

The FAVICON.ICO must be an .ico file, with nothing too complex about it.&nbsp; My first attempts had 16x16, 32x32, 48x48 and 64x64 and a whole matrix of colours (16, 256, and XP).&nbsp; I eliminated all but the 16x16 256 and the 32x32 256 versions from the file, and put the file in the root directory, and BAM it worked!&nbsp; 

The next question/task it to create some of my own icons or my own images.&nbsp; You can probably do this in Photoshop, though I don't have PS installed here on my work computers, so I can't check that right now, but I know you can edit/create ICO files in VS2005!&nbsp; How's that for convenient, as you're creating your web application, be sure to create a FavIcon.ico so that people can easily recognize your website as something that stands out from the crowd.

I did find some more info about this on Wikipedia that may be useful.&nbsp; IE6 only supports ICO files, but other browsers support GIF and PNG, so that may be worth checking out, but you do lose some of your impact with some users when you do this.