---
layout: post
title: CSS Class Selectors and ID Selectors
date: '2006-06-07 16:20:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

## Classes vs IDs

Classes and IDs both allow you to define how a control will look on a page, though they have different uses, and shouldn't be used interchangeable. The first and biggest difference, is that with ID's, you can only have a single instance of an ID on a page.  For example, if you have a DIV on your page with the ID as "myDiv" you cannot have another control (of any type) with the same ID.  Thus, if you create a selector, you can only use it once.  With classes, you can use it as many times as you want.

IDs do have a few things over Classes though.  ID's generally take a higher precedence over Classes when trying to determine which control gets what style applied.  For example, <span id="spanID" class="bgBlue" style="color: white;">this span</span> has both a class selected, and an ID defined.  The class sets the background colour to blue, and the ID sets the background colour to green.  Since the ID is higher in the precedence list, it takes priority.

Be careful though, as browsers generally treat class names as case sensitive, thus you may find yourself wondering why a style isn't being applied.  It's either the browser being funky or a problem with cases!

## Using Multiple Classes

One of the cool things that you can do with CSS classes that you can't do with ID selectors is inherit and build upon other classes, or use space separated lists in the class definitions of controls to apply multiple styles on a single control.  IE6 does have some weirdness in this area, though IE7 and FireFox do behave correctly.

I've created 4 style classes below, _.blue_, _.bgYellow_, _.bold_ and _.combo.blue.bgYellow_.  Each one is pretty simple, and does exactly what it's name implies.  Where things start to get interesting is when you use more than one class in a given control.  For example, the second scenario, where _class="blue bgYellow"_.  It combines the properties blue class and the properties of the _.bgYellow_ class, into a composite class, resulting in blue text with a yellow background.  (IE6 has a bug here and includes the _.combo.blue.bgYellow_ properties here), One of the cool things that you can do with CSS is inherit and build upon other classes, or use space separated lists in the class definitions of controls to apply multiple styles on a single control.  IE7 and FireFox does display this properly, though as mentioned above, IE6 needs a swift kick in the pants.

&lt;style type="text/css"&gt;

a[href="http://www.microsoft.com"] { background-color: Red; color: White; }

#spanID { background-color: Green; } .blue { color: Blue; }

.bgYellow { background-color: Yellow; }

.bgBlue { background-color: Blue; }

.combo.blue.bgYellow { font-weight: bold; }

&lt;/style&gt;

<span class="blue">&lt;span class="blue"&gt;this is just a single, unexciting class, nothing special here&lt;/span&gt;</span>

<span class="blue bgYellow">&lt;span class="blue bgYellow"&gt;composite of both .blue and .bgYellow styles&lt;/span&gt;</span>

<span class="combo blue bgYellow">&lt;span class="combo blue yellow"&gt;composite of .blue, .bgYellow and adds bold to the mix&lt;/span&gt;</span>

## Attribute Selection

This is one of my favourite things about CSS, and unfortunately, it's not supported by IE6 so if you're looking with IE6, you won't see the cool factor of this.  I've got two links here, [Live.com](http://live.com/) and [Microsoft.com](http://www.microsoft.com/). If you're looking at this in something other than IE6, Live.com looks like a normal link, but the Microsoft link is white text with a red background.  CSS lets you specify styles based on attribute values.  In my style block, I've got a[href="http://www.microsoft.com"] { background-color: Red; color: White; }  So any a tags, that have the attribute href="http://www.microsoft.com"] get that style applied to them.  You can also apply based on partial values by doing using a[title~="yay!"].![](http://blogs.msdn.com/aggbug.aspx?PostID=621115)