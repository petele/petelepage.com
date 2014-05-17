---
layout: post
status: publish
published: true
title: Introducing Video Player Sample
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2786
wordpress_url: http://petelepage.com/blog/?p=2786
date: '2012-01-06 17:06:04 -0500'
date_gmt: '2012-01-07 01:06:04 -0500'
categories:
- Web Design &amp; Development
- HTML5
- Chrome Web Store
- WebApps
tags:
- CodeSample
- Chrome Web Store
- OpenSource
- WebApp
- Video Player
comments: []
---
<p><a href="http://petelepage.com/blog/wp-content/uploads/2012/01/player-full.png"><img class="alignleft size-medium wp-image-2778" title="player-full" src="http://petelepage.com/blog/wp-content/uploads/2012/01/player-full-300x225.png" alt="" width="300" height="225" /></a>Have you ever wanted a fun and beautiful way to publish videos on your own site like the new <a href="https://chrome.google.com/webstore/detail/imjhdahelgojehmfmkmdfjcpfbglbfmj" target="blank">60 Minutes</a> or <a href="https://chrome.google.com/webstore/category/home" target="blank"> RedBull.tv</a> apps from the <a href="https://chrome.google.com/webstore/category/home" target="blank">Chrome Web Store</a>? I'm excited to announce the release of <a href="http://code.google.com/p/video-player-sample/" target="blank">The Video Player Sample</a>! The Video Player Sample is an open source video player web app built using the same architecture as the 60 Minutes and RedBull.tv apps. It can be customized, extended, or just used out of the box and populated with your own content.</p>
<h3>How it works</h3>
<p>When a user opens the Video Player Sample web app, they can choose to watch a single video or create a playlist of videos/episodes from a list that they have uploaded and populated to the app. <a href="http://video-player-sample.appspot.com/" target="blank">The Video Player Sample</a> is configured and information about the videos is stored in JSON files (config.json and data.json respectively), both of which are located in the data directory.</p>
<h3><a href="http://petelepage.com/blog/wp-content/uploads/2012/01/player-shows.png"><img class="alignright size-medium wp-image-2779" title="player-shows" src="http://petelepage.com/blog/wp-content/uploads/2012/01/player-shows-300x225.png" alt="" width="300" height="225" /></a>Key features</h3>
<ul>
<li>A beautiful video watching experience, including a full screen view</li>
<li>Ability to subscribe to shows, watch episodes, create play lists</li>
<li>Support for multiple video formats depending on what the user’s browser supports (including WebM, Ogg, MP4, and even a Flash fallback)</li>
<li>A <a href="http://video-player-sample.appspot.com/#/shows" target="blank">Categories</a> page with an overview of the different shows/categories available in the app</li>
<li>Notifications of new episodes (when the app is installed via the Chrome Web Store)</li>
<li>Built in support for sharing to Google+, Twitter and Facebook</li>
<li>To ensure easy customization, all source files, including the Photoshop PSD’s, are included</li>
</ul>
<h3>How it's built</h3>
<p>The Google Video Application is written for the open web platform using HTML and JavaScript, broadly following the MVC (<a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="blank">Model View Controller</a>) pattern and structure.</p>
<ul>
<li>It is built using the open source Google <a href="http://code.google.com/closure/" target="blank">Closure JavaScript library</a></li>
<li>Compiled with the <a href="http://code.google.com/closure/compiler/" target="blank">Closure Compiler</a></li>
<li>Distributed through the Chrome Web Store to take advantage of notifications</li>
</ul>
<h3>Browser Support</h3>
<p>In addition to working as an app that can be installed through the Chrome Web Store, the Video Player Web App has been tested and works in all of the modern browsers.</p>
<h3>Try it out</h3>
<p>You can see a demo of the video player in action in the <a href="http://video-player-sample.appspot.com/" target="blank">demo app</a>, or by <a href="https://chrome.google.com/webstore/detail/jhojbofcldbpmilfcnlihpknapnaagce" target="blank">Adding it to Chrome</a> through the Chrome Web Store. To learn more about how the app works, check out the <a href="http://docs.video-player-sample.appspot.com/" target="blank">documentation</a>.</p>
<p>You can grab the code from <a href="http://code.google.com/p/video-player-sample/" target="blank">Google Code</a>.</p>
<p>Enjoy!</p>
<p><em>Cross Posted at: <a href="http://google-opensource.blogspot.com/2012/01/introducing-video-player-sample.html" target="_blank">http://google-opensource.blogspot.com/2012/01/introducing-video-player-sample.html</a></em></p>
