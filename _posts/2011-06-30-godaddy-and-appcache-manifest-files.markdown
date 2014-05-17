---
layout: post
status: publish
published: true
title: GoDaddy and AppCache Manifest Files
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2609
wordpress_url: http://petelepage.com/blog/?p=2609
date: '2011-06-30 13:31:36 -0400'
date_gmt: '2011-06-30 20:31:36 -0400'
categories: blog
tags:
- HTML5
- TipsAndTricks
- Developer Tools
- AppCache
- MimeType
- manifest
- IIS
- GoDaddy
comments:
- id: 4808
  author: Peter
  author_email: peter.persson@hotmail.se
  author_url: http://www.perssonponerar.se
  date: '2012-01-12 05:15:51 -0500'
  date_gmt: '2012-01-12 13:15:51 -0500'
  content: "Hey, I found an even slicker way, this is more RERSTful in my opinion,
    and you don't have to mess about with your web.config file at all...\r\n(with
    the new razor engine its even more straight forward than this example)\r\nhttp://deanhume.com/Home/BlogPost/mvc-and-the-html5-application-cache/59"
- id: 5102
  author: Smithc996
  author_email: smithc336@gmail.com
  author_url: http://gdggffeakkfgdfdc.blogspot.com/
  date: '2014-04-20 05:19:04 -0400'
  date_gmt: '2014-04-20 09:19:04 -0400'
  content: There is visibly a bundle to realize about this. I assume you made certain
    nice points in features also. gdggffeakkfgdfdc
---
In trying to add HTML5 Application Cache support to one of my web apps today, I hit a few little snags with my hoster (GoDaddy with a Shared Deluxe Windows account) and wanted to share as I'm sure other people will run into the same thing.

Each time I uploaded my `web.config` file, I kept getting 500 server errors that weren't very helpful.  As it turns out, the extension `.manifest` is already taken by the mime-type `application/x-ms-manifest`, and when I tried to override that, IIS got kind of angry, and served the 500 Server error.  I wasn't quite sure what was happening, but was able to figure it out by reverting to my original `web.config` file, and requesting the `appcache.manifest` file that I had already uploaded.  Sure enough, using the network tab in the Chrome DevTools, I saw it was being served back with the wrong mime type.

To resolve the issue, I added a new static file handler for `.appcache` files in the system.web -&gt; httpHandlers section.  If you don't do this, IIS doesn't know about the file type and it won't serve unknown file types at all.  Then in system.webServer -&gt; staticContent, I added a mimeMap extension for `.appcache` files with the mimetype of `text/cache-manifest`.  After uploading the `web.config` file again, I retried my request, and sure enough, everything worked perfectly!

My final web.config now looks like...

{% highlight xml %}
<configuration>
  <system.web>
    ...
    <httpHandlers>
      ...
      <add verb="GET,HEAD" path="*.appcache"
        type="System.Web.StaticFileHandler" />
    </httpHandlers>
  </system.web>
  ...
  <system.webServer>
  ...
    <staticContent>
    <mimeMap fileExtension=".appcache"
      mimeType="text/cache-manifest" />
    ...
    </staticContent>
    ...
  </system.webServer>
  ...
</config>
{% endhighlight %}

Check out this [tutorial on Application Cache at HTML5Rocks.com](http://www.html5rocks.com/en/tutorials/appcache/beginner/).  Also, you can find a full list of the default mime types provided by GoDaddy's IIS servers [here](http://help.godaddy.com/article/3821).

**[Update 6/30/11 @ 1:53pm]** [@Paul_Irish](http://twitter.com/paul_irish) pointed out that the recommended extension is `.appcache` specifically to avoid the unregistered Microsoft extension, and referred to a [bug](http://html5.org/tools/web-apps-tracker?from=5811&to=5812) on [HTML5.org](http://html5.org). So there you have it! :)
