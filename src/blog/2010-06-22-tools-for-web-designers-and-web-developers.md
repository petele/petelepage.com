---
layout: post
title: Tools For Web Designers and Web Developers
date: '2010-06-22 11:31:39 -0400'
categories: blog
tags:
- IE9
- IE8
- HTML
- Developer Tools
- xWeb
- Safari
- Multiple Browsers
- IE7
- IE6
- Expression
- ForMSDNIEDC
comments:
- id: 1741
  date: '2010-06-30 14:00:25 -0400'
  content: |-
    Super!  I am having some sort of issue with getting IE6/IE7/IE8 images to install on VirtualBox on a Mac.  It's installing as advertised, but I get stuck at a Windows Activation nag screen: the device won't recognize my network connection, and the call to phone support was about useless as well.

    Am I incorrect in assuming that these images ARE here for cross-browser checking and ARE available for the general web development public to download and install? Am I doing something wrong??
- id: 1742
  date: '2010-06-30 16:25:34 -0400'
  content: "Hey Bronius,\r\n\r\nYou are correct that they are for cross browser checking,
    unfortunately the issue you're running into is a known issue - the images are
    not supported in virtual hosts other than Microsoft Virtual PC.\r\n\r\nWe're looking
    for options for non-Windows users, but right now don't have one other than to
    recommend you create your own Windows virtualization.\r\n\r\nThanks,\r\nPEte"
- id: 1744
  date: '2010-07-01 08:42:56 -0400'
  content: |-
    Ok thanks Pete- I thought it was unexpected that VirtualBox was able to load VPC images, but I guess that explains "the significant change in hardware detected" and what is triggering the whole license activation bit.

    In the mean time, I guess it's back to http://browsershots.org/ and http://netrenderer.com/
- id: 1745
  date: '2010-07-01 08:50:44 -0400'
  content: |-
    The VPC images do in fact work with other virtualization software (VirtualBox, for example). You just need to convert the images from VPC format to VHD. It's fairly simple to do so.


    1. change the VPC file’s extension from .exe to .zip
    2 download and install Zipeg
    3. drag the VPC into Zipeg
    4. select the .vhd file inside the Zipeg window, and click Extract. Be sure to wait for Zipeg to finish – look for the green bulb in the bottom right of the Zipeg window.

    More here:
    http://www.10voltmedia.com/blog/2008/12/screencast-install-internet-explorer-on-osx-using-virtualbox/
- id: 1749
  date: '2010-07-01 20:46:12 -0400'
  content: It occurred to me that if you need a simple fix to this problem (that Microsoft
    _wants_ to offer free .vhd snapshots for purposes of allowing greater testing
    of websites in various IE versions) and that the hang-up here is that running
    a snapshot saved in VPC in VirtualBox raises the too many hardware differences
    licensing flag, then why not just offer up .vhd's built in VirtualBox as well?
- id: 3899
  date: '2011-06-10 02:25:03 -0400'
  content: And keep in mind that prior to IE8 the script engine can be updated separately
    from IE.
---

