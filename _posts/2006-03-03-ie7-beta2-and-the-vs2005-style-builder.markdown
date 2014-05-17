---
layout: post
status: publish
published: true
title: IE7 Beta2 And The VS2005 Style Builder
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1835
wordpress_url: http://petelepage.com/blog/2006/03/ie7-beta2-and-the-vs2005-style-builder/
date: '2006-03-03 10:51:00 -0500'
date_gmt: '2006-03-03 17:51:00 -0500'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>I've had several people ask over the last few weeks about the style builder popping up and then disappearing when editing a StyleSheet.&nbsp; Cue weird bug music.&nbsp; I tried, and tried, couldn't get it to repro.&nbsp; After talking to a few people on the forums, we've worked it down to having IE7 Beta2 installed.&nbsp; Yes, IE7 Beta2 breaks the Style Builder in VS2005.</p>
<p>Our dev's have had a look at it, and it's a bug in IE7 returning an access denied where it used to return nothing, so the style builder just disappears.&nbsp; <strike>Unfortunately, there is no work around other than uninstalling IE7 Beta2, or not using the Style Builder.</strike></p>
<p>I've filed a bug on the MSDN feedback site that you can use to track the resolution and see where we are in fixing this, whether we fix it, or IE fixes it or what the deal is.</p>
<p><a href="http://lab.msdn.microsoft.com/productfeedback/viewfeedback.aspx?feedbackid=3a502f35-b788-4357-ad3d-953e84a297df">http://lab.msdn.microsoft.com/productfeedback/viewfeedback.aspx?feedbackid=3a502f35-b788-4357-ad3d-953e84a297df</a></p>
<p>There is a fix!&nbsp; For those of you who are willing to play with your registry, create a DWORD (name = "devenv.exe" value=0) in the following registry key:</p>
<p><font face="Courier New" size="2">HKLM\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_CSS_DATA_RESPECTS_XSS_ZONE_SETTING_KB912120</font></p>
