---
layout: post
title: 'nGallery migration : Day 0'
date: '2005-07-11 08:03:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

&nbsp;&nbsp;&nbsp;I started the work to migrate nGallery to ASP.NET 2.0 today, and hit several small road blocks.&nbsp; Nothing I couldn't handle though.&nbsp; The business layer/back end migrated with zero problems.&nbsp; The web front end though, it was a bit more of an issue.&nbsp; For some reason it moved all the code behinds in the admin directory to the app_code directory.&nbsp; I've filed a bug on that one.&nbsp; 

It also made some funky changes to the nGallery_Page class.&nbsp; In nGallery, all pages inherited from the nGalleryPage.aspx page, which then inherited from the page class.&nbsp; Well, after the migration, it created a stub class in App_Code which inherited from the page class, then the nGalleryPage.aspx inherited from that and each individual page inherited from the nGalleryPage.aspx class.&nbsp; A bit of a long run around.&nbsp; In any event, I moved the code from the aspx.cs file to the App_Code class, and got rid of the nGalleryPage.* and everything seems okay there.

Once I got the page to compile and run, I was not getting any graphics to come up.&nbsp; When I clicked on a gallery, I got an ASP.NET error stating that the &lt;httpHandler&gt;'s section couldn't be specifed there.&nbsp; So I had to move everything up to the web.config in the main application.&nbsp; So, now my web.config looks something like:

`&nbsp;&nbsp;&lt;httpHandlers&gt;
&nbsp;&nbsp;&nbsp;&lt;add verb="*" path="albums/*.aspx" validate="false" type="nGallery.Lib.AlbumRequestHandler, nGalleryLib"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;add verb="*" path="albums/*/*.aspx" validate="false" type="nGallery.Lib.AlbumRequestHandler, nGalleryLib"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;add verb="*" path="albums/*/*/*.aspx" validate="false" type="nGallery.Lib.AlbumRequestHandler, nGalleryLib"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;add verb="*" path="photos/*.aspx" validate="false" type="nGallery.Lib.PhotosRequestHandler, nGalleryLib" /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;add verb="*" path="photos/*/*.aspx" validate="false" type="nGallery.Lib.PhotosRequestHandler, nGalleryLib" /&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;add verb="*" path="photos/*/*/*.aspx" validate="false" type="nGallery.Lib.PhotosRequestHandler, nGalleryLib" /&gt;
&nbsp;&nbsp;&lt;/httpHandlers&gt;`

Notice how the lines have the *, */* and */*/*, thats the only way I could get everything to work

My final problem for the day, is more of legal issue.&nbsp; I really want to do daily drops of everythign that I change, but legal wants to look into it first, so I can't post anything up yet, which is a pain, but rest assured, I'm working on getting it so that we can get stuff out for you guys!