---
layout: post
title: IE6 VPC Refresh
date: '2007-03-20 16:20:21 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Cross-posted from the [IE Blog](http://blogs.msdn.com/ie/archive/2007/03/20/ie6-vpc-refresh-now-available.aspx)

In my original [blog post](http://blogs.msdn.com/ie/archive/2006/11/30/ie6-and-ie7-running-on-a-single-machine.aspx) about releasing the IE6 Virtual PC Image, we mentioned that it would expire on April 1st, 2007 (no, it wasn’t an April Fool’s joke), and that we’d be releasing a new VPC image to replace it sometime in March.  Well, I’m happy to report that I propped the new VHD up on Monday morning.  You can download the image [here](http://go.microsoft.com/fwlink/?LinkId=70868). Take note that a free download of [Virtual PC 2007](http://www.microsoft.com/downloads/details.aspx?FamilyID=04d26402-3199-48a3-afa2-2dc0b40a73b6&amp;DisplayLang=en) is now available, replacing VPC2004.

I didn’t make any major changes to the image other than adding the latest security updates. I also managed to reduce the download size to just under 400 megs, shaving off almost 100 megs from the previous image size. This image is time-bombed to July 23<sup>rd</sup> , but we will continue to release these images as long as they are needed. They are time-bombed because you get them for free. If you want images without time-bombs, an MSDN subscription is the way to go.

We have learned some interesting things about the distribution process in a virtual machine environment. One is that we currently don't have a way for WGA to work inside this evaluation virtual machine because the process used to create a virtual machine involves de-activation of the key used in the VM.  We are thinking about ways to fix this in the future but it's not as easy to do with Windows XP as it wasn't designed to support distribution like this. If there are specific applications or things you cannot install, follow up in the comments, and we'll see how we can address that for future versions.

We did do some investigation of shipping VHD’s with IE5.5, or earlier, but decided that due to the low browser usage share (less than 1% total usage for all IE versions before 6), it wasn’t going to be beneficial for enough developers and designers.

Keep an eye open in July for the next image drop!

![](http://blogs.msdn.com/aggbug.aspx?PostID=1921209)