---
layout: post
status: publish
published: true
title: Showing & Hiding Panels with HTML and CSS
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2657
wordpress_url: http://petelepage.com/blog/?p=2657
date: '2011-07-18 12:20:11 -0400'
date_gmt: '2011-07-18 19:20:11 -0400'
categories:
- Web Design &amp; Development
- HTML5
tags:
- Web Design
- HTML
- CSS
- CodeSample
- CSS3
- HTML5
comments:
- id: 4262
  author: Steve
  author_email: stephen.cunliffe@gmail.com
  author_url: http://Website
  date: '2011-07-19 06:38:23 -0400'
  date_gmt: '2011-07-19 13:38:23 -0400'
  content: |-
    Although I think there's much easier ways to pull this off with jQuery or any other framework - kudos for attempting this without them.

    I'd change the behavior though of the "mouseover/hover" effect... if you try to click the arrow to expand the panel, it nudges in a bit causing your click to miss the target (e.g. bad usability)

    On a personal note, although the rotating arrow is nifty I'd switch it to a solid triangular arrow as the open arrow looks like an HTML coding error (e.g. an extra closing bracket) vs. an intended UI element.
- id: 4264
  author: Pete
  author_email: pete.lepage@pobox.com
  author_url: http://petelepage.com
  date: '2011-07-19 08:52:00 -0400'
  date_gmt: '2011-07-19 15:52:00 -0400'
  content: |-
    <blockquote>
    <a href="#comment-4262" rel="nofollow">
    <strong><em>Steve:</em></strong>
    </a>
     <p>Although I think there’s much easier ways to pull this off with jQuery or any other framework – kudos for attempting this without them.</p></blockquote>

    Great point Steve! And you're absolutely right! I wanted to do this without libraries partly as an academic exercise, but also to show as we get more HTML5 features in our browsers, the need for libraries will decrease significantly.  <code>classList</code> is a great example of that.

    I made a few changes last night based on some feedback via Twitter, and upped the click target size - check out <a href="http://petelepage.com/scratch/slider-panel/index2.html" rel="nofollow">http://petelepage.com/scratch/slider-panel/index2.html</a>.  I love the solid triangle idea and will make that change to v2 as soon as I finish reply!
---
<p><a href="http://petelepage.com/blog/wp-content/uploads/2011/07/small.png"><img src="http://petelepage.com/blog/wp-content/uploads/2011/07/small.png" alt="" title="small" width="60" height="445" class="alignleft size-full wp-image-2668" /></a>I’ve always loved web apps that use little panels that animate in from the sides as a way to show and hide content, settings, or other components of a web page.  We used them a couple of times in <a href="http://bit.ly/TweeterFall">Tweeter Fall</a>, so I figured I’d share my way of doing them.  I wanted to try doing this without any libraries to start, using only HTML5, CSS3 and as little JavaScript as possible, which will work for most browsers, but not all.  Once we get it working with the latest stuff, I’ll go back and make the necessary modifications to get it to work across all browsers.</p>
<p>I’m using a slightly modified version of <a href="http://meyerweb.com/eric/tools/css/reset/">Eric Meyer’s CSS reset</a> to ensure that everything is ready to go, you can use that or other ones as you see fit.  </p>
<p><a href="http://petelepage.com/blog/wp-content/uploads/2011/07/large.png"><img src="http://petelepage.com/blog/wp-content/uploads/2011/07/large-227x300.png" alt="" title="large" width="227" height="300" class="alignright size-medium wp-image-2667" /></a></p>
<h3 style="clear:both;">Let's get started!</h3>
<p>First, let’s create the panel where everything will live</p>
<p>[xml]<br />
&lt;div class=&quot;left-panel&quot;&gt;<br />
&lt;/div&gt;<br />
[/xml]</p>
<p>and we need to apply a bit of CSS.  Typically when I start working on something like this, I’ll use super ugly colors to make sure that the stuff that I’m working on sticks out, so in this case, I’m going for a nice bright red.</p>
<p>[css]<br />
#left-panel {<br />
  width: 300px;<br />
  height: 400px;<br />
  border: 3px solid red;<br />
  background-color: #fcc;<br />
}<br />
[/css]</p>
<h3>Positioning The Panel</h3>
<p>Great, we’ve not got our panel, though it’s not in the right place, but at least it’s on screen.  Next, let’s move it to it’s default position, so that it’s minimized.  To do that, I’m going to set the position to fixed - I want it so that it’s always on screen.  Then, we need to move the left side of the panel into the negative space, and move the panel down the screen.</p>
<p>[css highlight="6-8"]<br />
#left-panel {<br />
  width: 300px;<br />
  height: 400px;<br />
  border: 5px solid red;<br />
  background-color: #fcc;<br />
  position: fixed;<br />
  top: 150px;<br />
  left: -275px;<br />
}<br />
[/css]</p>
<h3>Making the panel appear</h3>
<p>To get the panel to be fully visible, we’re going to add both a hover pseudo-class as well as a show class.  The pseudo-class will move it out just a bit, to add some realism and a clear indication that the panel has more to show.</p>
<p>[css]<br />
#left-panel:hover {<br />
  left: -250px;<br />
}</p>
<p>#left-panel.show {<br />
  left: 0px;<br />
}<br />
[/css]</p>
<h3>Adding controls to show &amp; hide the panel</h3>
<p>You could simply show the panel on any hover, but that always gets a little annoying to me, especially when I’m moving my mouse around quite a bit, so I’d rather not do that.  Now we need to add the logic that will show and hide the panel.  I’m going to use a hyperlink as the main item, and a little JavaScript to toggle the show class.  The &amp;gt; will come in handy a bit later. :)</p>
<p>[xml]<br />
&lt;div id=&quot;left-panel&quot;&gt;<br />
  &lt;a href=&quot;#&quot; onclick=&quot;showLeftPanel();&quot; class=&quot;controller&quot;&gt;&amp;gt;&lt;/a&gt;<br />
