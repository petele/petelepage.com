---
layout: post
title: Writing IE AddOns
date: '2006-11-07 15:22:49 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Having just kicked off the AddOn contest for IE, we're working madly to get more documentation and other info out about how to write AddOns for IE.  Last week, John, one of the SDK writers got a great article up on the MSDN website about how to write BHO's for IE.  You can check it out at [http://msdn.microsoft.com/library/default.asp?url=/library/en-us/IETechCol/cols/dnexpie/expie_hello_bho.asp](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/IETechCol/cols/dnexpie/expie_hello_bho.asp).    It's basically a HelloWorld type walk through that gets into a little bit of detail, but is a great way to start if you've not tried before.  This first one is written in C++, but we are working on managed code examples as well.

If you're not familiar with AddOns within IE, there are a couple of different kinds.  There are Explorer Bars/Tool Bands and Desktop Bands, Download Managers, Browser Helper Objects, Tool Bars and Menu Bars and finally context menu AddOns.  Each one has a it's place for the features that it offers, and often, you might build "one" AddOn that uses several different AddOn models to create the full power that you want.   For example, the Windows Live Toolbar is a BHO, plus a Menu Bar.  The IESpell AddOn is an Explorer Bar (I think), and so forth.

You can find out lots more info about AddOn development at on the [IE Developer Center](http://msdn2.microsoft.com/en-us/ie/default.aspx).  There is a whole section on [AddOn Development](http://msdn2.microsoft.com/en-us/ie/aa740478.aspx), that goes in to a lot more detail about how to create AddOns, and what you need to do them.

BTW: A couple people have asked about the contest, and if it is open to people who have already submitted their AddOn.  The answer is kind of.  You need to resubmit it, and it has to have some kind of update.  You can't do a bug fix, or a small UI change, but you need to do some kind of significant upgrade.  But you've got plenty of time to figure out what you want to do, and make sure it gets done well.  We'll get a post up on the IE blog later this week about that.

![](http://blogs.msdn.com/aggbug.aspx?PostID=1020662)