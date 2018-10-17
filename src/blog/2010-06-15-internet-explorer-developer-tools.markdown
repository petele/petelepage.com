---
layout: post
title: Internet Explorer Developer Tools
date: '2010-06-15 00:22:25 -0400'
categories: blog
tags:
- IE8
- HTML
- CSS
- JavaScript
- Debug
- Developer Tools
- Firebug
- Profiler
- Color Picker
- ForMSDNIEDC
comments:
- id: 1692
    World
  date: '2010-06-15 11:00:11 -0400'
  content: '[...] pointing me to a website by Pete LePage from the Internet Explorer
    team at corp.&#160; Pete has a great write up on the Developer Tools within Internet
    Explorer 8 (and IE 9).&#160; I won’t re-iterate everything Pete has written, but
    this is something that [...]'
- id: 1710
  date: '2010-06-21 10:42:29 -0400'
  content: '[...] one of my previous posts, I introduced the built in, Internet Explorer
    Developer Tools that come with Internet Explorer [...]'
- id: 1716
  date: '2010-06-22 11:31:43 -0400'
  content: '[...] requires tools beyond your development environment.&#160; In my
    last two posts, I introduced the Internet Explorer Developer Tools, and the HTML
    Tab within the Internet Explorer Developer Tools.&#160; Today, I want to take
    a quick [...]'
- id: 2251
  date: '2010-10-07 01:45:41 -0400'
  content: "Just gone back to IE8 from the IE9 beta. For some reason developer tools
    is now on. Cannot get rid of it and its a nuisance.\r\n\r\nTried the regedit 'Disabled'
    setting, no joy. Also tried the entry in group policy again no joy. Any ideas?
    I didn't even turn this on in IE9."
- id: 2819
  date: '2011-03-05 10:51:06 -0500'
  content: |-
    IE developer tools are pretty pathetic compared to the likes of Firebug. The most annoying thing is seeing messages like "object does not have this method on line 23847634". Eh, the page only has a few hundred lines, what kind of message is that?

    In Firebug I can type "a" into the script console (where a is an array) and not only see the contents of the array but all the DOM methods I can call on it. In IE toolbar all I see is a useless "{...}". Absolutely pointless.
---

One the the coolest features of Internet Explorer 8 that most developers don’t know about are the build in developer tools.  Think Firebug, except for Internet Explorer, and built by the IE Team, so you don’t have to download anything, install it, or enable it.  Heck, my Mom could bring up the developer tools if she really wanted!  Over the next week or so, I’m going to do a short series on the Internet Explorer Developer Tools and what you can do with them.  Since Internet Explorer 9 is still in the “Platform Preview”, I’m going to focus on Internet Explorer 8, though there are some cool new IE9 tools, I’ll save those for another day.

## Starting the Developer Tools

There are two ways you can open the IE Developer Tools, you can either hit F12, or under the Tools menu icon, you can choose “Developer Tools”.  Both of these will open the Developer Tools, which you can either run in a separate window, or docked to the bottom of your browser window as I’ve shown below.

![DevTools-HTML](/assets/DevToolsHTML.jpg "DevTools-HTML")

When the Developer Tools open, there are four main tabs that provide the major functionality of the tools

## HTML Tab

[![DevTools-HTML](/assets/DevToolsHTML_thumb.jpg "DevTools-HTML")](/assets/DevToolsHTML1.jpg)

This tab allows you to see and edit in real time the HTML and applied styles that make up your page as seen by the Internet Explorer DOM.  From here you can move through the DOM either via the tree view on the bottom left, or you can click on the little mouse pointer icon, and grab individual elements.  When you do that, IE automatically takes you to the element you’ve selected.  On the left side of the HTML panel, is another set of tabs, that show the _Style_ and inheritance information for the CSS that’s being applied, an ability to _Trace Styles_, so you can see what particular style is being applied, and why.  The _Layout_ tab is particularly useful if you’re forgetful like me and mix up margin and padding (for years, I’ve not been able to keep it straight, and every time I think I’m remembering it right, I goof it up again).  Finally the _Attributes_ tab shows the attributes that are on that element.

## The CSS Tab

[![DevTools-CSS](/assets/DevToolsCSS_thumb.jpg "DevTools-CSS")](/assets/DevToolsCSS.jpg)Shows you all of the styles that are being pulled down for your site, how they cascade against one another and is useful to view and turn off styles individually or at the entire style level.  Like the HTML tab, you can edit your styles in real time to see how changing properties affects the page.  So if you’re not sure why something isn’t being styled right, this is a great place to look.

