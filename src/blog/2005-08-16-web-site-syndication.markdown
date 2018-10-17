---
layout: post
title: Web Site Syndication
date: '2005-08-16 12:52:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

One of the things thats been on my mind for a while has been to update my web site, and make it a central point of syndication. I've got several different websites that I am contantly updating but they're all running different application, and all with different purposes, but there is no central location where you can get information.&nbsp; And for the last few days, I've been slowly working on a central syndication site.&nbsp; [http://www.NoCommonGround.com](http://www.nocommonground.com/)&nbsp;is the first of several steps that I want to take.

It currently has 3 working syndications, (1) from my snap shot photo web site, (2) my LiveJournal blog, which I mostly use to talk to friends, and see what they're all up to, and lastly (3) the syndication of the MSDN feed that I write in.&nbsp; I've got one more that I will definately be syndicating on to there soon, and thats the fine art photography that I do.&nbsp; 

I had a few problems getting the syndication to work properly.&nbsp; It seems that my ISP has a proxy server set up for outgoing connections, and when I was trying to read the schemas for some places, it was trying to import a schema from another site and was dying.&nbsp; After some little work, I managed to figure out how to get the schema to sit on my computer, and then use a System.Net.WebRequest to do the request to get the RSS feed, and told it to ignore the schema in the file.

> lblBlogTitle.Text = BlogTitle;
> DataSet dsBlog = null;
> dsBlog = (DataSet)Cache.Get(BlogRSSFeed);
> if (dsBlog == null)
> {
> &nbsp;&nbsp;System.Net.WebProxy myProxy = new System.Net.WebProxy("http://Proxy:8080/", true);
> &nbsp;&nbsp;dsBlog = new DataSet();
> &nbsp;&nbsp;System.Net.WebRequest wr = System.Net.WebRequest.Create(BlogRSSFeed);
> &nbsp;&nbsp;wr.Proxy = myProxy;
> &nbsp;&nbsp;System.Net.WebResponse wresp = wr.GetResponse();
> &nbsp;&nbsp;dsBlog.ReadXmlSchema(Server.MapPath("~") + "\\App_Data\\rss_schema.xsd");
> &nbsp;&nbsp;dsBlog.ReadXml(wresp.GetResponseStream(), XmlReadMode.IgnoreSchema);
> &nbsp;&nbsp;Cache.Add(BlogRSSFeed, dsBlog, null, DateTime.Now.AddHours(1), System.Web.Caching.Cache.NoSlidingExpiration, CacheItemPriority.Normal, null);
> }

You can see how I overrode the web request and used a proxy.&nbsp; If&nbsp;I hadn't needed to use the proxy, you can simply use dsBlog.ReadXml([http://feed](http://feed)) which is pretty sweet!&nbsp; I also added the one hour cache in there to reduce the bandwidth on the servers, so everything sits in cache for up to one hour.&nbsp; 

I've still got lots to do on this, but its a start!&nbsp; 

What features would you want to see if this were your site?