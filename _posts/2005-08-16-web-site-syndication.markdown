---
layout: post
status: publish
published: true
title: Web Site Syndication
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1882
wordpress_url: http://petelepage.com/blog/2005/08/web-site-syndication/
date: '2005-08-16 12:52:00 -0400'
date_gmt: '2005-08-16 19:52:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>One of the things thats been on my mind for a while has been to update my web site, and make it a central point of syndication. I've got several different websites that I am contantly updating but they're all running different application, and all with different purposes, but there is no central location where you can get information.&nbsp; And for the last few days, I've been slowly working on a central syndication site.&nbsp; <a href="http://www.nocommonground.com/">http://www.NoCommonGround.com</a>&nbsp;is the first of several steps that I want to take.</p>
<p>It currently has 3 working syndications, (1) from my snap shot photo web site, (2) my LiveJournal blog, which I mostly use to talk to friends, and see what they're all up to, and lastly (3) the syndication of the MSDN feed that I write in.&nbsp; I've got one more that I will definately be syndicating on to there soon, and thats the fine art photography that I do.&nbsp; </p>
<p>I had a few problems getting the syndication to work properly.&nbsp; It seems that my ISP has a proxy server set up for outgoing connections, and when I was trying to read the schemas for some places, it was trying to import a schema from another site and was dying.&nbsp; After some little work, I managed to figure out how to get the schema to sit on my computer, and then use a System.Net.WebRequest to do the request to get the RSS feed, and told it to ignore the schema in the file.</p>
<blockquote><p>lblBlogTitle.Text = BlogTitle;<br />DataSet dsBlog = null;<br />dsBlog = (DataSet)Cache.Get(BlogRSSFeed);<br />if (dsBlog == null)<br />{<br />&nbsp;&nbsp;System.Net.WebProxy myProxy = new System.Net.WebProxy("http://Proxy:8080/", true);<br />&nbsp;&nbsp;dsBlog = new DataSet();<br />&nbsp;&nbsp;System.Net.WebRequest wr = System.Net.WebRequest.Create(BlogRSSFeed);<br />&nbsp;&nbsp;wr.Proxy = myProxy;<br />&nbsp;&nbsp;System.Net.WebResponse wresp = wr.GetResponse();<br />&nbsp;&nbsp;dsBlog.ReadXmlSchema(Server.MapPath("~") + "\\App_Data\\rss_schema.xsd");<br />&nbsp;&nbsp;dsBlog.ReadXml(wresp.GetResponseStream(), XmlReadMode.IgnoreSchema);<br />&nbsp;&nbsp;Cache.Add(BlogRSSFeed, dsBlog, null, DateTime.Now.AddHours(1), System.Web.Caching.Cache.NoSlidingExpiration, CacheItemPriority.Normal, null);<br />}</p>
</blockquote>
<p>You can see how I overrode the web request and used a proxy.&nbsp; If&nbsp;I hadn't needed to use the proxy, you can simply use dsBlog.ReadXml(<a href="http://feed">http://feed</a>) which is pretty sweet!&nbsp; I also added the one hour cache in there to reduce the bandwidth on the servers, so everything sits in cache for up to one hour.&nbsp; </p>
<p>I've still got lots to do on this, but its a start!&nbsp; </p>
<p>What features would you want to see if this were your site?</p>