## The Script Tab

[![DevTools-Script](/assets/DevToolsScript_thumb.jpg "DevTools-Script")](/assets/DevToolsScript.jpg)Like any good development tools, debugging is a vital component of understanding why something isn’t working, or why you’re getting that a 3 instead of a 2.  The Internet Explorer 8 developer tools let you do everything that you’d expect in a full-fledge debugger (it’s almost as powerful as the debugging tools in VS2010 – not quite, but pretty good).  Like the HTML tab, there are several tabs on the right side of this window.  There’s the _Console_ tab, so you can output to the console window if you’ve added debugging code to your scripts.  The _Break Points_ tab, to help you be able to apply break points and debug into your code on specific lines.  There’s also the _Local_ and _Watched Variables_ tab so you can see what’s happening to your variables as your applications is running.  And finally the _Call Stack_ tab to dig into the call stack.

## The Profiler Tab

[![DevTools-Profiler](/assets/DevToolsProfiler_thumb.jpg "DevTools-Profiler")](/assets/DevToolsProfiler.jpg)This is the one that I think is probably the coolest feature of the Internet Explorer 8 Developer Tools, and that’s the built in code profiler.  Want to know what’s happening, what functions are being called, why things are taking longer than you expect, or not getting called, the Profile is your guide to what’s going on.  Once you turn the Profiler on, you can run your code and IE will keep track of the number of times every method is called the length of time spend in that method (_Exclusive Time_), the length of time spend in that method and any methods called by that method (_Inclusive Time_), as well as where that method is.

## Other Useful Developer Tool Features

There’s a couple other things that I want to highlight in this Internet Explorer Developer Tools introduction, that I think are really useful when I’m working on building a new site, or editing an existing one.

### Browser Mode and Document Mode

Internet Explorer 8 shipped with two rendering engines, the Internet Explorer 7 rendering engine, and the Internet Explorer 8 rendering engine.  By default, as long as you’ve include the right DOCTYPE switch, Internet Explorer 8 will use the Internet Explorer 8 rendering engine.  But you can’t always guarantee your users are going to be using IE8, and you want to see how your site will look with the IE7 rendering engine.

![DevTools2](/assets/DevTools2.jpg "DevTools2")

#### Document Mode

Document Mode allows you to manually choose which rendering engine you want IE to render the page with; choosing the Internet Explorer 8 Standards mode uses the IE8 rendering engine, Internet Explorer 7 Standards Mode uses the IE7 rendering engine, or Quirks Mode uses the quirky, IE5.5 rendering engine. Changing the Document Mode does NOT change the user agent string that is sent to the server and is primarily used for testing and seeing how your site will look in IE7.

#### Browser Mode

Browser Mode changes both the Document Mode, and the User Agent string, which allows Internet Explorer 8 to lie about who it says it is.

*   _**“Internet Explorer 8”**_ uses the IE8 rendering engine and the UA string tells the server that the browser is IE8 by including the “MSIE 8.0” and “Trident/4.0” tokens in the User Agent String.
*   **_”Internet Explorer 8 Compatibility Mode”_** uses the IE7 rendering engine and the UA string tells the server that it’s IE7, but if you know better, it’s really IE8.  It does this by sending the “MSIE 7.0” token along with the “Trident/4.0” token.  That way, if the server is looking for “MSIE 7.0” and you get the expected IE7 behavior.
*   **_”Internet Explorer 7”_** uses the IE7 rendering engine and the UA string tells the server that the browser is IE7, it doesn’t include the “Trident/4.0” token, only the “MSIE 7.0”.

If you want to see what your browser is reporting for it’s user agent string, check out [http://petelepage.com/samples/uastring.aspx](http://petelepage.com/samples/uastring.aspx "http://petelepage.com/samples/uastring.aspx").  Then open the Developer Tools and try changing the Browser Mode and Document Mode to see how the page renders in different ways.

### Color Picker

Ever wonder what color is on another site, and don’t want to dig into their CSS to find it, or don’t remember what color you picked, the color picker is a little eye dropper tool that lets you click on a particular part of the page and it gives you the HEX color value, so you can just plug it right in where you need it.  You can find the Color Picker under the Tools menu!

## More To Come!

In my future posts, I’ll dive deeper into each of the above features, and how you can use them to debug your websites!