&lt;/div&gt;<br />
[/xml]</p>
<p>The CSS for the hyperlink is pretty simple, it absolutely positions the hyperlink in the upper right hand corner, and removes the underline from the text.  </p>
<p>[css]<br />
#left-panel .controller {<br />
  position: absolute;<br />
  right: 0px;<br />
  top: 0px;<br />
  text-decoration: none;<br />
}<br />
[/css]</p>
<h3>Hooking everything up</h3>
<p>Finally, we need the JavaScript to toggle the CSS class.  I’m using a new property off element called callList that gives me similar functionality to a lot of libraries for modifying classes on elements.  classList provides the ability to add, remove or toggle classes on elements.  </p>
<p>[javascript]<br />
&lt;script type=&quot;text/javascript&quot;&gt;<br />
  function showLeftPanel() {<br />
    var elem = document.getElementById(&quot;left-panel&quot;);<br />
    elem.classList.toggle(&quot;show&quot;);<br />
  }<br />
&lt;/script&gt;<br />
[/javascript]</p>
<p>Now, when we click on the &gt;, the panel becomes visible, and clicking on it again, makes it disappear, perfect!  The panel isn’t exactly beautiful yet, and it doesn’t take advantage of any of the cool CSS3 stuff yet, so let’s add a bit of that.  </p>
<h3>Adding a bit of style</h3>
<p>First, we’ll add some rounded corners to the top right, and bottom right, and a little bit of spacing inside the panel with a 5px padding along all the edges.  Next, I’ll add the transtion properties.  The first, <code>-wekit-transition</code> specifies that all properties that change (beyond what’s indicated in #left-panel), they’ll appear over 0.5 seconds, and will use the ease-in-out transition. In a bit, we’ll need to add the transitions for other browsers that support it - but we’re going to get it working in Chrome first.</p>
<p>[css highlight="9-11"]<br />
#left-panel {<br />
  width: 300px;<br />
  height: 400px;<br />
  border: 5px solid red;<br />
  background-color: #fcc;<br />
  position: fixed;<br />
  top: 150px;<br />
  left: -275px;<br />
  border-radius: 0 1em 1em 0;<br />
  padding: 5px;<br />
  -webkit-transition: all 0.5s ease-in-out;<br />
}<br />
[/css]</p>
<p>I also need to make a few other modifications to a couple of the other classes.  I’ve changed the left on #left-panel.show to -5px.  That hides the border on the left, and ensures the 5px padding on the left doesn’t look too odd.  I could have modified the border to only display on three sides, but it kind of felt like more work to me. ;)</p>
<p>[css]<br />
#left-panel.show {<br />
  left: -5px;<br />
}<br />
[/css]</p>
<h3>Add hinting to help the user</h3>
<p>The other thing that I want to do is make a few changes to the open/close hyperlink.  Because of the rounded corners, we need to move it in a bit, but I’m also going to add transitions to it as well.</p>
<p>[css highlight="6"]<br />
#left-panel a.controller {<br />
  position: absolute;<br />
  right: 5px;<br />
  top: 5px;<br />
  text-decoration: none;<br />
  -webkit-transition: all 0.5s ease-in-out;<br />
}<br />
[/css]</p>
<p>So why add the transitions? When the panel is closed, we’re using a &gt; which renders like an arrow pointing to the right, to indicate the panel can be closed, we want the arrow to point to the left, so I used a transform and rotated the character by 180 degrees, and suddenly my &gt; is a &lt;! </p>
<p>[css]<br />
#left-panel.show a.controller {<br />
  -webkit-transform: rotate(180deg);<br />
}<br />
[/css]</p>
<h3>Our first working version</h3>
<p>Alright, so here’s the final code that works in Chrome, with some nicer colors:</p>
<p>The HTML<br />
[xml]<br />
&lt;div id=&quot;left-panel&quot;&gt;<br />
  &lt;a href=&quot;#&quot; onclick=&quot;showLeftPanel();&quot; class=&quot;controller&quot;&gt;&amp;gt;&lt;/a&gt;<br />
