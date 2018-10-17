---
layout: post
title: 'Internet Explorer Develop Tools: CSS'
date: '2010-07-01 13:36:48 -0400'
categories: blog
tags:
- IE9
- IE8
- HTML
- CSS
- Debug
- Developer Tools
- Firebug
- ForMSDNIEDC
- IE
comments:
- id: 1751
  date: '2010-07-02 06:35:04 -0400'
  content: The best feature of the IE Developer Tools is the CSS 'Trace Styles' tab...
    If you ever wonder why a certain css rule that you write does not take effect,
    the tracing tells you exactly what rule (and in what stylesheet) was more specific
- id: 3836
  date: '2011-06-03 05:28:29 -0400'
  content: "Is there any feature in MSIE developers toolkit that allow one to REPLACE
    an entire stylesheet (oerride the existing one). It's all very well to be able
    to edit one element at a time... but I want to OVER-RIDE the style sheet (in its
    entireity) with a stylesheet of my own.\r\n\r\nThis can be done in FIREFOX (Firebug,
    and Chris Pedericks Toolkit)... but sadly, not in MSIE Dev Toolkit.\r\n\r\nIt
    would be useful, because MSIE does not behave well. A stylesheet that follows
    CSS protocol will work on Firefox, but will sometimes make dogs breakfast when
    applied t MSIE.\r\n\r\nWhat I would like is a feature in MSIE Dev Toolkit that
    allows a complete removal of the existing css sheet, and an ability to apply a
    completely different stylesheet."
---

In continuing [my series about the IE Dev Tools](http://petelepage.com/blog/tag/developer-tools/) that come build in to Internet Explorer – today I’ll take a look at the CSS Tab and how you can use it to add, edit, change, or remove CSS rules and dive deeper in to the CSS on your page, where styles are coming from and such.

# The CSS Tab

The CSS tab shows the all of the CSS files that your page includes via embedded, linked style sheets, or imported style sheets. Like all of the other tabs, it includes the standard menu bar, the ability to change rendering and browser mode, and the standard buttons _Select Element By Click_ ![DevTools-SelectByClick2](/assets/DevToolsSelectByClick2.png "DevTools-SelectByClick2"), _Clear Browser Cache_ ![DevTools-ClearCache](/assets/DevToolsClearCache.png "DevTools-ClearCache") and _Save_ buttons ![DevTools-Save](/assets/DevToolsSave.png "DevTools-Save"). Beside the standard buttons is a drop down list that allows you to choose which set of styles you want to look at. It includes all of the styles that Internet Explorer loads for that page, including iFrames.

[![csstab-2](/assets/csstab2_thumb.png "csstab-2")](/assets/csstab2.png)

If you have multiple embedded style blocks, each block will be listed separately within the drop down list. iFrame styles are denoted by the square brackets around the name of the [] stylesheet, for example _[iframeSource.htm] stylesheet.css._ As you change the drop down, the contents of the CSS display box will show all the rules, along with their individual attributes.

## Using the CSS Tools

Like the [HTML tab](http://petelepage.com/blog/2010/06/internet-explorer-developer-tools-html/), you can turn on and off rules, or the individual attributes as well as add, remove or edit all of their values and see the changes in real time. 

### Getting Started

1.  If you’re in Internet Explorer now, hit F12, if you aren’t switch over to IE8 and load a site that has a bunch of CSS and HTML on it then hit F12 (pretty much page). See if you can find a site that has at least one iFrame on it so you can see how iFrames look as well. 
2.  Switch over to the CSS tab to see all of the CSS files that are loaded on the page you’re viewing.      
[![csstab-3](/assets/csstab3_thumb.png "csstab-3")](/assets/csstab3.png)       
You’ll now see a list of all the rules that are defined within the selected style. 

### Turning Rules or Attributes On and Off

The easiest way to turn off style rules or individual attributes within those is to use the checkbox beside each node. Unchecking the rule turns off all of the attributes for that rule, or you can simply choose to turn off the specific attributes.

### Changing Existing Rules or Attributes

To change an existing rule, you can do the same thing as in the HTML tab, simply click on the item you want to edit and Internet Explorer will change that item into edit mode. You can change the rule names, attribute names and the attribute values. After you’ve made your change, hit enter and IE will apply the changes to your page.

[![DevTools-CSS-SingleClick](/assets/DevToolsCSSSingleClick_thumb.png "DevTools-CSS-SingleClick")](/assets/DevToolsCSSSingleClick.png)

### Adding or Removing Rules or Attributes

This is one of the cooler features of the CSS tab that I often forget about because surfacing it isn’t super obvious. If you right click on a rule or attribute, a content menu appears that allows you to add or delete attributes and rules. You can choose where you want them to fit within the cascade via the _Add Rule Before_ or _All Rule After_.

[![DevTools-CSS-RightClick](/assets/DevToolsCSSRightClick_thumb.png "DevTools-CSS-RightClick")](/assets/DevToolsCSSRightClick.png)

When adding an attribute, you do it pretty much exactly like you would type it in a style sheet or style block. When I click _Add Attribute_, the dev tools, creates a new node for me in the tree view, and I type the style I want to add, followed by a colon, then IE pops me over to a new text box where I can type the value for that style followed by a semi-colon. Once I hit enter, IE will update the page with my changes.

Adding a new rule is similar, in that you click _Add Rule After_ (or Before), and it creates a new node in the tree in the appropriate place. Then using the same _Add Attribute_ right click, you add the appropriate attributes to that node.

## CSS Editing with Internet Explorer Developer Tools

 There you go – hopefully this will make your editing and debugging of CSS a little easier! Stay tuned for posts on debugging and profiling your JavaScript code!   