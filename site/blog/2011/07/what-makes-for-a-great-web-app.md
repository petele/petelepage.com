---
layout: post
title: What Makes For A Great Web App?
date: 2011-07-06
category: web development
tags:
- CSS3
- HTML5
- WebApps
---

What makes a web application great?  I recently sat down with Christos, one of the guys on my team to look at a number of the top web applications in the Chrome Web Store to try to identify which ones were really great, versus good, and what advice we could give to the good apps to become "great".

Before we could start rating these apps, we built out a set of principles and criteria that we felt were important in providing a great application experience on the web.  We based our principles on some [earlier work](http://code.google.com/chrome/apps/articles/thinking_in_web_apps.html) done by [Mike](http://twitter.com/#!/Mahemoff) and [Paul](http://twitter.com/#!/Paul_Kinlan), and refined their thinking into three principles.  We tried to create a set of objective criteria for each of the principles that we could use to rate the apps - and while we didn't actually assign a score, we wanted to be as objective as possible.

## A Tight Focus

A web application has a tight focus encouraging people to interact, engage, and accomplish something, rather than passively view content. It doesn't distract people with content or components that are orthogonal to the task they're trying to complete.  People integrate it into their day to day lives because it feels like a natural extension of the things that they understand and do every day.

*   The application is limited to a single, core scenario
*   Orthogonal scenarios and tasks are removed from view and not presented to the user
*   The primary application components are accessible at all times
*   Standard web page content and navigation is minimized and the application controls are the primary focus
*   The application looks and behaves consistently across different screens, dialogs, controls and other components
*   The application starts immediately and requires no set up or configuration before it's first use
*   When starting the application, the user is taken directly to the application instead of a landing page or marketing page
*   The application can be used without registering or signing in, or the sign in/up process is extremely easy

## Rich Visual Experiences

A web application provides rich visual experiences that will delight the eye without distracting the mind.  A positive first impression makes users comfortable, assures them your application is reliable and professional and encourages people to make the product their own.  A great web application puts a premium on aesthetics without sacrificing usability.

*   Appropriate fonts and other typographic features are used to enhance readability
*   Graphics and illustrations are high quality and look professional
*   The application uses all of the screen real estate available to it
*   Textures, gradients, and shadows add to the visual appeal of the application
*   Controls and graphics convey meaning without requiring additional context
*   Controls and graphics offer a manner of realism
*   Standard web page content and navigation is minimized
*   Animations are used to introduce new content, dialogs, or other items that require attention or interaction from the user
*   Window resize events appropriately handle new screen sizes, resized graphics and images
*   Messages and information provided to the user is helpful, easy to understand and actionable

## Rich Interactive Experiences

A web application provides a rich, interactive experience that makes technology transparent so people can complete their task confidently without ever having to know or understand what makes the application work.

*   The application feels fast and responsive
*   The application provides appropriate notifications and information to keep the user informed
*   The application follows best practices for building fast web applications
*   The application provides a full featured offline experience
*   Input from the user is validated before being sent to the server and appropriate input types are used
*   Adding or removing data from the application is easy

## A couple of my favorite apps

### QuickNote

[![](/assets/QuickNote-300x233.png "QuickNote")](/assets/QuickNote.png)[QuickNote](https://chrome.google.com/webstore/detail/mijlebbfndhelmdpmllgcfadlkankhok) was on application that stood out in this category - not only does it focus on it's primary task (note taking), it didn't require any setup or logging in to get started.

### Flixster

[![](/assets/flixster-300x255.png "flixster")](/assets/flixster.png)I'm a web developer who knows enough about design to appreciate good design, but not enough to do it myself.  [Flixster](http://flixster.rottentomatoes.com/) was a good example of involving design early on in the process - the use of rich CSS3 features like gradients, shadows and such make the app visually appealing and fun to use.

### 280 Slides

[![](/assets/280Slides-300x227.png "280Slides")](/assets/280Slides.png)I love it when I see a web application and think - it must be Flash, only to find out that it isn't - seeing the creativity and ingenuity of other web developers is awesome.  [280 Slides](http://280slides.com/Editor/) is one of those web applications.  Like PowerPoint or Keynote, it's an app to build slide decks and presentations - but it's all built using the open web stack.  It was built using [Cappuccino](http://cappuccino.org/), a really powerful web framework for building apps, not web sites.  Def worth checking out.
