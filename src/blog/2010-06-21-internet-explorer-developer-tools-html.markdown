---
layout: post
title: 'Internet Explorer Developer Tools: HTML'
date: '2010-06-21 10:42:25 -0400'
categories: blog
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
  date: '2010-06-29 15:57:25 -0400'
  content: '[...]                  &laquo; Internet Explorer Developer Tools: HTML
    How To: Put HTML5 &lt;video&gt; On A Page [...]'
- id: 1747
  date: '2010-07-01 13:36:53 -0400'
  content: '[...] the HTML tab, you can turn on and off rules, or the individual attributes
    as well as add, remove or edit all of [...]'
---

In one of my [previous posts](http://petelepage.com/blog/2010/06/internet-explorer-developer-tools/), I introduced the built in, Internet Explorer Developer Tools that come with Internet Explorer 8. Today, I want to take a deeper dive into the HTML Tab and what you can do with it.

## The HTML Tab

The HTML tab shows the underlying mark up behind your page as seen by the Internet Explorer document object model (DOM), and not only shows the elements, and layout for the page, but also how the attributes affect how the page looks. The HTML tab is split into two windows, the DOM tree view, and is a set of tabs that help you understand the way your page looks.

[![DevTools1](/assets/DevTools1_thumb.png "DevTools1")](/assets/DevTools1.png)

 As I walk through these tools, follow along, hit F12 to bring up the developer tools, and try changing the way my site looks! ![Smile](/assets/wlEmoticonsmile1.png) All of these screen shots are from the [IE Dev Tools Intro post](http://petelepage.com/blog/2010/06/internet-explorer-developer-tools/) I made a few days ago.

## Using the HTML Tools

### Select An Element

<p>There are several ways that you can select an element and then use the different tools in the HTML Tab to edit those elements.

1.  ![DevTools-SelectByClick](/assets/DevToolsSelectByClick.png "DevTools-SelectByClick")**Select Element By Click** _(CTRL-B)_ – This is probably the easiest way to select an element and is pretty self explanatory. Clicking on this guy, then clicking on an element will select that element. Moving the mouse around the element you want to select will draw a blue line around the element, if you want to grab the parent element, move the mouse just outside of the element you’re trying to select. Alternatively, you can select the element, then use the DOM view to move up and down the DOM. 
2.  You can use the **“Search HTML”** box to find all element with particular attributes or elements of a particular type. 
3.  The **DOM Tree** view is another way that you can select particular elements. Usually I use a combination of Select Element By Click and the DOM tree. When the developer tools open, and the page is loaded, you’re shown a view of the DOM, but the tree view isn’t expanded, you can click on the “+” sign to expand out the tree view and see all of the contents of each node in the DOM. This is a really good way to get into and see how elements are related to each other and where they’re falling within the DOM. 

If you just want to see an outline of the elements on your page, and see how they’re all fitting together, under the _Outline_ menu bar item, you can select from _Table Cells, Tables, DIV Elements, Images, Any Elements, _or_ Positioned Objects_. 

### Changing Attributes and Elements

One of the powerful features of the IE developer tools is that they allow you to change properties and attributes of the elements live while looking at the page. Once you’ve selected the element, you can use any of the tools below to change the element in memory. Remember, this won’t serialize those changes back down to your source file – you’ll have to do that yourself, but it’s a great way to figure out what you do need to change. 

The developer tools do have the ability to save the changes you’ve made to your page, but they’re going to save out IE’s DOM version of your page, and not the beautiful code you wrote!

### Style Tool

[![DevTools-Style](/assets/DevToolsStyle_thumb.png "DevTools-Style")](/assets/DevToolsStyle.png)The Style tool shows how your CSS rules have been applied to the currently selected element. By default, the tress is fully expanded, so you can see where the values are coming from. For example, on the left, you’ll notice that in the _BODY _element, the color and font-size both are displayed with a line through them, those attributes are being overridden by another CSS rule further down in the cascade. You can use the check boxes to turn the attributes on and off as you’re looking at the page to see how particular rules and attributes are being applied to that specific element. Personally, I find this particular tool to be the least useful to me, and much prefer the next too, the Trace Style Tool.

### Trace Styles Tool

[![DevTools-Trace](/assets/DevToolsTrace_thumb.png "DevTools-Trace")](/assets/DevToolsTrace.png)Alright, like I said, this is the tool that I personally find most useful when I’m trying to figure out why my CSS isn’t rendering like I expect it to in the browser. The Trace Style tool shows you all of the style attributes that are being applied to this element. By expanding out the tree, you can see where the attributes are coming from, and how they cascade. In this particular case, in style.css, the body style rule has been defined twice for some reason, and because of the cascade, the body color of #4e4e4e is being overridden and set to black. If you click on the “style.css” link on the right side of the screen, you’re taken directly to the specific line in the code! 

The Trace Style tool gives you two other things I really like – the check boxes so you can turn the styles on and off in real time to see how the rule changes the element. The second one is that you can actually edit those CSS values inline and see how they appear. If you click on the “black” and type “yellow”, you’ll notice the page updates in real time!

### Layout Tool

[![DevTools-Layout](/assets/DevToolsLayout_thumb.png "DevTools-Layout")](/assets/DevToolsLayout.png)I know I’ve said this before, but for whatever reason, I just can’t seem to remember the difference between margin and padding – every time I think I remember it right, I’m wrong again. The single most helpful tool for me when I get into these types of problems is the Layout Tool. It draws a visual representation of elements and their box model – it shows the size of the element (that’s the light blue in the center in this case the 574x32), the padding, the border, the margin and the offset. All visually in a way that I can see and understand – without having to put “_border: 1px solid black;_” around my elements to debug them! ![Smile](/assets/wlEmoticonsmile1.png) 

Like the other tools, you can also edit the values in line. The inline editor is somewhat picky though, and you have to enter the value in just like you would if you were putting it in as an inline style, so you need to use the value, the units and a semi-colon. For example, if I click on the “32” above and want to change it to 75, I’d need to type “75px;”. 

### Attributes Tool

[![DevTools-Attributes](/assets/DevToolsAttributes_thumb.png "DevTools-Attributes")](/assets/DevToolsAttributes.png)Okay, so now we’ve seen all of the styles that are being applied to our page, all the styles that are being applied to the selected element, we’ve been able to visualize the box model for the selected element. But there are attributes on elements that aren’t style, and we need a tool to be able to view and edit those. That’s what the Attributes tool is for – it’s not just the style and CSS attributes, but all attributes that are on the selected element. In this particular case, the Node box indicates we’re looking at an h1 tag, and that h1 tag has only one attribute, which is the class attribute.

To add an attribute to the element, you can click on the plus sign ![DevTools-AttributesEditor](/assets/DevToolsAttributesEditor.png "DevTools-AttributesEditor"), it then moves the focus to the table, and provides you with a drop down list of all of the attributes that you can set for that element. You’ll likely notice some attributes like “_background (css)_” – those attributes will be set as inline style attributes for the selected element.

## HTML Editing with Internet Explorer Developer Tools

Well, that wraps up this post, hopefully you found it useful! I’ll be back soon with another post covering the CSS Editing tools, and another for JavaScript! 