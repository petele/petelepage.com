---
layout: post
title: Building A More App-y Web
date: 2011-11-17
category: web development
tags:
- HTML5
- Web App
- WebApps
---

Everyone wants "apps" these days, on their phone, their tablets, Apple, has the App Store to sell apps for the Mac.  The demand is coming from all over the place, including consumers who have no idea what apps are, to people who are seeing this as a new revenue opportunity (which, it is)!  I even heard from one developer who said that his boss came to him all panicked because he got a call from the company's chairman of the board, wanting to know what their app strategy was.  So far, most of the focus has been on apps for mobile devices, tablets, but thankfully it's really starting to take off on the web, and we're seeing more web apps appearing.

One piece of the puzzle that hasn't really solidified yet is what defines a web app, and how does it differ from a web site?  Are _app like experiences_ on the web part of a website, or are they web apps?  What about web sites that provide the same functionality as an app, but looks like a web site?

## Is it a web site, or a web app?

[![](/assets/tripit_web-300x219.png "tripit_web")](/assets/tripit_web.png)

TripIt is a great example, it's concept is absolutely an app, it helps me to coordinate my travel plans into a single place where I can easily organize my trips into a single online experience.  Here's where it gets confusing, compare their web application to their tablet application.  I can do exactly the same sets of things, but one looks like an application, and one looks like a website.  They both let me do the same tasks, but they provide very different experiences to complete those tasks. So what is the TripIt web app, is it a site or an app?

[![](/assets/tripit_ipad2-300x225.png "tripit_ipad2")](/assets/tripit_ipad2.png)

<div class="well">Before I go too far though, I want to profess my love for TripIt, I use it for all my travel and have been a Pro user for over a year now, and will renew next time it's up for renewal.  I love that it tells me where I can find my luggage, how to get to my next gate, and often, it knows my flight is going to be late before the airline tells me!  I love that I can carry it on my phone and quickly look up my flight confirmation code, or when I'm in a foreign country, pull up my hotel information hand my phone to the taxi driver and point to where I want to go.</div>

## How do we define a web app then?

Many people have suggested different ways to define web apps in a single test or definition.  I enjoy reading [AppStorm](http://web.appstorm.net), I think they do a great job of highlighting awesome web apps, but a while ago, they tried to define web apps, and provided one of my favorite [non-answers](http://web.appstorm.net/general/opinion/what-is-a-web-app-heres-our-definition/):

> A web application is an application utilizing web and [web] browser technologies to accomplish one or more tasks over a network, typically through a [web] browser.

That answer is almost as good as saying "because it's not orange" to the question why is the sky blue.

## It can't be a single criteria

Single criteria definitions don't work for me either.  Can we say something is an app because of a single property?  For example, creation vs. consumption, or architecture.  Add the diversity of web apps to the mix, and I think we hit a wall when it comes to defining web apps with a single criterion.

## A web app checklist

The diversity of apps makes it impossible to have a single go/no-go checklist that we can use to define apps.  A criterion for one app may be completely inappropriate for another app.  Instead, I think we need to judge apps based on reaching a particular bar of 'app-y-ness'.

* Does the app have a tight focus around a single point or purpose?
* Is the app self-contained, keeping me within the app to complete my task?
* Does the app encourage interaction, engagement and completion of tasks?
* Does the app look beaultiful and have a rich user experience?
* Does the app have an action oriented interface that uses similar paradigms to native applications, for example dialogs, buttons instead of links and new pages?
* Is there at least a functional offline experience?
* Does the app take advantage of the capabilities of the device, like geolocation or device motion?
* Are traditional websites elements and links are hidden from view?
* Is the app architected to uses a primarily client side architecture model?

Now, let's look at TripIt's web "app" vs. their tablet app:

<table class="table">
<colgroup>
<col />
<col />
<col /></colgroup>
<tbody>
<tr>
<td></td>
<td>Web "app"</td>
<td>Tablet app</td>
</tr>
<tr>
<td>Tight focus</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Self-contained</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Encourage interaction, engagement &amp; task completion</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Beautiful &amp; rich user experience</td>
<td>Maybe</td>
<td>Yes</td>
</tr>
<tr>
<td>Action oriented with native design paradigms</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Offline</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Native capabilities</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>Traditional website elements hidden?</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Client side architecture</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>

By this criteria, even though their web site is super functional, I can get the things done that I want and has some of the qualities of an app, it clearly could be more app-y.  Could TripIt build the same experience as a web app?  Absolutely!  Heck, it might even be less work because then they could reuse a lot of their design and UI components across the web and tablet versions.

## But who really cares?

I do!  With more and more people demanding apps, I think we're missing a huge opportunity to provide our users with web applications that are better, faster, and more fun to use than their mobile or native counterparts.  People will pay for mobile and native applications, but we have given them very few web apps that are worth their money.  **We need to step up and change that, let's build a more app-y web.**
