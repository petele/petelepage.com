---
layout: post
title: Home Automation For Geeks
category: home automation
date: 2013-07-09
tags:
- pi
- home automation
- hue
- itach
- raspberry pi
- google voice api
- harmony hub api
- logitech api
- harmony api
- harmony ultimate api
- gvoice api
- hue api
comments:
- id: 5025
  date: '2013-07-20 12:50:25 -0400'
  content: "Hi,\r\nawesome ideas here. i was wondering if there was a way to control
    the harmony remotes/hub somehow. ws glad to find out about the pyharmony project.\r\nso
    here's my question, since you are able to control the harmony hub, why do you
    need the iTach?"
- id: 5031
  date: '2013-07-23 13:32:07 -0400'
  content: I use the iTach because controlling the Air Conditioners in my apartment
    is a bit of a pain through the Harmony.  Since the Harmony is centered around
    "activities", it didn't really make sense to hook it in to there.  I wanted to
    be able to turn the AC on and off without having to start an activity.
- id: 5046
  date: '2013-08-02 16:32:22 -0400'
  content: "Too bad you did not see the #crowdfunding campaign on Indiegogo. The SmartDimmer
    would have given you the ability to control all lights in your apartment via a
    simple iPhone app. No keypad on the wall.\r\nAlso see live demo at http://smartdimmer.net/live.php"
- id: 5047
  date: '2013-08-02 17:37:05 -0400'
  content: "I'm actively trying to avoid the app experience actually - the idea of
    having to pull my phone out of my pocket as I walk into a room just to turn the
    light on sucks.  It should be as simple as either hitting a switch, or even better,
    motion detection.  \n\nThe smart dimmer looks cool and would work well for a lot
    of people I think."
- id: 5051
  date: '2013-08-03 20:21:24 -0400'
  content: "Did you see that we have a keyfob that can turn on/off lights too? It
    basically uses the same as the Companion Switch, just a different form factor
    and only 2 years battery life. Maybe we should make one with 4 keys...\r\n\r\nWhat
    blogs do you use on home automation?"
- id: 5055
  date: '2013-08-08 09:51:13 -0400'
  content: |-
    <blockquote>Did you see that we have a keyfob that can turn on/off lights too?</blockquote>
    No, I didn't see the keyfob, that's kind of interesting.  For my needs in a small apartment, having several little wall switches with 2 keys on it would be perfect.  It would eliminate the wires that I currently have running everywhere and allow more functionality in different rooms.

    I know what I'm about to ask for is hard, but it's what I really want.  I want a 'Decora Rocker' style light switch that fits overtop of but doesn't change the existing light switch, just makes it disappear.  I know it'd be bulkier, but would mean I wouldn't have to re-wire anything or change anything in my rented apartment.  Stick it on with some 3M command like strips.

    <blockquote>What blogs do you use on home automation?</blockquote>
    I actually haven't come across any that I've liked, though def open to suggestions!
- id: 5058
  date: '2013-08-25 14:09:14 -0400'
  content: "Hi,\r\nI've read your blog especially the part about the Harmony Hub.
    I bought it this week and want to control it with OpenRemote. The pyharmony library
    is great! I managed to access the hub and retrieve the result of show_config.
    I downloaded your branch, but the command getCurrentActivity gives an error stating
    that show_config is the only command I can use. I am new to python so maybe I'making
    a NOOB mistake. Can you help me?\r\nRegards,\r\nBouke"
- id: 5059
  date: '2013-08-27 08:39:33 -0400'
  content: "I'm trying to get Harmony Hub API working. I'm running latest Debian with
    the Python requirements.\r\n\r\nThe command PYTHONPATH=\".\" python harmony\r\nexecutes
    fine, but for the show_config, I get an error.\r\nDo you have any suggestion what
    might be the problem?\r\n\r\nmagnus@misc01:~/scripts/harmony/pyharmony$ PYTHONPATH=\".\"
    python harmony --email my@email.com --password p@assw0rd --harmony_ip 192.168.83.122
    show_config\r\n\r\nINFO    requests.packages.urllib3.connectionpool        Starting
    new HTTPS connection (1): svcs.myharmony.com\r\nTraceback (most recent call last):\r\n
    \ File \"/usr/lib/python2.7/runpy.py\", line 162, in _run_module_as_main\r\n    \"__main__\",
    fname, loader, pkg_name)\r\n  File \"/usr/lib/python2.7/runpy.py\", line 72, in
    _run_code\r\n    exec code in run_globals\r\n  File \"/home/magnus/scripts/harmony/pyharmony/harmony/__main__.py\",
    line 83, in \r\n    main()\r\n  File \"/home/magnus/scripts/harmony/pyharmony/harmony/__main__.py\",
    line 79, in main\r\n    sys.exit(args.func(args))\r\n  File \"/home/magnus/scripts/harmony/pyharmony/harmony/__main__.py\",
    line 37, in show_config\r\n    token = login_to_logitech(args)\r\n  File \"/home/magnus/scripts/harmony/pyharmony/harmony/__main__.py\",
    line 23, in login_to_logitech\r\n    token = auth.login(args.email, args.password)\r\n
    \ File \"/home/magnus/scripts/harmony/pyharmony/harmony/auth.py\", line 41, in
    login\r\n    result = resp.json().get('GetUserAuthTokenResult', None)\r\nTypeError:
    'dict' object is not callable"
