---
layout: post
title: UPS Package Tracking In Your IE7 Search Bar
date: '2007-10-08 12:13:41 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Confession time, I'm an online shopping addict.  Amazon and I get along really well.  Well, Amazon and my bank account don't get along well, but Amazon and I do.  Along with many other online stores, I tend to do a good bit of shopping online.  This morning, I got a tracking notification for a package that is being shipped to me, and it occurred to me this morning that you could easily create a search provider for UPS (or most other shippers for that matter) and have it appear in your IE7 Inline Search box really easily.

The easiest way to add it is to go to [Add Search Providers to Internet Explorer 7](http://www.microsoft.com/windows/ie/searchguide/en-en/default.mspx?dcsref=http://runonce.msn.com/runonce2.aspx) and in the "Create Your Own" box, add _http://wwwapps.ups.com/WebTracking/processInputRequest?sort_by=status&amp;error_carried=true&amp;tracknums_displayed=1&amp;TypeOfInquiryNumber=T&amp;loc=en-us&amp;InquiryNumber1=TEST&amp;AgreeToTermsAndConditions=yes_ to the URL text box, then give it a name.  Finally, click on the INSTALL button, and it'll add the UPS package tracking to your search provider.

Now, all you have to do is put a tracking number in your search box, and hit enter.  Bingo, you've got results!

![](http://blogs.msdn.com/aggbug.aspx?PostID=5366270)