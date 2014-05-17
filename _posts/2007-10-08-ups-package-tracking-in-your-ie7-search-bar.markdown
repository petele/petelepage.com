---
layout: post
status: publish
published: true
title: UPS Package Tracking In Your IE7 Search Bar
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1360
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:5366270
date: '2007-10-08 12:13:41 -0400'
date_gmt: '2007-10-08 19:13:41 -0400'
categories:
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>Confession time, I'm an online shopping addict.  Amazon and I get along really well.  Well, Amazon and my bank account don't get along well, but Amazon and I do.  Along with many other online stores, I tend to do a good bit of shopping online.  This morning, I got a tracking notification for a package that is being shipped to me, and it occurred to me this morning that you could easily create a search provider for UPS (or most other shippers for that matter) and have it appear in your IE7 Inline Search box really easily.</p>
<p>The easiest way to add it is to go to <a href="http://www.microsoft.com/windows/ie/searchguide/en-en/default.mspx?dcsref=http://runonce.msn.com/runonce2.aspx">Add Search Providers to Internet Explorer 7</a> and in the "Create Your Own" box, add <em>http://wwwapps.ups.com/WebTracking/processInputRequest?sort_by=status&amp;error_carried=true&amp;tracknums_displayed=1&amp;TypeOfInquiryNumber=T&amp;loc=en-us&amp;InquiryNumber1=TEST&amp;AgreeToTermsAndConditions=yes</em> to the URL text box, then give it a name.  Finally, click on the INSTALL button, and it'll add the UPS package tracking to your search provider.</p>
<p>Now, all you have to do is put a tracking number in your search box, and hit enter.  Bingo, you've got results!</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=5366270" alt="" width="1" height="1" /></p>
