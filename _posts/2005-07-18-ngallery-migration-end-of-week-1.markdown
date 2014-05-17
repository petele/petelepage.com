---
layout: post
status: publish
published: true
title: 'nGallery Migration : end of week 1'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1894
wordpress_url: http://petelepage.com/blog/2005/07/ngallery-migration-end-of-week-1/
date: '2005-07-18 09:16:00 -0400'
date_gmt: '2005-07-18 16:16:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>So I've missed a few updates on my progress on the nGallery migration I've undertaken.&nbsp; I've found a few bugs in VS, and a few other little issues that I've been working through.&nbsp; Overall, the progress is moving slower than I had hoped, but I had VERY high expectations.&nbsp; </p>
<p>The most expensive use of my time so far has been migrating away from the "templates" to use master pages, some standard user controls, and themes.&nbsp; I've got the default.aspx page modified, and parts of the viewalbum done, but&nbsp;I haven't started on the viewpicture yet.&nbsp; Thats probably later this week&nbsp;&nbsp;One of the biggest and most pain in the butt things, was the fact that to generate the main table of pictures, nGallery in code, just generated a table.&nbsp; I didn't want to use that method, and want to take advantage of as many of the web controls as as I can.&nbsp; Thus, getting the DataList to show the info properly was a bit of a pain, seeing that I forgot that data binding in a template requires "&lt;%#" and not just "&lt;%".</p>
<p>This morning I made some great progress on the RSS feeds, and the SiteMap.&nbsp; That took about 1/2 the day, but the results are super cool.&nbsp; Instead of the old view (<strong>Gallery:</strong> <a href="http://www.bigbackpack.ca/ngallery/default.aspx">Pete's Photo Gallery</a>&nbsp;&nbsp;&nbsp;<b>Parent Album:</b> <a href="http://www.bigbackpack.ca/ngallery/albums/Atlantis+Cruise.aspx">Atlantis Cruise</a>&nbsp;&nbsp;&nbsp;<b>Album:</b> Atlantis (2005)) I've not got it set up so that it shows the bread crumb style site navigation that is dynamically generated from the album and photo hierarchy.&nbsp; </p>
<p>I'm currently re-imaging my machine so I can move to a newer build and install source control so I can check this into source safe.</p>
