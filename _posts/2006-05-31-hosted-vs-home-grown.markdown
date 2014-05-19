---
layout: post
title: Hosted vs Home Grown
date: '2006-05-31 18:05:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I'm struggling with an interesting connumdrum right now.  I take a lot of pictures.  And I mean a lot of pictures, I've got 11,000+ digital photos, and more than 500 rolls of film that hasn't been scanned.  I love to share my photos with my friends, and in the past I've always done that via my own home grown site.  For many years, I wrote my own, or just manually created the HTML and put the pictures online.  Then a few years ago, I came across nGallery.  I love(d) nGallery.  It solved almost all of my problems, gave me the features that I wanted, and was fairly powerful.

Then, along comes Flickr.  I played with it for a bit, and decided I didn't like the UI, either the admin side, or the front end.  I like the idea of the photo flo, but the sets aren't as strong as galleries.  For example, you can't have a set within a a set in Flickr, but you can have a gallery within a gallery in nGallery.   Flickr though does give you some fun and interesting additional support, such as the ability to use tags in photos, and is a well known photo sharing site that is indexed and works great for sharing things like [Mix06](http://www.flickr.com/photos/tags/mix06/) photos.

I also just found a great application for directly uploading Photos from my photo storage application directly to Flickr.  That's kind of hot, it provides me with a quick easy way to directly export my photos from the application directly online.  If I want to upload my stuff to nGallery, I need to export the photos, then use an FTP client to FTP upload them, import them into nGallery, put them in a gallery, edit them and such.  And there are no support for tags or anything like that.  Plus, now it's on it's own site, and not going to get picked up by something like the tagging stuff in Flickr.

There are plenty of reasons that I've been considering the move from nGallery to Flickr.  To give you an idea,with all the photos I have online, I almost have to have my own server, I can't get a hosting package.  I've got 3+ gigs of photos online right now.  My favourite hosting group has said I can get 1 or 2 gigs, but 3+ is not going to happen.  I really like them for two reasons, they're free, and they're free ;)  The idea of having a hosted service is great to me.  I have my own box running, and I don't like patching it, and keeping it up to date on a regular basis.  I've moved my personal mail from my personal exchange mail server to running on a hosted web account, so if I keep moving this way, I may be able to get rid of my home "server" but at what cost?

nGallery has since been sucked into CommunityServer, which is way too big and bulky for what I want.  I just want a simple, easy to use, light weight image gallery application, and CS no longer fits this unfortunatly, so I'm not up for using it.  Rob and crew have done a great job on it, but they've also made it much more powerful and much more of a corporate application that I really want.

I have done some of my own work on nGallery, and the one that is running on my website is not the out of the box nGallery.  I've added several features, such as RSS feeds, referral tracking and a few other things.  But in the same stroke, I also broke a few other features that I want to be able to use that I can't use right now :(  So those need to get fixed.

I started work on moving nGallery to ASP.NET 2.0 and got a good ways into the project, but it didn't get finished, and unfortunatly, I can't release the sources and let someone else continue the project.  But, I have heard rumblings from some of you out there want to do that.  Since nGallery has stopped development, it may be something that someone could take the project and put it up on [CodePlex](http://codeplex.com/) and then those who are interested can work on it.

So, what do you do?  Do you host your own, or let someone else do it?

![](http://blogs.msdn.com/aggbug.aspx?PostID=612306)