---
layout: post
title: Testing Multiple IE Versions, VPC’s and Super Preview
date: '2009-07-20 14:40:42 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

It’s been almost 2 years now since we first shipped the Internet Explorer testing VPC’s so that you could test IE6 and at the time IE7 on the same machine.  We understand the need for people to test IE6, IE7 and IE8 on the same machine, and remain committed to shipping the VPC’s!

The VPC’s will remain an important component of testing your sites, because they give you a real, and accurate way of seeing how your site interacts with not just rendering, but JavaScript, and other components in the browser.

But there’s a new option that will work fantastically for testing layout and rendering of pages, Expression Web SuperPreview.  SuperPreview allows you to compare multiple rendering engines side by side, or even super-impose one over the other.  For example, you could see what a page looks like in IE6 under the same page in IE7.  Does everything line up, are the images in the right place, are the right fonts used.  SuperPreview for Internet Explorer is free and can be downloaded on the [Expression Web](http://expression.microsoft.com/en-us/dd565874.aspx) website.

The limitation of SuperPreview For Internet Explorer is that it only supports the different rendering engines of IE.  Now that’s great, but we all know that IE is not the only browser on the internet – wouldn’t it be great if you could do IE8 overlaid on Firefox 3.5?  But you can!  The full version of SuperPreview that comes with Expression Web, supports all of the IE rendering engines, and also supports Firefox!  The full version of SuperPreview comes with Expression Web, which will be available later this summer – keep an eye on on the Expression website for when it’s released.

[![xwebsp](http://blogs.msdn.com/blogfiles/petel/WindowsLiveWriter/TestingMultipleIEVersionsVPCsandSuperPre_A434/xwebsp_thumb.png "xwebsp")](http://blogs.msdn.com/blogfiles/petel/WindowsLiveWriter/TestingMultipleIEVersionsVPCsandSuperPre_A434/xwebsp_2.png)

The big difference between SuperPreview and a lot of the other tools you can use online is that SuperPreview is either free (with the only IE limitation), or you need to purchase it as part of Expression Web; but once you’ve purchased it, it’s yours, it’s not a service you have to pay for every month, or per use.  And most of those online services don’t give you the ability to interact with the DOM, do overlays, and a lot of the other cool features that SuperPreview has.

Soma has a really [great blog post](http://blogs.msdn.com/somasegar/archive/2009/06/05/expression-web-3.aspx) about Expression Web 3, and goes into some cool detail about SuperPreview.

Enjoy!

PEte

PS: I’m working on updating the next set of VPC’s.  We’re trying something new this year, so hopefully you’ll see them sooner and with more regularity.

![](http://blogs.msdn.com/aggbug.aspx?PostID=9842061)