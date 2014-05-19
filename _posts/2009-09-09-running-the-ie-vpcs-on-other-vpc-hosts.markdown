---
layout: post
title: Running The IE VPC’s on other VPC Hosts?
date: '2009-09-09 14:34:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments:
- id: 2244
  date: '2010-09-15 05:13:52 -0400'
  content: |-
    Hi Pete,

    What's the latest on the issue of running the IE VPC's - those provided by Microsoft - in other virtual environments like VMware Fusion?

    Have you found a solution other than having to build one's own VPC?

    Kind regards,
    Kaleb
- id: 2245
    OS X &#8211; Flailing Wildly - Ryan Parman
  date: '2010-09-15 07:01:02 -0400'
  content: '[...] Update: Microsoft&#8217;s images are broken, and don&#8217;t work
    on anything except VirtualPC now. Mac and Linux users are out of luck for the
    time being. More information on the subject can be found at http://petelepage.com/blog/2009/09/running-the-ie-vpcs-on-other-vpc-hosts/.
    [...]'
---

I’ve had a few people email me, or email the IE blog to ask about running the IE VPC’s on other VPC hosts than Microsoft VPC so I figured I’d post this to my blog.

<span style="text-decoration: line-through;">I don't think anything has changed in the images since we've started producing them back in 2006. I'm pretty sure they've never worked on in Parallels, Fusion, or any other VPC environment than Microsoft VPC</span>.  For whatever reason, the hardware key on a non-Microsoft VPC host is different than that of the Microsoft VPC host, and so Windows thinks that the hardware has changed, and it requires re-activation.  If you have your own XP activation code, you can use that and reactivate the image.

According to the EULA that the legal folks wrote, you're only allowed to run the VPC's on Microsoft VPC, not on other VPC hosting environments.  I understand that this solution doesn’t help some of you.

If you have a Windows XP license, I'd highly recommend building your own VPC's.  First you don't have to worry about re-activation or anything like that, but secondly, your own VPC images won't expire every three months like ours will.  We time bomb the images because we are effectively giving away a free copy of Windows.

Hope that clears things up a bit.

PEte

**UPDATE [9/15/09]**: I've spent some time investigating this issue, and now understand that the VPC images used to work on other hosting environments, but with the latest release, don't any more.  We have a better understanding of the issue now, and while we're looking for a solution, we don't have one right now.  If you're using the VPC's, and they don't work any more, I encourage you to email me, with your name, how you're using them and the hosting environment that you're using.

![](http://blogs.msdn.com/aggbug.aspx?PostID=9893232)