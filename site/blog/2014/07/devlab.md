---
layout: post
title: Google I/O Device Lab
date: 2014-07-07
category: web development
tags:
- web
- multi-device
- mobile
- mobileweb
---

One of my highlights from Google I/O this year was the Device Lab that
[Matt Gaunt](https://plus.google.com/+MattGaunt/posts) and I built to show
developers how their site looks across the multi-device web.  It was a really
cool thing to see all kinds of different sites working on phones, phablets,
tablets, computers and even TVs.

<img src="/assets/io14-devlab.jpg" class="full-width">

A few folks have asked how we set things up, and how we did it, so I figured
I'd document our process here!

## Device selection

We ended up with 46 different devices on the wall, including:

* [Nexus 4](https://play.google.com/store/devices/details/Nexus_4_8GB?id=nexus_4_8gb&hl=en)
  (x2)
* [Nexus 5](https://play.google.com/store/devices/details?id=nexus_5_black_16gb)
  (x10)
* [Nexus 7 2013](https://play.google.com/store/devices/details?id=nexus_7_16gb_2013) (x4)
* [Nexus 10](https://play.google.com/store/devices/details?id=nexus_10_32gb)
  (x8)
* [Sony Z Ultra Google Play Edition](https://play.google.com/store/devices/details?id=sony_z_ultra) (x2)
* [HTC One (2013) Google Play Edition](https://play.google.com/store/devices/details?id=htc_one) (x2)
* [HTC One M8 Google Play Edition](https://play.google.com/store/devices/details?id=htc_m8) (x2)
* [LG G Pad 8.3 Google Play Edition](https://play.google.com/store/devices/details?id=lg_g_pad) (x2)
* [Samsung Galaxy S4 Google Play Edition](https://play.google.com/store/devices/details?id=samsung_galaxy_s4)
  (x2)
* [Samsung Galaxy S5](http://www.amazon.com/Samsung-SM-G900H-Factory-Unlocked-International/dp/B00J4TK4B8) (x2)
* [MotoX](http://www.motorola.com/us/FLEXR1-1/Moto-X/FLEXR1.html) (x2)
* [iPod Touch](http://www.apple.com/ipod-touch/) (x1)
* [iPad Air](http://www.apple.com/ipad-air/) (x1)
* [iPad Mini](http://www.apple.com/ipad-mini/) (x1)
* [ChromeBox](http://promos.asus.com/us/chrome-os/chromebox/) (x1)
* Android TV (x1)

We picked our devices mostly from [Google Play Edition devices](https://play.google.com/store/devices/collection/promotion_50000c5_partner_us), and picked a few
other fun and shiney net devices that would look cool on the wall.  If you're
considering building something like this for your company or team, look at your
analytics to understand what your users are using, and then regularly add new
devices as the usage changes.  In most cases we had at least two of every device,
so that we could have one in portrait and one in landscape.

## Network connection

When we ran the 46+ devices in the office prior to I/O, everything ran
beautifully, but we knew with all the attendees, each with at least one,
potentially two or three devices, the network would be a bit of a challenge.

We had hoped to use OTG Y-cables to both power and connect the devices to a
wired network, but the cables we got gave us a network connection, but no power
to the device, which means the screens wouldn't stay on.  So, at I/O, we
connected all of the devices via WiFi to a dedicated access point with it's own
SSID, that way we could ensure that the devices were connecting to that access
point, as opposed to one potentially several hundred feet away or even on
another floor.

We tweaked a few settings on the Android devices to optimize the network
connection.  For example we disabled _Avoid poor network connections_ and
disabled _Wi-Fi optimization_ to keep things working as well as possible.

## Power

We kept all of the devices powered via USB at all times so that we could keep
the screens on and also didn't have to worry about recharging things.  Rather
than using the individual wall warts, we picked up a bunch of [Anker 40W 5-Port
USB power supplies](http://www.amazon.com/gp/product/B00IBDOB5I).  At full
screen brightness, the N10s suck as much power from the USB port as they use,
[Pogo cables](http://www.amazon.com/MagNector-N10-Nexus-Pogo-Cable/dp/B00B2166BS)
provided more.

## Screens

To keep the screens on and to prevent dimming, we had to enabled _Stay awake_ in
the _Developer options_ panel, that ensured that was long as they were plugged
in, the screen would stay on.  We also installed [Keep Screen On
LITE](https://play.google.com/store/apps/details?id=it.android.keepscreenon),
which prevented the screens from dimming after a period of time.

## Attaching devices to the wall

This was the sort of easy part, we just used good ol' velcro!  To get the cool
looking pattern, we cut out stencils of each device using colored paper, then
taped them to the wall and kept rearranging them until we got the look we
wanted.  Once we knew where everything was going to go, then we started
sticking them up.

## Pushing URLs to the devices

The back end that sits on Compute Engine, and runs a little node app that pushes
URLs out to the devices using Google Cloud Messaging.  You can grab the source
for the [Mini Mobile Device Lab from
GitHub](https://github.com/GoogleChrome/MiniMobileDeviceLab) and give it a shot
yourself.  Big props to [Matt](https://plus.google.com/+MattGaunt/posts) for
doing most of the work here.  We have a few ideas on how we can make this easier
to set up, and potentially allow you to run it without any kind of back end
infrastructure.  More on that later ;)

### Android Devices

Each device has a simple Cordova app running on it that listens for a Google
Cloud Message, when it gets that message, it fires an intent to start the
browser and open the URL in the message.  This meant we can not only open
Chrome, but any browser that's installed on the device, Firefox, Opera, Android
browser, etc.

With 40+ Android devices connected, we found out that the Play store gets a
little cranky when there are too many devices connected to the same email
address, so we ended up have to create three of four different email accounts
that we used to sign into the devices and install the software.

### iOS and ChromeOS

Since the software we used depending on Google Cloud Messaging and an app that
fired Android Intents, we had to roll a different solution for non-Android
devices.  We wrote a simple AppEngine app that used the Channel API to push
messages out to the devices.  On the device, we opened a "background" page that
listened for a message/URL and then simply did a `window.open()`.

### Android TV

We built a custom one-off WebView app that had two WebViews running, one that
was always hidden, connected to the AppEngine app we used for iOS and ChromeOS,
and the one that showed the URL sent.
