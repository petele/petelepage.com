---
layout: post
status: publish
published: true
title: CSS Class Selectors and ID Selectors
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1670
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:621115
date: '2006-06-07 16:20:00 -0400'
date_gmt: '2006-06-07 23:20:00 -0400'
categories:
- Web Design &amp; Development
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<h2>Classes vs IDs</h2>
<p>Classes and IDs both allow you to define how a control will look on a page, though they have different uses, and shouldn't be used interchangeable. The first and biggest difference, is that with ID's, you can only have a single instance of an ID on a page.  For example, if you have a DIV on your page with the ID as "myDiv" you cannot have another control (of any type) with the same ID.  Thus, if you create a selector, you can only use it once.  With classes, you can use it as many times as you want.</p>
<p>IDs do have a few things over Classes though.  ID's generally take a higher precedence over Classes when trying to determine which control gets what style applied.  For example, <span id="spanID" class="bgBlue" style="color: white;">this span</span> has both a class selected, and an ID defined.  The class sets the background colour to blue, and the ID sets the background colour to green.  Since the ID is higher in the precedence list, it takes priority.</p>
<p>Be careful though, as browsers generally treat class names as case sensitive, thus you may find yourself wondering why a style isn't being applied.  It's either the browser being funky or a problem with cases!</p>
<h2>Using Multiple Classes</h2>
<p>One of the cool things that you can do with CSS classes that you can't do with ID selectors is inherit and build upon other classes, or use space separated lists in the class definitions of controls to apply multiple styles on a single control.  IE6 does have some weirdness in this area, though IE7 and FireFox do behave correctly.</p>
<p>I've created 4 style classes below, <em>.blue</em>, <em>.bgYellow</em>, <em>.bold</em> and <em>.combo.blue.bgYellow</em>.  Each one is pretty simple, and does exactly what it's name implies.  Where things start to get interesting is when you use more than one class in a given control.  For example, the second scenario, where <em>class="blue bgYellow"</em>.  It combines the properties blue class and the properties of the <em>.bgYellow</em> class, into a composite class, resulting in blue text with a yellow background.  (IE6 has a bug here and includes the <em>.combo.blue.bgYellow</em> properties here), One of the cool things that you can do with CSS is inherit and build upon other classes, or use space separated lists in the class definitions of controls to apply multiple styles on a single control.  IE7 and FireFox does display this properly, though as mentioned above, IE6 needs a swift kick in the pants.</p>
<p>&lt;style type="text/css"&gt;<br />
a[href="http://www.microsoft.com"] { background-color: Red; color: White; }<br />
#spanID { background-color: Green; } .blue { color: Blue; }<br />
.bgYellow { background-color: Yellow; }<br />
.bgBlue { background-color: Blue; }<br />
.combo.blue.bgYellow { font-weight: bold; }<br />
&lt;/style&gt;</p>
<p><span class="blue">&lt;span class="blue"&gt;this is just a single, unexciting class, nothing special here&lt;/span&gt;</span><br />
<span class="blue bgYellow">&lt;span class="blue bgYellow"&gt;composite of both .blue and .bgYellow styles&lt;/span&gt;</span><br />
<span class="combo blue bgYellow">&lt;span class="combo blue yellow"&gt;composite of .blue, .bgYellow and adds bold to the mix&lt;/span&gt;</span></p>
<h2>Attribute Selection</h2>
<p>This is one of my favourite things about CSS, and unfortunately, it's not supported by IE6 so if you're looking with IE6, you won't see the cool factor of this.  I've got two links here, <a href="http://live.com/">Live.com</a> and <a href="http://www.microsoft.com/">Microsoft.com</a>. If you're looking at this in something other than IE6, Live.com looks like a normal link, but the Microsoft link is white text with a red background.  CSS lets you specify styles based on attribute values.  In my style block, I've got a[href="http://www.microsoft.com"] { background-color: Red; color: White; }  So any a tags, that have the attribute href="http://www.microsoft.com"] get that style applied to them.  You can also apply based on partial values by doing using a[title~="yay!"].<img src="http://blogs.msdn.com/aggbug.aspx?PostID=621115" alt="" width="1" height="1" /></p>
