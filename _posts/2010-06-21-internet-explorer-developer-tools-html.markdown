---
layout: post
status: publish
published: true
title: 'Internet Explorer Developer Tools: HTML'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2245
wordpress_url: http://petelepage.com/blog/2010/06/internet-explorer-developer-tools-html/
date: '2010-06-21 10:42:25 -0400'
date_gmt: '2010-06-21 17:42:25 -0400'
categories:
- Web Design &amp; Development
- Internet Explorer
tags:
- IE9
- IE8
- HTML
- CSS
- Developer Tools
- Firebug
- ForMSDNIEDC
comments:
- id: 1739
  author: Tools For Web Designers and Web Developers
  author_email: ''
  author_url: http://petelepage.com/blog/2010/06/tools-for-web-designers-and-web-developers/
  date: '2010-06-29 15:57:25 -0400'
  date_gmt: '2010-06-29 22:57:25 -0400'
  content: '[...]                  &laquo; Internet Explorer Developer Tools: HTML
    How To: Put HTML5 &lt;video&gt; On A Page [...]'
- id: 1747
  author: 'Internet Explorer Develop Tools: CSS'
  author_email: ''
  author_url: http://petelepage.com/blog/2010/07/internet-explorer-develop-tools-css/
  date: '2010-07-01 13:36:53 -0400'
  date_gmt: '2010-07-01 20:36:53 -0400'
  content: '[...] the HTML tab, you can turn on and off rules, or the individual attributes
    as well as add, remove or edit all of [...]'
