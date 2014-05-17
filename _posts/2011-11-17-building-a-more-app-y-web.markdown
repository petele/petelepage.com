---
layout: post
status: publish
published: true
title: Building A More App-y Web
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2753
wordpress_url: http://petelepage.com/blog/?p=2753
date: '2011-11-17 09:42:32 -0500'
date_gmt: '2011-11-17 17:42:32 -0500'
categories:
- Web Design &amp; Development
- HTML5
- Chrome Web Store
- WebApps
tags:
- HTML5
- Web App
- WebApps
comments: []
---
<p>Everyone wants “apps” these days, on their phone, their tablets, Apple, has the App Store to sell apps for the Mac.  The demand is coming from all over the place, including consumers who have no idea what apps are, to people who are seeing this as a new revenue opportunity (which, it is)!  I even heard from one developer who said that his boss came to him all panicked because he got a call from the company’s chairman of the board, wanting to know what their app strategy was.  So far, most of the focus has been on apps for mobile devices, tablets, but thankfully it's really starting to take off on the web, and we're seeing more web apps appearing.</p>
<p>One piece of the puzzle that hasn’t really solidified yet is what defines a web app, and how does it differ from a web site?  Are <em>app like experiences</em> on the web part of a website, or are they web apps?  What about web sites that provide the same functionality as an app, but looks like a web site?</p>
<h3>Is it a web site, or a web app?</h3>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2011/11/tripit_web.png"><img class="alignleft size-medium wp-image-2755" title="tripit_web" src="http://petelepage.com/blog/wp-content/uploads/2011/11/tripit_web-300x219.png" alt="" width="300" height="219" /></a>TripIt is a great example, it’s concept is absolutely an app, it helps me to coordinate my travel plans into a single place where I can easily organize my trips into a single online experience.  Here’s where it gets confusing, compare their web application to their tablet application.  I can do exactly the same sets of things, but one looks like an application, and one looks like a website.  They both let me do the same tasks, but they provide very different experiences to complete those tasks. So what is the TripIt web app, is it a site or an app?<br />
<a href="http://petelepage.com/blog/wp-content/uploads/2011/11/tripit_ipad2.png"><img class="alignleft size-medium wp-image-2754" title="tripit_ipad2" src="http://petelepage.com/blog/wp-content/uploads/2011/11/tripit_ipad2-300x225.png" alt="" width="300" height="225" style="clear:left;" /></a></p>
<div style="border: 1px solid #ddd; background-color: #eee; padding: 5px;margin:5px;">Before I go too far though, I want to profess my love for TripIt, I use it for all my travel and have been a Pro user for over a year now, and will renew next time it’s up for renewal.  I love that it tells me where I can find my luggage, how to get to my next gate, and often, it knows my flight is going to be late before the airline tells me!  I love that I can carry it on my phone and quickly look up my flight confirmation code, or when I’m in a foreign country, pull up my hotel information hand my phone to the taxi driver and point to where I want to go.</div>
<h3 style="clear:both;">How do we define a web app then?</h3>
<div>Many people have suggested different ways to define web apps in a single test or definition.  I enjoy reading <a href="http://web.appstorm.net" target="_blank">AppStorm</a>, I think they do a great job of highlighting awesome web apps, but a while ago, they tried to define web apps, and provided one of my favorite <a href="http://web.appstorm.net/general/opinion/what-is-a-web-app-heres-our-definition/" target="_blank">non-answers</a>:</div>
<blockquote><p>A web application is an application utilizing web and [web] browser technologies to accomplish one or more tasks over a network, typically through a [web] browser.</p></blockquote>
<p>That answer is almost as good as saying “because it’s not orange” to the question why is the sky blue.</p>
<h3>It can’t be a single criteria</h3>
<p>Single criteria definitions don’t work for me either.  Can we say something is an app because of a single property?  For example, creation vs. consumption, or architecture.  Add the diversity of web apps to the mix, and I think we hit a wall when it comes to defining web apps with a single criterion.</p>
<h3>A web app checklist</h3>
<p>The diversity of apps makes it impossible to have a single go/no-go checklist that we can use to define apps.  A criterion for one app may be completely inappropriate for another app.  Instead, I think we need to judge apps based on reaching a particular bar of ‘app-y-ness’.</p>
<ul>
<li>Does the app have a tight focus around a single point or purpose?</li>
<li>Is the app self-contained, keeping me within the app to complete my task?</li>
<li>Does the app encourage interaction, engagement and completion of tasks?</li>
<li>Does the app look beaultiful and have a rich user experience?</li>
<li>Does the app have an action oriented interface that uses similar paradigms to native applications, for example dialogs, buttons instead of links and new pages?</li>
<li>Is there at least a functional offline experience?</li>
<li>Does the app take advantage of the capabilities of the device, like geolocation or device motion?</li>
<li>Are traditional websites elements and links are hidden from view?</li>
<li>Is the app architected to uses a primarily client side architecture model?</li>
</ul>
<p>Now, let’s look at TripIt’s web “app” vs. their tablet app:</p>
<table>
<colgroup>
<col />
<col />
<col /></colgroup>
<tbody>
<tr>
<td></td>
<td>Web “app”</td>
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
<p>By this criteria, even though their web site is super functional, I can get the things done that I want and has some of the qualities of an app, it clearly could be more app-y.  Could TripIt build the same experience as a web app?  Absolutely!  Heck, it might even be less work because then they could reuse a lot of their design and UI components across the web and tablet versions.</p>
<h3>But who really cares?</h3>
<p>I do!  With more and more people demanding apps, I think we’re missing a huge opportunity to provide our users with web applications that are better, faster, and more fun to use than their mobile or native counterparts.  People will pay for mobile and native applications, but we have given them very few web apps that are worth their money.  <strong>We need to step up and change that, let’s build a more app-y web.</strong></p>
