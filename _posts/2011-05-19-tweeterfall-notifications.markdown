---
layout: post
status: publish
published: true
title: TweeterFall - Notifications
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2550
wordpress_url: http://petelepage.com/blog/?p=2550
date: '2011-05-19 23:38:36 -0400'
date_gmt: '2011-05-20 06:38:36 -0400'
categories:
- Web Design &amp; Development
- HTML5
tags:
- CodeSample
- HTML5
- HowTo
- webkitNotifications
- HTML Notifications
- WebNotifications
- Notifications API
- Notifications
comments: []
---
<p><img class="alignleft size-full wp-image-2551" title="notification" src="http://petelepage.com/blog/wp-content/uploads/2011/05/notification.png" alt="" width="315" height="104" />In <a href="http://bit.ly/TweeterFall">TweeterFall</a>, when a new tweet is received, we notify the user about that tweet via desktop notifications.  If you use Chrome and Gmail, you've probably seen notifications pop up when you receive a new mail, or about an upcoming appointment.  The Desktop Notifications API allows script to request a small toast to appear on the desktop of the user.  The contents of the toast can either be specified as iconUrl/title/text strings, or as a URL to a remote resource which contains the contents of the toast.  They're part of the <a href="http://dev.w3.org/2006/webapi/WebNotifications/publish/">WebAPI spec</a>, though still in early draft, and so far only implemented in Chrome.</p>
<p>Since notifications are still something that may change, in Chrome, they're under the <code>webkit</code> vendor prefix.  The Chromium implementation details can be found on the <a href="http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification">Chromium</a> site.</p>
<p>There are two types of notifications that you can surface, what I'll call simple notifications like the one on the left that contains an image, a headline and some text; and HTML notifications.  HTML notifications are much more powerful because instead of sending the image, headline and text, you send it a URL, and it will display the contents of that URL. That means you can style your notification to match your applications UI and even provide interactivity through links, javascript, etc.</p>
<p>Let's have a look at how we implemented new tweet notifications in TweeterFall.</p>
<h3>Requesting Permission</h3>
<p>When the user turns on notifications in TweeterFall, we need to check to see if we have permission to show notifications and if we don't we need to ask for it.  Desktop Notifications pop open a new window and could quickly become an easy spam target if we didn't provide some kind of permission system.  When a user grants or denies permission, they do so for the domain.</p>
<p>[javascript]<br />
function requestPermissionIfRequired() {<br />
  if (!hasNotificationPermission() &amp;&amp; (window.webkitNotifications)) {<br />
    window.webkitNotifications.requestPermission();<br />
  }<br />
}[/javascript]</p>
<p>In <code>requestPermissionIfRequired()</code>, we check to see if the browser supports notifications, and if we already have permission.  If we don't have permission, but notifications are supported, Chrome prompts the user asking for permission to provide notifications.<br />
<img class="size-full wp-image-2552" title="The notifications permission infobar in Google Chrome" src="http://petelepage.com/blog/wp-content/uploads/2011/05/The-notifications-permission-infobar-in-Google-Chrome.png" alt="" width="457" height="63" /></p>
<h3>Checking For Permission</h3>
<p>I also use feature detection here to check to see if notifications are supported in the browser.  We will only return true if notifications are supported and the user has already given permission to show notifications.<br />
[javascript]<br />
function hasNotificationPermission() {<br />
  return !!(window.webkitNotifications)<br />
    &amp;&amp; (window.webkitNotifications.checkPermission() == 0);<br />
}<br />
[/javascript]</p>
<h3>Show the Notification</h3>
<p>We're finally ready to show our notification to the user.<br />
[javascript]<br />
function showNotification(pic, title, text) {<br />
  if (hasNotificationPermission()) {<br />
    var notificationWindow =<br />
      window.webkitNotifications.createNotification(pic, title, text);<br />
    notificationWindow.show();<br />
    setTimeout(function(notWin) {<br />
      notWin.cancel();<br />
    }, 10000, notificationWindow);<br />
  } else {<br />
    console.log(&quot;showNotification: No Permission&quot;);<br />
  }<br />
}<br />
[/javascript]<br />
The method takes three parameters, the image to use, the title and the text do display.  When the function is called, it checks to see if it has permission using our previously established permission check that also encompasses feature detection, so we know we'll be safe calling this even if the browser doesn't support notifications.  We then create the notification with <code>window.webkitNotifications.createNotification(pic, title, text)</code> and show it with <code>.show()</code>.</p>
<p>Immediately below that, we have a <code>setTimeout</code> call with an anonymous function that takes one parameter (the window handle to the notification) and will  hide the notification after the timeout period has expired.  If we didn't do this, the notification would remain on screen until the user clicked the close button, or closed the browser.  I've hard coded the timeout to be 10000ms, and you can change this to suit your needs.</p>
<h3>Summary</h3>
<p>As you can see, showing notifications is pretty easy, check &amp; ask for permission, and then show the notification.  You can use these to let the user know when a task is complete, when there's new information that they might be interested in and so forth.  Obviously these only work when a user is on your site, but you can overcome that limitation by publishing your app in the Chrome Web Store and using background pages.</p>
<h3>Other Resources</h3>
<p>Be sure to check out the <a href="http://www.html5rocks.com/tutorials/notifications/quick/">notification tutorial</a> on <a href="http://html5rocks.com">HTML5Rocks</a>, it covers some additional things like the events that notifications fire and using HTML notifications.</p>
