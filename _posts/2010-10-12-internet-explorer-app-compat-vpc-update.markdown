---
layout: post
status: publish
published: true
title: Internet Explorer App Compat VPC Update
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2510
wordpress_url: http://petelepage.com/blog/2010/10/internet-explorer-app-compat-vpc-update/
date: '2010-10-12 10:02:04 -0400'
date_gmt: '2010-10-12 17:02:04 -0400'
categories:
- Web Design &amp; Development
- Microsoft
- Internet Explorer
tags:
- Developer Tools
- Multiple Browsers
- ForMSDNIEDC
- VPC
comments:
- id: 2252
  author: Tweets that mention Internet Explorer App Compat VPC Update -- Topsy.com
  author_email: ''
  author_url: http://topsy.com/petelepage.com/blog/2010/10/internet-explorer-app-compat-vpc-update/?utm_source=pingback&amp;utm_campaign=L2
  date: '2010-10-12 12:34:12 -0400'
  date_gmt: '2010-10-12 19:34:12 -0400'
  content: '[...] This post was mentioned on Twitter by Mark , Pete LePage. Pete LePage
    said: New blog post: Internet Explorer App Compat #VPC Update http://goo.gl/fb/DFZtD
    #internetexplorer #microsoft [...]'
- id: 2259
  author: martin
  author_email: infinite.nwar@gmail.com
  author_url: http://Website
  date: '2010-10-14 07:48:12 -0400'
  date_gmt: '2010-10-14 14:48:12 -0400'
  content: "I just tried loading up the XP IE8 image in VirtualBox, and unfortunately
    no joy. It asks for activation due to 'changes in hardware', and eventually locks
    me out... Maybe someone more knowledgeable than me has a way around that.  \n\nOh
    well. I haven't really been needing to do IE testing lately, but those VMs *were*
    handy while they still worked."
- id: 2636
  author: Jason
  author_email: chaospixel@hotmail.com
  author_url: http://Website
  date: '2011-02-10 05:31:31 -0500'
  date_gmt: '2011-02-10 13:31:31 -0500'
  content: Any updates on availability of the ie9 vpc?
- id: 2803
  author: Jonas Munk
  author_email: jonasmunk@mac.com
  author_url: http://jonasmunk.com/
  date: '2011-03-03 04:45:57 -0500'
  date_gmt: '2011-03-03 12:45:57 -0500'
  content: |-
    Hi

    Any updates on when the IE9 image is ready, I have no other way of testing my many sites. This is really a must for the thousands of people unable to run Vista or Win 7.
- id: 2822
  author: Peter
  author_email: kahi.cz@gmail.com
  author_url: http://Website
  date: '2011-03-05 12:43:07 -0500'
  date_gmt: '2011-03-05 20:43:07 -0500'
  content: I'm also very interested in IE9 VPC – can you Pete provide some approx.
    estimate when it might be released…? Much thanks.
- id: 2995
  author: Steve
  author_email: notimportant@example.com
  author_url: http://Website
  date: '2011-03-21 09:11:10 -0400'
  date_gmt: '2011-03-21 16:11:10 -0400'
  content: I was able to turn the IE8-on-Vista VPC into an IE9 VPC by going through
    the process of installing Vista service packs and then IE9.  I'm hoping desperately
    that there will be an official IE9 VPC before my homemade one expires because
    I don't look forward to doing that again.
---
<p>A bunch of folks have asked about the status of the <a href="http://go.microsoft.com/fwlink?LinkID=70868">Internet Explorer App Compat VHDs</a> (VPCs) as the current set have expired and we haven’t published new ones yet.&#160; First off, I want to let folks know that we are still committed to them and we haven’t abandoned them!&#160; We’ve just run into a few hiccups that weren’t quite what I expected this time around.&#160; </p>
<p>At the beginning of this fiscal year, we changed the process that we use to create the VHDs.&#160; First, we brought the work in house and are building them internally instead of using a vendor to do it.&#160; Second, we found out a little too late that the old system we used for time-bombing had been retired and spent some time working to figure out if there was a replacement program in place or how we could continue to support the Windows XP VHDs.&#160; Thankfully we were able to figure out a new process, but with any new process, there are always some hiccups.&#160; And this time, there were more hiccups than I had expected.&#160; <img style="border-bottom-style: none; border-left-style: none; border-top-style: none; border-right-style: none" class="wlEmoticon wlEmoticon-sadsmile" alt="Sad smile" src="http://petelepage.com/blog/wp-content/uploads/2010/10/wlEmoticonsadsmile.png" />&#160; </p>
<p>The big change between these images is that this Windows XP SP3 installation is a “trial sku” instead of the “full package product” (FPP).&#160; That means that we don’t have to use the complex time-bombing process any more – though because it’s a trial sku, they do still expire after 90 days.&#160; I haven’t tried these VHDs on other VPC hosts, so I can’t speak to if they’ll run without activation.</p>
<p>I finished the last few steps for creating the VHDs late last night, and am working through the release process now.&#160; One good thing about moving them in house, I managed to get the download size way down again, and they’re running between 494meg and 583meg!&#160; Hopefully the smaller size will be good news for those of you who don’t have super fat interweb pipes.</p>
<p>Hopefully they’ll be up tonight (Pacific time) or sometime early tomorrow.&#160; I’ll either update this post, or post a tweet via Twitter when they’re up!</p>
<p>PS: I’m also working with <a href="http://twitter.com/#!/reybango">@reybango</a> to get a VHD or other system in place so that those of you not running Windows Vista or Windows 7 can try Internet Explorer 9.&#160; Sadly when IE9 runs in a VPC host, you don’t get hardware acceleration, but it’s still an opportunity to try or test your site if you’re not running a supported OS. </p>
