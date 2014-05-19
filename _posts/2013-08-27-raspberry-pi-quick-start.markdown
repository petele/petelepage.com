---
layout: post
title: Raspberry Pi Quick Start
date: '2013-08-27 11:06:01 -0400'
categories: blog
tags:
- CodeSample
- pi
- home automation
- raspberry pi
- getting started
comments: []
---
Last night, I needed to re-image the SD card for my Raspberry Pi to get things setup from a clean state.  It'd been a few months since I initially did it, and couldn't remember exactly what I'd installed, or what config changes I'd made, so I figured I'd document things a little better this time.  So, here they are.  I've pushed all of the scripts and config files up as a few Gists on GitHub to make it easier to edit or change them later.

**Note:** If you don't see the scripts appearing inline, try refreshing.


## Step 1 - Create the initial disk image

1.  Download the latest Wheezy image from [http://www.raspberrypi.org/downloads](http://www.raspberrypi.org/downloads)
2.  Create the image

    <script src="https://gist.github.com/petele/6347580.js"></script>
3.  In RaspConfig, set:

    *   Expand the File System
    *   Change system password
    *   Set localization options, including locale, timezone, and keyboard layout
    *   Set machine name
    *   Enable SSH

## Step 2 - Setup the Wireless Network

1.  Log in as pi
2.  Run: `sudo nano /etc/network/interfaces`
3.  Replace the existing content with

    <script src="https://gist.github.com/petele/6341924.js"></script>
4.  Reboot

## Step 3 - Create the primary user account

1.  Login as pi
2.  Run `curl https://gist.github.com/petele/6346707/raw/create-user.sh &gt; create-user.sh &amp;&amp; chmod u+x create-user.sh &amp;&amp; ./create-user.sh`

    <script src="https://gist.github.com/petele/6346707.js"></script>

**Note:** You'll probably want to fork this file since you might not want your user name to be pete ;)

## Step 4 - Install &amp; Configure Software

1.  Login as newly created user
2.  Run `curl https://gist.github.com/petele/6347546/raw/go.sh &gt; go.sh &amp;&amp; chmod u+x go.sh &amp;&amp; ./go.sh`

    <script src="https://gist.github.com/petele/6347546.js"></script>

**Note:** You'll probably want to fork this file since you probably don't want my GitHub config settings ;)

This script will download the config files from [https://gist.github.com/petele/6347546](https://gist.github.com/petele/6347546) As part of the setup it will:

*   Update all current software
*   Install new software including Lynx, Apache, VSFTPD, Avahi, Python Setup Tools, OpenSSL, RPIO, sleekxmpp, requests and a few others
*   Configure Git
*   Configure Avahi
*   Enable autologin on the console and run ~/login.sh for every user at login
*   Configure VSFTP, Apache (though it doesn't properly configure SSL yet), etc...
*   Seriously loosen security settings in Lynx - I need this for the Google Voice stuff in my Home Automation stuff, so use this piece with extreme caution!

There you go - you're Raspberry Pi disk image is ready to go!
