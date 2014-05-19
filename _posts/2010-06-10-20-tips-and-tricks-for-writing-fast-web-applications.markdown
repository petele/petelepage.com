---
layout: post
title: 20 Tips and Tricks For Writing Fast Web Applications
date: '2010-06-10 11:30:00 -0400'
categories: blog
tags:
- TechEd
- JavaScript
- Performance
- Fast
- TipsAndTricks
- ForMSDNIEDC
comments:
- id: 1679
  date: '2010-06-11 07:53:55 -0400'
  content: At least IE is ignoring the BLINK tag in your bio :)
- id: 1691
  date: '2010-06-15 07:15:13 -0400'
  content: Hellp Pete, Great session. At the ssession I asked if you could provide
    us info on the tools you used to get  the stats on where the browser was spending
    its time. Can you provede this info?
- id: 1713
  date: '2010-06-22 06:07:56 -0400'
  content: "Hello again Pete\r\nYou mentioned at the session that you would provide
    us info on the tools you used to get the stats on where the browser was spending
    its time. Can you provide this info?"
- id: 1714
  date: '2010-06-22 10:29:40 -0400'
  content: "It looks like the IE Engineering Blog beat me to the punch!  \n\n<a href=\"http://blogs.msdn.com/b/ie/archive/2010/06/21/measuring-browser-performance-with-the-windows-performance-tools.aspx\"
    rel=\"nofollow\">http://blogs.msdn.com/b/ie/archive/2010/06/21/measuring-browser-performance-with-the-windows-performance-tools.aspx</a>\n\nIt's
    a great post, with lots of detail and info!  I'll summarize later today, but wanted
    to share sooner than later!\n\nEnjoy!\nPEte"
---

I’m about 30 minutes from walking on stage to present my last session here at [TechEd 2010 in New Orleans](http://northamerica.msteched.com) and I wanted to share this presentation early, just in case the session room fills up and folks can’t make it in or for those of you who weren’t able to make it.  If you’re a TechEd attendee, the slides are up on the Schedule Builder, otherwise, you can find my deck [here](http://petelepage.com/presentations/decks/TE2010-WEB05-INT.pptx) [8meg PPTX].

The Internet Explorer engineering team spends a lot of time working to understand what developers and doing when building their websites, where the bottle necks are (both in the browser and in the code that developers write).  With all of the information that they gathered, they built set of 20 tips and tricks that will help your site run faster, and more efficiently.  While the research they did used Internet Explorer as the base, almost all of these tips and tricks apply to all browsers.

Jason Weber presented these tips and tricks at MIX2010 this year – the session web page is at [http://live.visitmix.com/MIX10/Sessions/CL29](http://live.visitmix.com/MIX10/Sessions/CL29 "http://live.visitmix.com/MIX10/Sessions/CL29") and you can also download the [slides](http://ecn.channel9.msdn.com/o9/mix/10/pptx/CL29.pptx), or the video in [MP4](http://ecn.channel9.msdn.com/o9/mix/10/mp4/CL29.mp4), [Windows Media Format](http://ecn.channel9.msdn.com/o9/mix/10/wmv/CL29.wmv) or [High Quality Windows Media Format](http://ecn.channel9.msdn.com/o9/mix/10/wmv-hq/CL29.wmv).  It runs about 80 minutes and should be required watching for every developer out there I think. I know I learned a few things and I think my site breaks some of the best practices that I’ve got listed below!  (I guess I’ve got some work to do! ![Smile](/assets/wlEmoticonsmile.png))

Without any further ado, I present to you…

## 20 Tips &amp; Tricks To Improve Your Website Performance

1.  Ensure server side compression is enabled on “text” like files
2.  Use conditional requests
3.  Provide cacheable content
4.  Minify your JavaScript
5.  Don’t scale images (I’m really guilty of this one)
6.  Use image sprites
7.  Link JavaScript at the bottom of your file, and avoid inline JavaScript
8.  Add the “defer” tag when you have to link to JavaScript at the top of your page
9.  Link Style Sheets at the top of your page
10.  Avoid using @import
11.  Minimize Walking Look Up Chain
12.  Cache Function Pointers
13.  Use the Native JSON object
14.  Remove duplicate scripts
15.  Minimize DOM interactions
16.  Use efficient DOM Methods
17.  Use querySelectorAll for groups
18.  Only send required styles
19.  Simplify your selectors
20.  Minimize page layouts

PS: If you want a little laugh, go to the [TechEd](http://northamerica.msteched.com) site, and look at my [bio](http://NorthAmerica.MSTechEd.com/featuredspeakers?fbid=pfq8PhbInf4&amp;mtag=mbar&amp;site_id=email#Pete_LePage) – it wasn’t quite supposed to read like that ![Smile](/assets/wlEmoticonsmile.png)

**[UPDATED 6/10/10 1:25pm PST]** Fixed the link to the slides, sorry about that!