---
<p>In one of my <a href="http://petelepage.com/blog/2010/06/internet-explorer-developer-tools/" target="_blank">previous posts</a>, I introduced the built in, Internet Explorer Developer Tools that come with Internet Explorer 8.&#160; Today, I want to take a deeper dive into the HTML Tab and what you can do with it.</p>
<h2>The HTML Tab</h2>
<p>The HTML tab shows the underlying mark up behind your page as seen by the Internet Explorer document object model (DOM), and not only shows the elements, and layout for the page, but also how the attributes affect how the page looks.&#160; The HTML tab is split into two windows, the DOM tree view, and is a set of tabs that help you understand the way your page looks.</p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/DevTools1.png"><img style="border-right-width: 0px; display: block; float: none; border-top-width: 0px; border-bottom-width: 0px; margin-left: auto; border-left-width: 0px; margin-right: auto" class="wlDisabledImage" title="DevTools1" border="0" alt="DevTools1" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevTools1_thumb.png" width="550" height="205" /></a></p>
<p> As I walk through these tools, follow along, hit F12 to bring up the developer tools, and try changing the way my site looks! <img style="border-bottom-style: none; border-right-style: none; border-top-style: none; border-left-style: none" class="wlEmoticon wlEmoticon-smile" alt="Smile" src="http://petelepage.com/blog/wp-content/uploads/2010/06/wlEmoticonsmile1.png" />&#160; All of these screen shots are from the <a href="http://petelepage.com/blog/2010/06/internet-explorer-developer-tools/" target="_blank">IE Dev Tools Intro post</a> I made a few days ago.<br />
<h2 style="clear: left">Using the HTML Tools</h2>
<h3 style="clear: left">Select An Element</h3>
<p>There are several ways that you can select an element and then use the different tools in the HTML Tab to edit those elements.</p>
<ol>
<li><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-SelectByClick" border="0" alt="DevTools-SelectByClick" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsSelectByClick.png" width="92" height="100" />&#160;<strong>Select Element By Click</strong> <em>(CTRL-B)</em> – This is probably the easiest way to select an element and is pretty self explanatory.&#160; Clicking on this guy, then clicking on an element will select that element.&#160; Moving the mouse around the element you want to select will draw a blue line around the element, if you want to grab the parent element, move the mouse just outside of the element you’re trying to select.&#160; Alternatively, you can select the element, then use the DOM view to move up and down the DOM. </li>
<li>You can use the <strong>“Search HTML”</strong> box to find all element with particular attributes or elements of a particular type. </li>
<li>The <strong>DOM Tree</strong> view is another way that you can select particular elements.&#160; Usually I use a combination of Select Element By Click and the DOM tree.&#160; When the developer tools open, and the page is loaded, you’re shown a view of the DOM, but the tree view isn’t expanded, you can click on the “+” sign to expand out the tree view and see all of the contents of each node in the DOM.&#160; This is a really good way to get into and see how elements are related to each other and where they’re falling within the DOM. </li>
</ol>
<p>If you just want to see an outline of the elements on your page, and see how they’re all fitting together, under the <em>Outline</em> menu bar item, you can select from <em>Table Cells, Tables, DIV Elements, Images, Any Elements, </em>or<em> Positioned Objects</em>.&#160; </p>
<h3 style="clear: left">Changing Attributes and Elements</h3>
<p>One of the powerful features of the IE developer tools is that they allow you to change properties and attributes of the elements live while looking at the page.&#160; Once you’ve selected the element, you can use any of the tools below to change the element in memory.&#160; Remember, this won’t serialize those changes back down to your source file – you’ll have to do that yourself, but it’s a great way to figure out what you do need to change.&#160; </p>
<p>The developer tools do have the ability to save the changes you’ve made to your page, but they’re going to save out IE’s DOM version of your page, and not the beautiful code you wrote!</p>
<h3 style="clear: left">Style Tool</h3>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsStyle.png"><img style="border-right-width: 0px; margin: 0px 5px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-Style" border="0" alt="DevTools-Style" align="left" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsStyle_thumb.png" width="244" height="147" /></a>The Style tool shows how your CSS rules have been applied to the currently selected element.&#160; By default, the tress is fully expanded, so you can see where the values are coming from.&#160; For example, on the left, you’ll notice that in the <em>BODY </em>element, the color and font-size both are displayed with a line through them, those attributes are being overridden by another CSS rule further down in the cascade.&#160; You can use the check boxes to turn the attributes on and off as you’re looking at the page to see how particular rules and attributes are being applied to that specific element.&#160; Personally, I find this particular tool to be the least useful to me, and much prefer the next too, the Trace Style Tool.</p>
<h3 style="clear: left">Trace Styles Tool</h3>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsTrace.png"><img style="border-right-width: 0px; margin: 0px 5px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-Trace" border="0" alt="DevTools-Trace" align="left" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsTrace_thumb.png" width="244" height="148" /></a>Alright, like I said, this is the tool that I personally find most useful when I’m trying to figure out why my CSS isn’t rendering like I expect it to in the browser.&#160; The Trace Style tool shows you all of the style attributes that are being applied to this element.&#160; By expanding out the tree, you can see where the attributes are coming from, and how they cascade.&#160; In this particular case, in style.css, the body style rule has been defined twice for some reason, and because of the cascade, the body color of #4e4e4e is being overridden and set to black.&#160; If you click on the “style.css” link on the right side of the screen, you’re taken directly to the specific line in the code! </p>
<p>The Trace Style tool gives you two other things I really like – the check boxes so you can turn the styles on and off in real time to see how the rule changes the element.&#160; The second one is that you can actually edit those CSS values inline and see how they appear.&#160; If you click on the “black” and type “yellow”, you’ll notice the page updates in real time!</p>
<h3 style="clear: left">Layout Tool</h3>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsLayout.png"><img style="border-right-width: 0px; margin: 0px 5px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-Layout" border="0" alt="DevTools-Layout" align="left" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsLayout_thumb.png" width="244" height="149" /></a>I know I’ve said this before, but for whatever reason, I just can’t seem to remember the difference between margin and padding – every time I think I remember it right, I’m wrong again.&#160; The single most helpful tool for me when I get into these types of problems is the Layout Tool.&#160; It draws a visual representation of elements and their box model – it shows the size of the element (that’s the light blue in the center in this case the 574x32), the padding, the border, the margin and the offset.&#160; All visually in a way that I can see and understand – without having to put “<em>border: 1px solid black;</em>” around my elements to debug them! <img style="border-bottom-style: none; border-right-style: none; border-top-style: none; border-left-style: none" class="wlEmoticon wlEmoticon-smile" alt="Smile" src="http://petelepage.com/blog/wp-content/uploads/2010/06/wlEmoticonsmile1.png" />&#160; </p>
<p>Like the other tools, you can also edit the values in line.&#160; The inline editor is somewhat picky though, and you have to enter the value in just like you would if you were putting it in as an inline style, so you need to use the value, the units and a semi-colon.&#160; For example, if I click on the “32” above and want to change it to 75, I’d need to type “75px;”.&#160; </p>
<h3 style="clear: left">Attributes Tool</h3>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsAttributes.png"><img style="border-right-width: 0px; margin: 0px 5px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-Attributes" border="0" alt="DevTools-Attributes" align="left" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsAttributes_thumb.png" width="244" height="149" /></a>Okay, so now we’ve seen all of the styles that are being applied to our page, all the styles that are being applied to the selected element, we’ve been able to visualize the box model for the selected element.&#160; But there are attributes on elements that aren’t style, and we need a tool to be able to view and edit those.&#160; That’s what the Attributes tool is for – it’s not just the style and CSS attributes, but all attributes that are on the selected element.&#160; In this particular case, the Node box indicates we’re looking at an h1 tag, and that h1 tag has only one attribute, which is the class attribute.</p>
<p>To add an attribute to the element, you can click on the plus sign <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-AttributesEditor" border="0" alt="DevTools-AttributesEditor" src="http://petelepage.com/blog/wp-content/uploads/2010/06/DevToolsAttributesEditor.png" width="125" height="29" />, it then moves the focus to the table, and provides you with a drop down list of all of the attributes that you can set for that element.&#160; You’ll likely notice some attributes like “<em>background (css)</em>” – those attributes will be set as inline style attributes for the selected element.</p>
<h2>HTML Editing with Internet Explorer Developer Tools</h2>
<p>Well, that wraps up this post, hopefully you found it useful!&#160; I’ll be back soon with another post covering the CSS Editing tools, and another for JavaScript!&#160; </p>