Building cool websites requires tools beyond your development environment. In my last two posts, I introduced the [Internet Explorer Developer Tools](http://petelepage.com/blog/2010/06/internet-explorer-developer-tools/), and the [HTML Tab within the Internet Explorer Developer Tools](http://petelepage.com/blog/2010/06/internet-explorer-developer-tools-html/). Today, I want to take a quick tangent off of the IE Developer Tools, and look at some other tools available from Microsoft that you may find useful.

## Expression Web SuperPreview

[![xWeb3a](/assets/xWeb3a_thumb.png "xWeb3a")](/assets/xWeb3a.png)[Expression Web SuperPreview](http://www.microsoft.com/expression/products/SuperPreview_Overview.aspx) is part of the [Expression Studio](http://www.microsoft.com/expression/) set of tools, and is a visual debugging tool that makes it much easier to see and debug different rendering engines side by side! One of the coolest features of Expression Web SuperPreview is that it has the IE6 rendering engine built it, so if you want to see what your site looks like in IE6, without having to find a machine with IE6 on it, you’re good to go! In fact, it’ll show you how your page renders in IE6, plus whatever versions of IE you have installed, as well as Firefox!

You can do side-by-side views of the different browsers, as well as visual overlays, sort of like an onion-skin mode. This is really great if you’re trying to get pixel identical layout. As you move your mouse over different elements in the page, SuperPreview shows you where that element would be in the other browser. And when you click on the element, a little window pops up giving you information about that element. What’s most useful about that is that it will show you the properties that are different. For example, when I look at my site in IE6 and IE8, I immediately notice lots of extra space between the header and the content. If I click on the “Home” link, in IE8, I can see the top is at “230” where as in IE6 it’s at 299. 

One thing Expression Web SuperPreview doesn’t really let me do is interact with my page beyond that. I can’t click on links, navigate through pages, enter any information, and it doesn’t execute any JavaScript. But for comparing layouts on static pages, or on pages where you can get them into a state that you want before loading them – this is the tool for you!

Expression Web SuperPreview is a paid product that comes as part of the Expression Studio set of tools. If you’ve got an MSDN subscription, you can download it as part of your subscription, but if you don’t, you can get a 60 day free trial at [http://microsoft.com/expression](http://microsoft.com/expression). 

## Expression Web SuperPreview Remote

[![xWeb5](/assets/xWeb5_thumb.png "xWeb5")](/assets/xWeb5.png)I’m calling out the Remote feature of Expression Web SuperPreview separately because it’s still in beta, and you have to sign up for it, but this is super cool. Remote adds an additional browser to the matrix, adding Safari 4.0 for the Mac! Now, if you’re a PC user and don’t have access to a Mac, you can see what your site looks like without having to find a Mac.

Just like you can with Expression Web SuperPreview, you can click on elements and see where they’re laying out on the page and interact with them like you can when running locally, but this way you’re not resource constrained based on the hardware you’re running on your machine. A quick easy way to verify your pages in other browsers and other operating systems.

Expression Web SuperPreview Remote is part of Expression Web SuperPreview, and the only thing that you need to do to use is it is to activate it, which requires a valid email address. Takes only a few seconds to get set up and working! Again, you can get a 60 day free trial of Expression Web SuperPreview at [http://microsoft.com/expression](http://microsoft.com/expression). 

## Expression Encoder Pro

[![XE1](/assets/XE1_thumb.jpg "XE1")](/assets/XE1.jpg)I’ll just include a quick note here on this one, but one of the tools that comes with the Expression Studio set of tools is [Expression Encoder Pro](http://www.microsoft.com/expression/products/EncoderPro_Overview.aspx). It’s a great tool for encoding video for the web. It’s the primary tool for creating Silverlight video, but it will also encode to H.264 video, which is the codec used by Internet Explorer 9! While I wouldn’t give it to my Mom to use, as someone who is reasonable tech savvy, you should be able to figure it out without any problems.

I’ve used it to encode videos from one format to another, or re-encode them to a smaller size. Super powerful, and fun to play with!

## Virtual PC Testing Images

[![VPCDownloads](/assets/VPCDownloads_thumb.png "VPCDownloads")](/assets/VPCDownloads.png)People have often asked about installing multiple versions of Internet Explorer on the same machine, and while there are tools and utilities out there, there isn’t a supported, official way to do it right now. The tools that are available are risky in a couple of ways:

1.  You’re installing system files from a somewhat random website, are you sure you want to do that? Are you sure they haven’t tampered with the files and inserted malware or anything like that? 
2.  Internet Explorer is part of the operating system, and there are several components that you need to replace to change versions including the JavaScript engine, parts of the network stack, in addition to the rendering engine. If any of those get out of sync, or the OS tries to call an API that didn’t exist in a previous version, you could find your system becoming unstable and not quite working right. 
3.  How many real world customers are using these “Frankenbuilds”? While it may be an interesting test concept, it doesn’t mimic how real world users are visiting your site. 

That’s why we strongly encourage you to virtualize your test environment, and we try to make that easier by providing VHD images that you can use to test what your customers will see and use. We provide IE6, IE7 and IE8 on Windows XP, as well as IE7 on Vista and IE8 on Vista. These images used to work on other virtualized hosts other than VPC, and right now, they’re not working. I’m still looking for solutions, and haven’t given up! I recommend that you build your own images in the mean time. The XP hard drives are time bombed because, we’re basically giving away the OS, and that makes some folks here uncomfortable. 

You can download the [Internet Explorer App Compat VPC Images](http://www.microsoft.com/downloads/details.aspx?FamilyID=21eabb90-958f-4b64-b5f1-73d0a413c8ef&amp;displaylang=en) from the Microsoft Download Center. We’re updating the images today (6/22/10), and are just waiting for them to propagate out through the system.

## Using XPERF To Really Dive Into IE Performance

[![MeasuringPerf_10](/assets/MeasuringPerf_10_thumb.png "MeasuringPerf_10")](/assets/MeasuringPerf_10.png)During my TechEd presentation about browser performance, I talked about how if you knew where the browser was spending the most of it’s time, you could optimize for the most expensive parts. The thing that I didn’t cover, was the tools you can use to understand where Internet Explorer is spending it’s time.

Well, last night, the IE team posted a great blog post titled [Measuring Browser Performance with the Windows Performance Tools](http://blogs.msdn.com/b/ie/archive/2010/06/21/measuring-browser-performance-with-the-windows-performance-tools.aspx). They’ve given you everything that you need to know in order to dive in here. I won’t include the whole post here, or even recap it, but strongly recommend you check it out!

Enjoy!   
PEte