---
layout: post
status: publish
published: true
title: Raspberry Pi Quick Start
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2917
wordpress_url: https://petelepage.com/blog/?p=2917
date: '2013-08-27 11:06:01 -0400'
date_gmt: '2013-08-27 15:06:01 -0400'
categories:
- Raspberry Pi
tags:
- CodeSample
- pi
- home automation
- raspberry pi
- getting started
comments: []
---
<p><b>Note:</b> If you don't see the scripts appearing inline, try refreshing.</p>
<p>Last night, I needed to re-image the SD card for my Raspberry Pi to get things setup from a clean state.  It'd been a few months since I initially did it, and couldn't remember exactly what I'd installed, or what config changes I'd made, so I figured I'd document things a little better this time.  So, here they are.  I've pushed all of the scripts and config files up as a few Gists on GitHub to make it easier to edit or change them later.</p>
<h2>Step 1 - Create the initial disk image</h2>
<ol>
<li>Download the latest Wheezy image from <a href="http://www.raspberrypi.org/downloads">http://www.raspberrypi.org/downloads</a></li>
<li>Create the image<br />
<script src="https://gist.github.com/petele/6347580.js"></script></li>
<li>In RaspConfig, set:
<ul>
<li>Expand the File System</li>
<li>Change system password</li>
<li>Set localization options, including locale, timezone, and keyboard layout</li>
<li>Set machine name</li>
<li>Enable SSH</li>
</ul>
</li>
</ol>
<h2>Step 2 - Setup the Wireless Network</h2>
<ol>
<li>Log in as pi</li>
<li>Run: <code>sudo nano /etc/network/interfaces</code></li>
<li>Replace the existing content with<br />
<script src="https://gist.github.com/petele/6341924.js"></script></li>
<li>Reboot</li>
</ol>
<h2>Step 3 - Create the primary user account</h2>
<ol>
<li>Login as pi</li>
<li>Run <code>curl https://gist.github.com/petele/6346707/raw/create-user.sh &gt; create-user.sh &amp;&amp; chmod u+x create-user.sh &amp;&amp; ./create-user.sh</code><br />
<script src="https://gist.github.com/petele/6346707.js"></script></li>
</ol>
<p><b>Note:</b> You'll probably want to fork this file since you might not want your user name to be pete ;)</p>
<h2>Step 4 - Install &amp; Configure Software</h2>
<ol>
<li>Login as newly created user</li>
<li>Run <code>curl https://gist.github.com/petele/6347546/raw/go.sh &gt; go.sh &amp;&amp; chmod u+x go.sh &amp;&amp; ./go.sh</code><br />
<script src="https://gist.github.com/petele/6347546.js"></script></li>
</ol>
<p><b>Note:</b> You'll probably want to fork this file since you probably don't want my GitHub config settings ;)</p>
<p>This script will download the config files from <a href="https://gist.github.com/petele/6347546">https://gist.github.com/petele/6347546</a> As part of the setup it will:</p>
<ul>
<li>Update all current software</li>
<li>Install new software including Lynx, Apache, VSFTPD, Avahi, Python Setup Tools, OpenSSL, RPIO, sleekxmpp, requests and a few others</li>
<li>Configure Git</li>
<li>Configure Avahi</li>
<li>Enable autologin on the console and run ~/login.sh for every user at login</li>
<li>Configure VSFTP, Apache (though it doesn't properly configure SSL yet), etc...</li>
<li>Seriously loosen security settings in Lynx - I need this for the Google Voice stuff in my Home Automation stuff, so use this piece with extreme caution!</li>
</ul>
<p>There you go - you're Raspberry Pi disk image is ready to go!</p>
