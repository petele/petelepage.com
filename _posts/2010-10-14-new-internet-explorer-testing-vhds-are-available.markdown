---
layout: post
title: New Internet Explorer Testing VHDs Are Available
date: '2010-10-14 08:07:21 -0400'
categories: blog
tags:
- Web Design
- IE8
- Developer Tools
- IE7
- IE6
- ForMSDNIEDC
- IE
- VPC
comments:
- id: 2260
  date: '2010-10-14 08:26:19 -0400'
  content: |-
    Any news on an "Internet Explorer 9 on Windows Vista SP1" image?

    Or in making these VHD's workable in VirtualBox or VMWare?
- id: 2261
    Topsy.com
  date: '2010-10-14 08:35:27 -0400'
  content: '[...] This post was mentioned on Twitter by Chris Williams, jalbertbowdenii,
    Pete LePage, Petra Gregorová, Gaurav Mishra and others. Gaurav Mishra said: RT
    @petele: New blog post: New Internet Explorer Testing VHDs Are Available http://goo.gl/fb/u4TLz
    #internetexplorer #microsoft [...]'
- id: 2262
  date: '2010-10-14 12:15:22 -0400'
  content: this won't do me any good if i can't run it using Parallels/VirtualBox/VMWare.
    my only computer is a Mac.
- id: 2263
  date: '2010-10-14 12:32:46 -0400'
  content: "\"These images are specifically designed to run on Microsoft Virtual PC,
    and may or may not work in other hosting environments. \"\n\nI would bet the majority
    of web developers who need to test older versions of IE use Macs. Seriously, why
    would MS specifically design these VHD's to only run on Windows? \n\nI'm downloading
    it now and trying it on Parallels anyway, but sheesh! The fact that this has gone
    on for years makes me angry and resentful."
- id: 2269
  date: '2010-10-16 03:23:22 -0400'
  content: '[...] “After a little delay, the Internet Explorer App Compat Testing
    VHDs are now available for download on the Microsoft Download Center. Like the
    previous set of images, these ones are time-bombed for 90 days and will expire
    on January 11th, 2011,” revealed Microsoft’s Pete LePage. [...]'
- id: 2273
  date: '2010-10-17 10:05:45 -0400'
  content: |-
    It's possible to run the VHDs in VirtualBox, but they won't work. No internet connection, will expire due to lack of activation after 3 days, etc.

    Sucks balls. It's probably this way because of MS anti piracy policies.
- id: 2279
  date: '2010-10-18 18:15:30 -0400'
  content: saw your Lap of HTML5 IE9 webcast. PLEASE pronounce ATTtribute (as noun)
    with the accent on 1st syllable. atTRIBute with accent 2nd syllable is a verb.
    An attribute=a noun
- id: 2326
  date: '2010-10-21 17:02:45 -0400'
  content: "Maybe the most interesting read I read this week?\r\n\r\n Yours Truly,\r\nTrey"
- id: 2344
  date: '2010-10-27 07:23:31 -0400'
  content: I'm primarily a Mac/Linux user so only needing one Windows box available
    for testing multiple versions is  really useful. However, the images don't have
    the latest SP for Vista which means that not only can I not test on the latest
    version but I also can't install IE9 beta. And since IE9 beta clobbers the existing
    IE, I can't install it on my Windows 7 install.
- id: 2346
  date: '2010-10-28 01:49:17 -0400'
  content: "well I just downloaded the XPSP3-IE6 image, and the password provided
    in the readme does not work. :/\r\n\r\nI'm a bit stuck here."
- id: 2347
  date: '2010-10-28 02:28:01 -0400'
  content: My bad, password works perfectly. I just had to remember that the VM is
    configured with an us keyboard... :s
- id: 2349
  date: '2010-10-28 15:32:12 -0400'
  content: |-
    Unfortunately I would have to disagree with this line:

    "with the F12 Developer Tools and get an almost perfect replication of IE9, IE8 or even IE7."

    My experience has shown me that there are several differences with the rendering engine(s).  using the VHD's, VMWare or Spoon.net's virtual apps is much better than playing the guess-if-its-right game in the Developer Tools.
- id: 2379
  date: '2010-11-18 10:31:53 -0500'
  content: |-
    Way to go, having old versions of internet explorer removed from spoon.net!

    It sometimes feels as if microsoft goes out of their way to make our life difficult as web developers. Not only do we have to support your non-standard out of date versions, but you seem to make it difficult for us to do that at every step of the way.

    I'm really very disappointed in microsoft for doing this. The irony is that if it wasn't for spoon.net's service filling a gap you've left yourselves, I would not have recently upgraded to windows 7 64 bit, and microsoft would have lost a sale (previously I was using windows XP and MultipleIE - which sadly won't work with windows 7).

    I really don't like the VHD approach you offer yourself, and most of the guys I work with much preferred spoon.net.

    Why you haven't provided something similar yourself before now (or even just some form of compartmentalisation so different versions of IE could coexist peacefully on the same machine like many other browsers do) is beyond me.

    I know none of this is probably your fault personally, so apologies for the rant, but I notice that you're involved with Internet Explorer and liasing with developers, so I can only hope you can get across the message about how upset a lot of developers and web designers are about removing IE from spoon.net

    I hope it's resolved soon (or that you can take the time to build your own solution instead of these clunky VHD images that only run on your own platform and expire regularly).

    I work with several design and development companies and everyone I speak to is fuming about this at the moment.
---
After a little delay, the [Internet Explorer App Compat Testing VHDs](http://go.microsoft.com/fwlink?LinkID=70868) are now available for download on the Microsoft Download Center. Like the previous set of images, these ones are time-bombed for 90 days and will expire on January 11th, 2011.

Live we’ve done in the past, there are five different images that we’ve made available…

*   Internet Explorer 6 on Windows XP SP3
*   Internet Explorer 7 on Windows XP SP3
*   Internet Explorer 8 on Windows XP SP3
*   Internet Explorer 7 on Windows Vista SP1
*   Internet Explorer 8 on Windows Vista SP1

These images are a bit different then the previous ones we last released in June, the default user account is an admin on the machine, and you have to use a password to log on to the VHD. The password and other important information is in the readme.txt file – so be sure to check that out.

As you test your sites, remember that with Internet Explorer 8 and Internet Explorer 9, you can switch the rendering mode with the F12 Developer Tools and get an almost perfect replication of IE9, IE8 or even IE7. That way, you can save using the VHDs for when there may be an issue with something like Protected Mode, or you need to test IE6.