- id: 5071
  date: '2013-09-15 18:35:04 -0400'
  content: "Have you checked out Ube? http://myube.co/\r\n\r\nI've also gone a different
    direction lately with my home automation. I haven't documented my experience just
    yet but will later once I have everything up and running. I bought an android
    tablet and mounted it to the wall. I will be looking into a more permanent wall
    solution once I've figured out exactly how it's all going to be used. But once
    I found Tasker and AutoVoice it's been a whole new experience! You can program
    natural language and string expressions together. So far I've got my whole home
    audio solution up and running, it currently changes volume, speakers, playlists
    etc. Next, is my thermostat and harmony remote. The cool thing about AutoVoice
    is you can use it with Bluetooth. I'm going to be shortly experimenting with a
    speakerphone. The ultimate experience would be to forget the keypad/phone/tablet
    experience altogether."
- id: 5091
  date: '2013-11-24 12:28:21 -0500'
  content: 'Do you know Almadomus? It''s a new home automation product, simple, cheap
    and perfect for DIY users. Take a look at its crowdfunding campaign: http://igg.me/at/almadomus/x/3228335
    (discaimer: i''m one of the founder of the project)'
- id: 5093
  date: '2013-12-08 15:46:41 -0500'
  content: "Hi Pete,\r\n\r\nAny chance you could share the Wireshark Logs you used
    to reverse engineer the Harmony Hub protocol? I'm re-implementing the Python code
    in C# and am experiencing some curious disparities. For example, I receive a 44
    byte rather than 48 byte authentication token from Logitech's website and, while
    I am able to converse with the Hub using XMPP, I am not able to illicit an Identity
    from it; just the following:\r\n\r\n<code>\r\n\r\n  \r\n    \r\n  \r\n\r\n</code>\r\n\r\nIt
    doesn't seem to matter which credentials, authentication token, device name, etc
    I use to attempt to start the session I always receive this response.\r\n\r\nThanks"
- id: 5094
  date: '2013-12-08 15:48:50 -0500'
  content: "^ Tried wrapping the iq response in a code section but obviously not appearing.
    In short, the iq response type is error and I receive the following payload in
    the oa element:\r\n\r\n  serverIdentity=5a7954eb-1445-433b-2f35-558ab0c5e7cc:hubId=97:identity=:status=succeeded:protocolVersion={XMPP=\"1.0\",
    HTTP=\"1.0\", RF=\"1.0\"}:hubProfiles={Harmony=\"2.0\"}:productId=Pimento:friendlyName=LivingRoom"
- id: 5096
  date: '2013-12-27 15:36:35 -0500'
  content: "Ian,\r\n\r\nWould you be willing to share your .net code (either privately
    or through github)? maybe I can help debugging the protocol -- I'm very interested
    in getting it running on .net"
- id: 5097
  date: '2014-01-17 01:38:05 -0500'
  content: |-
    Hi,

    Nice article! I need to control a Harmony blaster from ios.  Did u ever figure it all out?

    I create tech for disabled kids. I need a simpler interface than the Logirech app. My guy can do LiveCode, objective C, or probably anything necessary if he just knew how to interact with the blaster.

    Could u help?

    RJ :-)
- id: 5098
  date: '2014-02-17 09:56:21 -0500'
  content: Is there a way I can use this code with Tasker for android? That way if
    I come home it automatically turns on the music or combined with autovoice can
    give voice commands? Any help would be much appreciated! Thanks