&lt;/div&gt;<br />
[/xml]</p>
<p>The CSS<br />
[css]<br />
#left-panel {<br />
  width: 300px;<br />
  height: 400px;<br />
  border: 5px solid #555;<br />
  background-color: #ccc;<br />
  position: fixed;<br />
  top: 150px;<br />
  left: -275px;<br />
  border-radius: 0 1em 1em 0;<br />
  padding: 5px;<br />
  -webkit-transition: all 0.5s ease-in-out;<br />
}</p>
<p>#left-panel:hover {<br />
  left: -250px;<br />
}</p>
<p>#left-panel.show {<br />
  left: -5px;<br />
}</p>
<p>#left-panel a.controller {<br />
  position: absolute;<br />
  right: 5px;<br />
  top: 5px;<br />
  text-decoration: none;<br />
  -webkit-transition: all 0.5s ease-in-out;<br />
  color: black;<br />
  font-weight: bold;<br />
}</p>
<p>#left-panel.show a.controller {<br />
  -webkit-transform: rotate(180deg);<br />
}<br />
[/css]</p>
<p>And finally, the JavaScript<br />
[javascript]<br />
&lt;script type=&quot;text/javascript&quot;&gt;<br />
  function showLeftPanel() {<br />
    var elem = document.getElementById(&quot;left-panel&quot;);<br />
    elem.classList.toggle(&quot;show&quot;);<br />
  }<br />
&lt;/script&gt;<br />
[/javascript]</p>
<h3>But what about other browsers?</h3>
<p>To get this working in other browsers, we need to change our CSS a bit to add other vendor prefixed items, and we’ll need to make some changes to our JavaScript as well.  </p>
<h3>Safari</h3>
<p>Safari doesn’t support classList’s yet, so we need to modify our JavaScript here.  The absolute easiest way to make this change would be to use jQuery’s toggle function, but I want to do this without any libraries.  That means we’ll have to do some feature detection to see if elem.classList is supported, if it is, we’ll use that, otherwise we’ll manually add or remove the show class. </p>
<p>[javascript]<br />
&lt;script type=&quot;text/javascript&quot;&gt;<br />
  function showLeftPanel() {<br />
    var elem = document.getElementById(&quot;left-panel&quot;);<br />
    if (elem.classList) {<br />
      elem.classList.toggle(&quot;show&quot;);<br />
    } else {<br />
      var classes = elem.className;<br />
      if (classes.indexOf(&quot;show&quot;) &gt;= 0) {<br />
        elem.className = classes.replace(&quot;show&quot;, &quot;&quot;);<br />
      } else {<br />
        elem.className = classes + &quot; show&quot;;<br />
      }<br />
      console.log(elem.className);<br />
    }<br />
  }<br />
&lt;/script&gt;<br />
[/javascript]</p>
<p>That’s all we need for Safari to work!  </p>
<h3>Firefox and Opera</h3>
<p>Firefox 3.6+ and Opera 11.5+ both support classList, and previous versions will fall back to the manual method, so our JavaScript is good to go.  But, the -webkit- vendor prefixed stuff needs a little love and thankfully it’s pretty easy!  </p>
<p>In #left-panel and #left-panel a.controller add:<br />
[css]<br />
-moz-transition: all 0.5s ease-in-out;<br />
-o-transition: all 0.5s ease-in-out;<br />
[/css]</p>
<p>In #left-panel.show a.controller add:<br />
[css]<br />
-moz-transform: rotate(180deg);<br />
-o-transform: rotate(180deg);<br />
[/css]</p>
<h3>Internet Explorer</h3>
<p>Unfortunately, Internet Explorer (9 or the Platform Previews for 10), don’t have support for transtions yet, which mean that our panels just appear and disappear, but that’s not an awful experience, it’s just not ideal.  In fact, the experience for Internet Explorer 7, 8 and 9 is identical except IE9 does have rounded corners.  Just in case they add support for transitions in the future, I added the -ms- vendor prefix already. </p>
<h3>Summary</h3>
<p>There you go - you’ve not got a simple panel that can be displayed by the simple click of a link, and gets out of the way when not needed.  It works in IE7/8/9, Chrome, Firefox, Opera and Safari and I suspect it will work in IE6, though I didn’t test that.  </p>
<p>Give it a try at <a href="http://petelepage.com/scratch/slider-panel/">http://petelepage.com/scratch/slider-panel/</a></p>
