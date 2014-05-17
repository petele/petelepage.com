---
layout: post
status: publish
published: true
title: 'Internet Explorer Develop Tools: CSS'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2377
wordpress_url: http://petelepage.com/blog/2010/07/internet-explorer-develop-tools-css/
date: '2010-07-01 13:36:48 -0400'
date_gmt: '2010-07-01 20:36:48 -0400'
categories:
- Web Design &amp; Development
- Internet Explorer
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
  author: Dejan
  author_email: drugarce@mt.net.mk
  author_url: http://Website
  date: '2010-07-02 06:35:04 -0400'
  date_gmt: '2010-07-02 13:35:04 -0400'
  content: The best feature of the IE Developer Tools is the CSS 'Trace Styles' tab...
    If you ever wonder why a certain css rule that you write does not take effect,
    the tracing tells you exactly what rule (and in what stylesheet) was more specific
- id: 3836
  author: Grahame
  author_email: grahame@modshops.co.uk
  author_url: http://britefactory.co.uk
  date: '2011-06-03 05:28:29 -0400'
  date_gmt: '2011-06-03 12:28:29 -0400'
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
<p>In continuing <a href="http://petelepage.com/blog/tag/developer-tools/" target="_blank">my series about the IE Dev Tools</a> that come build in to Internet Explorer – today I’ll take a look at the CSS Tab and how you can use it to add, edit, change, or remove CSS rules and dive deeper in to the CSS on your page, where styles are coming from and such.</p>
<h1>The CSS Tab</h1>
<p>The CSS tab shows the all of the CSS files that your page includes via embedded, linked style sheets, or imported style sheets.&#160; Like all of the other tabs, it includes the standard menu bar, the ability to change rendering and browser mode, and the standard buttons <em>Select Element By Click</em> <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" class="wlDisabledImage" title="DevTools-SelectByClick2" border="0" alt="DevTools-SelectByClick2" src="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsSelectByClick2.png" width="24" height="25" />, <em>Clear Browser Cache</em> <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-ClearCache" border="0" alt="DevTools-ClearCache" src="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsClearCache.png" width="28" height="24" /> and <em>Save</em> buttons <img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="DevTools-Save" border="0" alt="DevTools-Save" src="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsSave.png" width="29" height="25" />.&#160; Beside the standard buttons is a drop down list that allows you to choose which set of styles you want to look at.&#160; It includes all of the styles that Internet Explorer loads for that page, including iFrames.</p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/csstab2.png"><img style="border-right-width: 0px; display: block; float: none; border-top-width: 0px; border-bottom-width: 0px; margin-left: auto; border-left-width: 0px; margin-right: auto" class="wlDisabledImage" title="csstab-2" border="0" alt="csstab-2" src="http://petelepage.com/blog/wp-content/uploads/2010/07/csstab2_thumb.png" width="504" height="180" /></a></p>
<p>If you have multiple embedded style blocks, each block will be listed separately within the drop down list.&#160; iFrame styles are denoted by the square brackets around the name of the [] stylesheet, for example <em>[iframeSource.htm] stylesheet.css.</em>&#160; As you change the drop down, the contents of the CSS display box will show all the rules, along with their individual attributes.</p>
<h2>Using the CSS Tools</h2>
<p>Like the <a href="http://petelepage.com/blog/2010/06/internet-explorer-developer-tools-html/" target="_blank">HTML tab</a>, you can turn on and off rules, or the individual attributes as well as add, remove or edit all of their values and see the changes in real time.&#160; </p>
<h3>Getting Started</h3>
<ol>
<li>If you’re in Internet Explorer now, hit F12, if you aren’t switch over to IE8 and load a site that has a bunch of CSS and HTML on it then hit F12 (pretty much page).&#160; See if you can find a site that has at least one iFrame on it so you can see how iFrames look as well. </li>
<li>Switch over to the CSS tab to see all of the CSS files that are loaded on the page you’re viewing.      <br /><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/csstab3.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" class="wlDisabledImage" title="csstab-3" border="0" alt="csstab-3" src="http://petelepage.com/blog/wp-content/uploads/2010/07/csstab3_thumb.png" width="155" height="119" /></a>       <br />You’ll now see a list of all the rules that are defined within the selected style. </li>
</ol>
<h3>Turning Rules or Attributes On and Off</h3>
<p>The easiest way to turn off style rules or individual attributes within those is to use the checkbox beside each node.&#160; Unchecking the rule turns off all of the attributes for that rule, or you can simply choose to turn off the specific attributes.</p>
<h3>Changing Existing Rules or Attributes</h3>
<p>To change an existing rule, you can do the same thing as in the HTML tab, simply click on the item you want to edit and Internet Explorer will change that item into edit mode.&#160; You can change the rule names, attribute names and the attribute values.&#160; After you’ve made your change, hit enter and IE will apply the changes to your page.</p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsCSSSingleClick.png"><img style="border-right-width: 0px; display: block; float: none; border-top-width: 0px; border-bottom-width: 0px; margin-left: auto; border-left-width: 0px; margin-right: auto" class="wlDisabledImage" title="DevTools-CSS-SingleClick" border="0" alt="DevTools-CSS-SingleClick" src="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsCSSSingleClick_thumb.png" width="404" height="102" /></a></p>
<h3>Adding or Removing Rules or Attributes</h3>
<p>This is one of the cooler features of the CSS tab that I often forget about because surfacing it isn’t super obvious.&#160; If you right click on a rule or attribute, a content menu appears that allows you to add or delete attributes and rules.&#160; You can choose where you want them to fit within the cascade via the <em>Add Rule Before</em> or <em>All Rule After</em>.</p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsCSSRightClick.png"><img style="border-right-width: 0px; display: block; float: none; border-top-width: 0px; border-bottom-width: 0px; margin-left: auto; border-left-width: 0px; margin-right: auto" class="wlDisabledImage" title="DevTools-CSS-RightClick" border="0" alt="DevTools-CSS-RightClick" src="http://petelepage.com/blog/wp-content/uploads/2010/07/DevToolsCSSRightClick_thumb.png" width="204" height="194" /></a></p>
<p>When adding an attribute, you do it pretty much exactly like you would type it in a style sheet or style block.&#160; When I click <em>Add Attribute</em>, the dev tools, creates a new node for me in the tree view, and I type the style I want to add, followed by a colon, then IE pops me over to a new text box where I can type the value for that style followed by a semi-colon. Once I hit enter, IE will update the page with my changes.</p>
<p>Adding a new rule is similar, in that you click <em>Add Rule After</em> (or Before), and it creates a new node in the tree in the appropriate place.&#160; Then using the same <em>Add Attribute</em> right click, you add the appropriate attributes to that node.</p>
<h2>CSS Editing with Internet Explorer Developer Tools</h2>
<p> There you go – hopefully this will make your editing and debugging of CSS a little easier!&#160; Stay tuned for posts on debugging and profiling your JavaScript code!   </p>
