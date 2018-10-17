---
layout: post
title: TweeterFall - Notifications
date: '2011-05-19 23:38:36 -0400'
categories: blog
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
![](/assets/notification.png "notification")In [TweeterFall](http://bit.ly/TweeterFall), when a new tweet is received, we notify the user about that tweet via desktop notifications.  If you use Chrome and Gmail, you've probably seen notifications pop up when you receive a new mail, or about an upcoming appointment.  The Desktop Notifications API allows script to request a small toast to appear on the desktop of the user.  The contents of the toast can either be specified as iconUrl/title/text strings, or as a URL to a remote resource which contains the contents of the toast.  They're part of the [WebAPI spec](http://dev.w3.org/2006/webapi/WebNotifications/publish/), though still in early draft, and so far only implemented in Chrome.

Since notifications are still something that may change, in Chrome, they're under the `webkit` vendor prefix.  The Chromium implementation details can be found on the [Chromium](http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification) site.

There are two types of notifications that you can surface, what I'll call simple notifications like the one on the left that contains an image, a headline and some text; and HTML notifications.  HTML notifications are much more powerful because instead of sending the image, headline and text, you send it a URL, and it will display the contents of that URL. That means you can style your notification to match your applications UI and even provide interactivity through links, javascript, etc.

Let's have a look at how we implemented new tweet notifications in TweeterFall.

### Requesting Permission

When the user turns on notifications in TweeterFall, we need to check to see if we have permission to show notifications and if we don't we need to ask for it.  Desktop Notifications pop open a new window and could quickly become an easy spam target if we didn't provide some kind of permission system.  When a user grants or denies permission, they do so for the domain.

{% highlight javascript %}
function requestPermissionIfRequired() {
  if (!hasNotificationPermission() && (window.webkitNotifications)) {
    window.webkitNotifications.requestPermission();
  }
}
{% endhighlight %}

In `requestPermissionIfRequired()`, we check to see if the browser supports notifications, and if we already have permission.  If we don't have permission, but notifications are supported, Chrome prompts the user asking for permission to provide notifications.

![](/assets/The-notifications-permission-infobar-in-Google-Chrome.png "The notifications permission infobar in Google Chrome")

### Checking For Permission

I also use feature detection here to check to see if notifications are supported in the browser.  We will only return true if notifications are supported and the user has already given permission to show notifications.

{% highlight javascript %}
function hasNotificationPermission() {
  return !!(window.webkitNotifications)
    && (window.webkitNotifications.checkPermission() == 0);
}
{% endhighlight %}

### Show the Notification

We're finally ready to show our notification to the user.

{% highlight javascript %}
function showNotification(pic, title, text) {
  if (hasNotificationPermission()) {
    var notificationWindow =
      window.webkitNotifications.createNotification(pic, title, text);
    notificationWindow.show();
    setTimeout(function(notWin) {
      notWin.cancel();
    }, 10000, notificationWindow);
  } else {
    console.log("showNotification: No Permission");
  }
}
{% endhighlight %}

The method takes three parameters, the image to use, the title and the text do display.  When the function is called, it checks to see if it has permission using our previously established permission check that also encompasses feature detection, so we know we'll be safe calling this even if the browser doesn't support notifications.  We then create the notification with `window.webkitNotifications.createNotification(pic, title, text)` and show it with `.show()`.

Immediately below that, we have a `setTimeout` call with an anonymous function that takes one parameter (the window handle to the notification) and will  hide the notification after the timeout period has expired.  If we didn't do this, the notification would remain on screen until the user clicked the close button, or closed the browser.  I've hard coded the timeout to be 10000ms, and you can change this to suit your needs.

### Summary

As you can see, showing notifications is pretty easy, check &amp; ask for permission, and then show the notification.  You can use these to let the user know when a task is complete, when there's new information that they might be interested in and so forth.  Obviously these only work when a user is on your site, but you can overcome that limitation by publishing your app in the Chrome Web Store and using background pages.

### Other Resources

Be sure to check out the [notification tutorial](http://www.html5rocks.com/tutorials/notifications/quick/) on [HTML5Rocks](http://html5rocks.com), it covers some additional things like the events that notifications fire and using HTML notifications.