- id: 5099
  date: '2014-03-06 19:48:52 -0500'
  content: Any word on the "harmony.engine" commands for button presses? I've tried
    a few things like "function=" or "IRCommand=" but no results so far.
- id: 5100
  date: '2014-04-06 01:37:58 -0400'
  content: Wow! This is a very useful page and I really enjoyed reading article and
    all users' comments. Smart Home Group is a privately owned and operated Technology
    Distribution company offering a full range of <a href="http://www.smarthomegroup.com.au"
    rel="nofollow">Home Automation</a> solutions. With a strong brand presence in
    the Australian market, Smart Home Group continues to provide value for money solutions
    across a growing range of products. Thank you for sharing valuable information.
- id: 5103
  date: '2014-05-01 13:00:53 -0400'
  content: "Late to the party, but wanted to thank you for your efforts here.  I've
    implemented similar code as a .NET class library and put in on <a href=\"https://github.com/hdurdle/harmony\"
    rel=\"nofollow\">Github</a>.  \r\n\r\nIt's not pretty, and the Console app test
    harness is hacky, but works well enough to demo everything the Python code did.
    \ Improvements welcome!"
---

I've always had a fascination with home automation systems, things that make your life easier and computers that do the stuff that I'm too lazy to do.  In college, I had my tiny little apartment in Ottawa all wired up with [X10](http://en.wikipedia.org/wiki/X10_(industry_standard)) and this weekend, I "finished" my most recent creation.  Though honestly, is it ever really done?

It all started a few months ago when I picked up a set of the Philips Hue light bulbs - they're amazing.  LED light bulbs that are fully addressable and programmable via a simple to use [REST API](http://developers.meethue.com/).  The biggest problem I had with them was that to really use them, you had to leave the light switch On and turn the lights on and off via the app.  But it gets to be a small pain in the butt if you have to pull your phone out of your pocket every time you want to turn a light bulb on or off.

## The Kit

* 1 x [Raspberry Pi (Model B)](http://www.adafruit.com/products/998)
* 1 x [Simple Door Swtich](http://www.adafruit.com/products/375)
* 1 x [Temperature Sensor](http://www.adafruit.com/products/381)
* 1 x [Half-Sized Bread Board](http://www.adafruit.com/products/64)
* 1 x [iTach IP to IR](http://www.amazon.com/Global-Cache-IP2IR-iTach-Wired/dp/B003BFTKUC/)
* 1 x [Harmony Ultimate Remote Control](http://www.logitech.com/en-us/product/harmony-ultimate?crid=60)
* 1 x [Philips Hue Starter Kit](http://www.amazon.com/Philips-431643-Personal-Wireless-Frustration/dp/B00BSN8DN4/)
* (a few) x [Philips Hue Single Bulbs](http://www.amazon.com/Philips-431650-Personal-Wireless-Frustration/dp/B00BSN8DLG/)
* 4 x [Targus Numeric USB Key Pad](http://www.amazon.com/Targus-AKP10US-Numeric-Keypad/dp/B002NURRL0/)
* 2 x Window Air Conditioners with IR remotes (already had these)

## Okay, so what's it do?

The Raspberry Pi is effectively the brains of the apartment, it keeps simple state, and sends commands to the lights, the iTach and the Harmony hub.  The keypad are placed throughout the apartment and act like multi-function light switches.  The zero key and the enter key have special meaning though, either putting the system into Away mode or Home mode.  Away mode is just a simple macro that turns all of the Hue lights, uses the iTach to turn off the air conditioners off, shuts the TV and stereo off via the Harmony Hub, and then waits until the front door opens again.  When the front door opens, a magnetic door switch saves me from having to hit the Home button which runs another simple macro to turns the lights on, and depending on both the inside and outside temperature, turns the air conditioners on.  Oh, and it also turns one of the lights in the living room purple when I have an unread message on Google Voice.

## Building out the system

Building out the system, some parts were easier than others.  The API for the Philips Hue lights, _awe-some_! The iTach to control the air conditioners, it was good once I figured out how to teach it IR commands.  Google Voice, yah, there's no API there - that required a little thinking.  And the Harmony Hub, there's no published API for the Harmony Ultimate Hub, and wow, that one sucked.

My original plan was the write a [Chrome Packaged App](http://developer.chrome.com/apps/about_apps.html) to handle the lights, and run a few USB numeric keyboards around my place.  I figured the cost of leaving a Chromebook running 24x7 would be acceptable with the energy savings I was getting from the lights.  But, I kept hitting a single and pretty simple problem, I couldn't keep the Chromebook from locking.  I could prevent it from going to sleep, but it still locked, leaving the the USB keyboards useless, since all they could do was type passwords into the machine.  So, I pulled the Raspberry Pi I ordered months ago out of a drawer and started fiddling; within a few hours I had a working prototype - I was stoked.

## The **un-official** Google Voice API

To be clear, there isn't a Google Voice API available to developers (boo!), though there are a few good libraries out there that are worth checking out.  Sadly, if you have two factor authentication turned on, none of them work since they depend on sending your username and password to Google and doing some unholy magic to log in.  And if you don't have two factor turned on, **please [go turn on two factor authentication](http://www.mattcutts.com/blog/google-two-step-authentication/) RIGHT NOW**.  I'll wait.  No seriously, I'll wait.

I was pretty resigned to not being able to integrate a new message indicator to the system after spending a few days trying to figure out if there was any way possible around the two factor stuff, or if I could somehow figure out how to make a web request with the right cookies.  That is of course, until I was reading the history of browsers, and was reminded of [Lynx](http://en.wikipedia.org/wiki/Lynx_(web_browser)), the first browser I used.  Did it still exist, would it work? Would it run JavaScript?  The answer is yes!  Sure enough, I installed Lynx on my Pi, and then tried logging into Google Voice.  I figured if I could log in, I should be able to somehow scrape the results.  Sure enough, it worked.  Now to figure out how to scrape some results!

After a little searching and some Chrome DevTools digging, I found Google Voice has a JSON end point that will give you a simple JSON object with message counts:

**[https://www.google.com/voice/request/unread](https://www.google.com/voice/request/unread)**

``` js
{
  "unreadCounts": {
    "all": 3,
    "inbox": 1,
    "missed": 0,
    "placed": 0,
    "received": 0,
    "recorded": 0,
    "sms": 0,
    "spam": 28,
    "trash": 0,
    "unread": 1,
    "voicemail": 3
  },
  "r": "SomeMagicCodeHere"
}
```

And **BOOM** I was off!  Unfortunately, it means I have to fork a process, start Lynx, request the URL and then parse the result every time I want to check if I have new messages.  And my cookies do expire so I have to log back in every so often to re-authenticate, but it's better than not having any reporting at all!

## IP to IR with the iTach

A while ago, I came across the iTach IP 2 IR controller, it's an interesting little device, I think mostly meant for high end home automation systems, but it wasn't that expensive and I figured I'd give it a go.  It's pretty simple, it has a network jack, and three 1/8" jacks on the back.  The 1/8" jacks connect to IR emitters that you can either place in the immediate vicinity of a device, or connect an IR blaster and just put in the room.  The [manual](http://www.globalcache.com/files/docs/API-iTach.pdf) is pretty thorough for it, except the left out all of the important intro stuff, like the difference between a blaster and an emitter, or where the IR learning port was.  Oh, and they don't have a Mac app, so you need to grab one from a [third party app](http://www.rmartijnr.eu/) to learn commands.

Once I got this guy somewhat figured out, the rest was pretty easy.  It sends out regular UDP multicast packets so you can find it on the network, and then you communicate with by opening a TCP socket and sending an IR command to one of the three IR ports.

For example, to set the bedroom air conditioner to 72&deg;, you'd connect to the iTach on port 4998 and send:

``` text
sendir,1:3,1,37993,1,1,319,160,21,61,21,21,21,21,21,21,21,61,21,21,21,
21,21,21,21,21,21,21,21,61,21,21,21,61,21,21,21,21,21,21,21,61,21,61,
21,21,21,61,21,21,21,21,21,61,21,21,21,61,21,21,21,21,21,61,21,3799
```

The `sendir` part is pretty self explanatory, followed by `1:3` which tells the iTach to send it to the third IR port on the device.  I guess some of their devices can have multiple addresses, explaining the first `1`.  If all goes according to plan, it should then respond with:

``` text
completeir,1:3,1
```

I mentioned the system turns the air conditioners on depending on the inside and outside temperature.  I used the [DS18B20 temperature sensor](http://www.adafruit.com/products/381) from Adafruit and followed their [awesome tutorial](http://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing?view=all) for setting it up.  For the outside temperature, I check a weather station in Brooklyn (it's appearently closest to my place) via [WeatherUnderground](http://www.wunderground.com/weather/api/).  Their API is free to use and super simple if you're just using it for a personal project and not hitting it very hard.

## Harmony Hub API

The crowning achievement came this weekend when I figured out how to query and address my Harmony Ultimate Hub.  Logitech doesn't make an API available to developers, and in some ways, I don't blame them - Harmony remotes are pretty complex and there's a lot of state and other stuff involved.  But that wasn't going to stop me.

If you're not familiar with the Ultimate, it's pretty sweet, not only does the remote control everything, there's a little 'hub' that sits in your living room and allows you to use your phone or tablet as an additional remote anytime you're on your network.

Sadly, searching for Harmony Hub API at the time revealed nothing useful, I tried up, down and ten ways to Sunday to see if anyone else was trying to do what I did.  I couldn't imagine I was the only one!  But nothing.  So I did what any developer would do, first I port scanned it (it's got an open port on 5222, and 8088).  I tried my damn'est on port 8088, it responded to HTTP POST requests only, but I couldn't ever get a useful response.  Then I hooked up a [packet sniffer](http://www.wireshark.org/) and tried to see what was going on with the app.  Nothing.  Nodda.

Ah right, the wireless network I have setup, was preventing my Mac from seeing packets sent from my phone to the hub.  Grrr!  Okay, share the Mac's network and then try again. This time it can't find the hub.  Right, different subnet.  Long story short, connect to hub, switch network, now I can see a few packets.  Great, so now I can see a few packets, let's do a few searches to see if anyone has posted about:

``` text
vnd.logitech.harmony/vnd.logitech.harmony.engine
```

Again, BINGO! A GitHub repository called [pyharmony](https://github.com/jterrace/pyharmony/), complete with a great [protocol guide](https://github.com/jterrace/pyharmony/blob/master/PROTOCOL.md) and working code.  The API uses [XMPP](http://en.wikipedia.org/wiki/XMPP), which makes sense when you figure the hub potentially needs to update multiple devices with it's current state in near real time.  While I would have much preferred an REST API, I figured I could work with XMPP.

I grabbed the code, installed the pre-reqs, then ran it. Queue [sad trombone sound](http://www.sadtrombone.com/?play=true).  Didn't work, well, it connected but then hung while trying to get the session token.  I went back and forth with the other developer a few times, compared outputs, and then realized, we were dealing with different hubs.

So this weekend, back to the WireShark I went, this time capturing everything, and sure enough, the login credentials are subtly different, once I updated the code and used the correct login credentials, it worked like a charm.  Sadly, my credentials don't work on his Hub, so we still need to figure out how to do proper device detection and use the appropriate credentials.

You can grab my forked code for pyharmony at [https://github.com/petele/pyharmony/](https://github.com/petele/pyharmony/), which includes the credentials for the Harmony Ultimate Hub.  If you're using one of the older Hubs, grab Jeff's code.  I've also added a few additional functions to my fork that aren't in the original, including `getCurrentActivity` and `startactivity`.

In my home automation system, the Away macro and the Bed Time macro both check the current activity and if the system is on, turns everything off by calling `startactivity` with the activity ID **-1**.  The `getConfig` API returns a JSON object with all of the info about your system, including the activity IDs for everything you've programmed into your Harmony.  Obviously I could add a bunch more functionality to this, but that's for another day.

## Energy Efficient

Talking to some of my co-workers about the system, they were a little concerned about the power consumption of leaving the Pi on all day every day and if that would eliminate the benefit of the Hue lights.  As I was wrapping things up this weekend, I pulled out my trusty Kill-a-watt, and did some quick measurements.  The Pi uses only about 2 watts, 3 if it's really pushing it.  The lights are only about 8.5 watts each, and since the air-conditioners only come on when needed, I'm being smarter about power there too!  So overall, I'm pretty sure that this will save me a little money in the long run.

## Home Automation for Everyone

There's a whole bunch more that I want to do with my system, for example a morning alarm, connected to my calendar to make sure I get up in time for any meetings.  It could turning the lights on, tune the radio to my favorite station gently turning the sound up (until I get out of bed), the possibilities are endless.

And with the price of hardware like the Raspberry Pi, door switches and such, anyone with a little geek know how can put together a pretty awesome system.  Feel free to grab my code and rip it apart and do your own thing with it, it's not exactly pretty, but I love the fact my apartment welcomes me home at night and says Goodbye when I leave.
