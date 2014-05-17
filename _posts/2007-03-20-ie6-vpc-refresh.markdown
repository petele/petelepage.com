---
layout: post
status: publish
published: true
title: IE6 VPC Refresh
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1413
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:1921209
date: '2007-03-20 16:20:21 -0400'
date_gmt: '2007-03-20 23:20:21 -0400'
categories:
- Web Design &amp; Development
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p style="border: blue 1px solid; padding: 5px;">Cross-posted from the <a href="http://blogs.msdn.com/ie/archive/2007/03/20/ie6-vpc-refresh-now-available.aspx">IE Blog</a></p>
<p>In my original <a href="http://blogs.msdn.com/ie/archive/2006/11/30/ie6-and-ie7-running-on-a-single-machine.aspx">blog post</a> about releasing the IE6 Virtual PC Image, we mentioned that it would expire on April 1st, 2007 (no, it wasn’t an April Fool’s joke), and that we’d be releasing a new VPC image to replace it sometime in March.  Well, I’m happy to report that I propped the new VHD up on Monday morning.  You can download the image <a href="http://go.microsoft.com/fwlink/?LinkId=70868">here</a>. Take note that a free download of <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=04d26402-3199-48a3-afa2-2dc0b40a73b6&amp;DisplayLang=en">Virtual PC 2007</a> is now available, replacing VPC2004.</p>
<p>I didn’t make any major changes to the image other than adding the latest security updates. I also managed to reduce the download size to just under 400 megs, shaving off almost 100 megs from the previous image size. This image is time-bombed to July 23<sup>rd</sup> , but we will continue to release these images as long as they are needed. They are time-bombed because you get them for free. If you want images without time-bombs, an MSDN subscription is the way to go.</p>
<p>We have learned some interesting things about the distribution process in a virtual machine environment. One is that we currently don't have a way for WGA to work inside this evaluation virtual machine because the process used to create a virtual machine involves de-activation of the key used in the VM.  We are thinking about ways to fix this in the future but it's not as easy to do with Windows XP as it wasn't designed to support distribution like this. If there are specific applications or things you cannot install, follow up in the comments, and we'll see how we can address that for future versions.</p>
<p>We did do some investigation of shipping VHD’s with IE5.5, or earlier, but decided that due to the low browser usage share (less than 1% total usage for all IE versions before 6), it wasn’t going to be beneficial for enough developers and designers.</p>
<p>Keep an eye open in July for the next image drop!</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=1921209" alt="" width="1" height="1" /></p>
