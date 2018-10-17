---
layout: post
title: To strong or to b
date: '2005-06-28 08:42:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

About a year ago, I filed a bug; when you highlighted text, and then clicked the BOLD tool bar button, it set the text to &lt;strong&gt; not bold.&nbsp; But the bold button is supposed to make things bold, not strong isn't it?

In most browsers, the rendering of &lt;b&gt; and &lt;strong&gt; are identical, so they're pretty interchangeable.&nbsp; But this doesn't work so well in cases where the user might be using a screen reader.&nbsp; Typically &lt;b&gt; is used as a visual presentation marker, where as &lt;strong&gt; implies that there is to be a stronger emphasis here.&nbsp; Some screen readers will change how they read things in &lt;strong&gt; tags, but not for &lt;b&gt; tags.

So which one is right?&nbsp; We decided on using &lt;strong&gt; as the correct markup to emphasize something.&nbsp; I know we'll hear from some people that this is the wrong thing to do.&nbsp; If you're trying to reduce your html code base, and send less data down the pipe, than this certainly isn't the way.&nbsp; But, it is the correct way to go about doing it if you want your web site to be fully accessible.&nbsp; You can always cut back a character here or there to make up for it ;)