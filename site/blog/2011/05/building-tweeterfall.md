---
layout: post
title: Building TweeterFall
date: 2011-05-19
category: web development
tags:
- Conferences
- Web Design
- HTML5
- HTML5 For Web Designers
---
[![](/assets/TweeterFall-300x181.png "TweeterFall")](/assets/TweeterFall.png)

I want to devote some time to how [Ernest](http://twitter.com/edr) and I built [TweeterFall](http://bit.ly/TweeterFall), the demo that we used for our [I/O Boot Camp](http://www.io-bootcamp.com/) presentation last week.  Instead of showing isolated demos of some of the new HTML5 features, we wanted to show how you might use some of these things in real world scenarios, and thus we built TweeterFall.  TweeterFall is a Twitter visualizer that grabs the tweets from a list and shows them in a kind of waterfall like visualization.

What did we use to build TweeterFall?

## HTML5 Semantics

We used the new HTML5 semantic elements as our primary markup elements.  The bar across the top is a `<header>`, the area on the left where the tweets fall is a `<section>`, the list of Tweets on the right and the configuration panel are both `<aside>`s, and the individual tweets are `<article>`s.

## GeoLocation

Since we figured that most people would be in SF, it'd be fun to use some kind of geo location to show how close the person was to your current position when they made their Tweet.  To do that, we pull the users current location using navigator.geolocation.watchPosition and compare that to the geo data in the tweet.  We used the [GeoLocation tutorial](http://www.html5rocks.com/tutorials/geolocation/trip_meter/) from [HTML5Rocks.com](http://html5rocks.com) as our inspiration for this.

## IndexedDB

Twitter only allows you to pull about 20 tweets at a time, so if you want to see anything before that, you either need to log in (and we didn't really want to deal with OAuth for this presentation) or store the previous tweets locally.  IndexedDB was the perfect solution for this, as it allows you to store significant quantities of structured data.  Figuring out IndexedDB was probably my biggest challenge for this project, mostly because it's pretty new and there isn't a lot of documentation on it yet.  That and the fact that everything you do is asynchronous, so you need lots of fun callbacks!  Look for a whole post on this one shortly.

## LocalStorage

IndexedDB works great for structured data, but we also wanted a place to store simple configuration data, so we used web storage for that.  I wanted to have my configuration data in an object so I could easily access things, so I used JSON to parse and stringify my config object as it went into and came out of local storage.

## Notifications

We used simple notifications to alert users when there were new tweets, and also included a special handler so that they would disappear after a couple of seconds and not remain on screen for too long.  One of the updates I want to make here is to use HTML notifications, so that we can make things look a little more like the rest of the UI.

## Speech Input

Okay, so this one was a bit gratuitous. :)  If you add x-webkit-speech to text inputs, Chrome will add a microphone icon to the text box.  When the user clicks on the icon, Chrome turns on the microphone, listens for input and then converts what you said into text!  No JavaScript, just all magic!

## Web Workers

Web Workers are great for handing off complex or intensive processes off to another thread so they don't block the rest of the browser. In our case, we wanted to isolate the requests we were making to Twitter into their own place and allow them to "push" notifications to us.  One thing to remember with Web Workers, is that they run off in their own separate thread, and don't have access to the DOM or most other window objects (which means jQuery won't work either).

## Canvas

This was a bit gratuitous too, we've got a fun update in mind for this that is equally gratuitous, but much prettier.

## 2D Transforms

When you mouse over the list of Tweets on the right, they get bigger to make them easier to read.  To do this, we use the :hover pseudo selector and apply a scale transform to make it bigger, and then a translation to ensure it appears in the right place.  If we didn't do the translation, part of the tweet would get cut off on the right side.

## CSS Animations

When I first created the TweeterFall visualization, I was using CSS transitions and transforms to animate the tweet as it fell down, but then realized that the better way to do it would be CSS Animations and transforms.

## Web Fonts

We used Web Fonts to spice up the look of the page somewhat, there are lots of great fonts available.  Typically I'll either grab fonts from [Font Squirrel](http://www.fontsquirrel.com/) or [Google's Web Fonts](http://www.google.com/webfonts).  As Ernest presented the section on web fonts, he said something to the effect of developers have had only 8 fonts they can count on across multiple platforms/browsers, and because Comic Sans doesn't really count, they only really had 7.

## Chrome Developer Tools

So we didn't really use this in the app, but let me say this, the JavaScript console was the biggest life saver as we were debugging and trying to understand everything that was going on.  Not only did we use a few console.log's, we also were able to execute code and do all kinds of other great things.  In fact, Paul Irish blogged about the I/O session he did with Pavel Feldman, and linked to the video - definitely worth checking out!

Up next, a dive into each of these!
