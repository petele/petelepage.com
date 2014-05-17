---
layout: post
status: publish
published: true
title: A web UI for my Pi
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2906
wordpress_url: https://petelepage.com/blog/?p=2906
date: '2013-08-14 10:15:15 -0400'
date_gmt: '2013-08-14 14:15:15 -0400'
categories:
- General
tags:
- mobile
- home automation
- hue
- raspberry pi
- hue api
- appengine
comments: []
---
My project this weekend on my [home automation system](https://github.com/petele/PiHomeControl) was two-fold, first I wanted to clean up the code and make it a bit more object oriented, but I also wanted to add a web interface that is accessible outside my apartment.  

[![Home Automation Web Interface](https://petelepage.com/blog/wp-content/uploads/2013/08/pi_framed-small2.png)](https://petelepage.com/blog/wp-content/uploads/2013/08/pi_framed-small2.png)The largest part of the weekend was spent re-architecting things.  Now, each component is effectively self-contained, so it will be easier to add or remove components later and making it easier for other people to use.  Once that was done, I dug into the web interface.  The Pi does a POST to an AppEngine app every 30 seconds (configurable) with the status of all of the devices lights, air conditioners, door, even the Harmony remote.  Since the data changes often, is less than about 10k and I don't need it stored for any considerable length, I decided to just store it in memcache to make retrieving it faster.

On the client side, I wanted to emulate the look of the [Targus Keypads](targus.com/us/productdetail.aspx?regionId=7&sku=AKP10US) that I've got throughout my place acting as light switches, which is why you see the layout as it is.  Across the top is the status of the different devices, for example the state is AWAY and the front door is closed.  Both the living room (LR) and bedroom (BR) air conditioners are off, the temperature inside and out is 81&deg; and the amp is off.

The buttons control things in the apartment, the red and blue buttons are modifier keys that affect the gray buttons.  For example, pushing Off then Kitchen turns the kitchen lights off.  The plus and minus keys only affect the air conditioners right now, though they used to also dim the lights.  The buttons show as depressed when that item or set of lights are turned on.

Right now I'm simply doing an XMLHTTPRequest on a setInterval to refresh the data, but I'm planning to modify it to use the Channels API in the near future which will help to eliminate some of the existing lag.  I'm also trying to decide if it's worth adding a live webcam view, not sure I'd really use it, so I'm thinking not, but who knows.

The next part of the project is to solder up the [Adafruit RGB Negative 16x2 Keypad Kit](http://www.adafruit.com/products/1110) and turn that into the alarm clock beside my bed.  Not only would it wake me up in the morning, it would also turn the lights on and turn the stereo on to FM radio. 
