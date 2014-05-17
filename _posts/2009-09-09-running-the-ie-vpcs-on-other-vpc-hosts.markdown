---
layout: post
status: publish
published: true
title: Running The IE VPC’s on other VPC Hosts?
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1282
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:9893232
date: '2009-09-09 14:34:00 -0400'
date_gmt: '2009-09-09 21:34:00 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments:
- id: 2244
  author: Kaleb Kajero
  author_email: Kaleb.Kajero@bbc.co.uk
  author_url: http://Website
  date: '2010-09-15 05:13:52 -0400'
  date_gmt: '2010-09-15 12:13:52 -0400'
  content: |-
    Hi Pete,

    What's the latest on the issue of running the IE VPC's - those provided by Microsoft - in other virtual environments like VMware Fusion?

    Have you found a solution other than having to build one's own VPC?

    Kind regards,
    Kaleb
- id: 2245
  author: Run Internet Explorer 6 (or IE7, or IE8) images in VMware Fusion on Mac
    OS X &#8211; Flailing Wildly - Ryan Parman
  author_email: ''
  author_url: http://blog.ryanparman.com/2009/01/07/run-ie6-ie7-ie8-images-vmware-fusion-macosx/
  date: '2010-09-15 07:01:02 -0400'
  date_gmt: '2010-09-15 14:01:02 -0400'
  content: '[...] Update: Microsoft&#8217;s images are broken, and don&#8217;t work
    on anything except VirtualPC now. Mac and Linux users are out of luck for the
    time being. More information on the subject can be found at http://petelepage.com/blog/2009/09/running-the-ie-vpcs-on-other-vpc-hosts/.
    [...]'
---
<p>I’ve had a few people email me, or email the IE blog to ask about running the IE VPC’s on other VPC hosts than Microsoft VPC so I figured I’d post this to my blog.</p>
<p><span style="text-decoration: line-through;">I don't think anything has changed in the images since we've started producing them back in 2006. I'm pretty sure they've never worked on in Parallels, Fusion, or any other VPC environment than Microsoft VPC</span>.  For whatever reason, the hardware key on a non-Microsoft VPC host is different than that of the Microsoft VPC host, and so Windows thinks that the hardware has changed, and it requires re-activation.  If you have your own XP activation code, you can use that and reactivate the image.</p>
<p>According to the EULA that the legal folks wrote, you're only allowed to run the VPC's on Microsoft VPC, not on other VPC hosting environments.  I understand that this solution doesn’t help some of you.</p>
<p>If you have a Windows XP license, I'd highly recommend building your own VPC's.  First you don't have to worry about re-activation or anything like that, but secondly, your own VPC images won't expire every three months like ours will.  We time bomb the images because we are effectively giving away a free copy of Windows.</p>
<p>Hope that clears things up a bit.<br />
PEte</p>
<p><strong>UPDATE [9/15/09]</strong>: I've spent some time investigating this issue, and now understand that the VPC images used to work on other hosting environments, but with the latest release, don't any more.  We have a better understanding of the issue now, and while we're looking for a solution, we don't have one right now.  If you're using the VPC's, and they don't work any more, I encourage you to email me, with your name, how you're using them and the hosting environment that you're using.</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=9893232" alt="" width="1" height="1" /></p>
