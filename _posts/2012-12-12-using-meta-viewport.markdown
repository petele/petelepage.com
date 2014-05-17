---
layout: post
status: publish
published: true
title: Using meta viewport
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2794
wordpress_url: http://petelepage.com/blog/?p=2794
date: '2012-12-12 15:42:17 -0500'
date_gmt: '2012-12-12 23:42:17 -0500'
categories:
- Web Design &amp; Development
- HTML5
- WebApps
tags:
- Web Design
- CodeSample
- HTML5
- HowTo
- TipsAndTricks
- Multiple Browsers
- BestPractices
- Web App
- mobile
- viewport
- chrome
comments:
- id: 4857
  author: Jon Briccetti
  author_email: jbriccetti@gmail.com
  author_url: http://www.triyweb.com
  date: '2012-12-15 22:59:36 -0500'
  date_gmt: '2012-12-16 06:59:36 -0500'
  content: "This is a great explanation, thank you. Ironically, I'm reading on my
    iPhone and I can't read your code blocks - they go off the screen to the right
    and I cannot scroll right to read :-( I know you are using the wptouch plugin
    for Wordpress which is NOT responsive CSS - its using server- side browser sniffing.
    Yuck. \nGreat post though, thanks for the info!!"
- id: 4862
  author: Patrick H. Lauke
  author_email: patrickl@opera.con
  author_url: http://dev.opera.com
  date: '2012-12-27 14:35:47 -0500'
  date_gmt: '2012-12-27 22:35:47 -0500'
  content: Great overview. Worth pointing out, though, that setting viewport height
    works weirdly differently from setting the width (at least in my testing). It's
    even very thinly described in the Apple documentation and the CSS device adaptation
    one too...
---
<h1>Using meta viewport to optimize rendering on mobile devices</h1>
<h2>What is the viewport?</h2>
<p>[caption id="attachment_2807" align="alignleft" width="224"]<a href="http://petelepage.com/blog/wp-content/uploads/2012/12/img1.png"><img class=" wp-image-2807 " alt="Figure 1 - If mobile browsers didn't apply a default viewport, web pages would overfill the screen." src="http://petelepage.com/blog/wp-content/uploads/2012/12/img1.png" width="224" height="336" /></a> Figure 1 - If mobile browsers didn't apply a default viewport, web pages would overfill the screen.[/caption]</p>
<p>Imagine if every web page you opened on your phone or tablet got the same version as your desktop, and was displayed on the small screen of your device. On a phone, that might mean you would see only the top leftmost corner, a tiny 320px by 480px view, and you’d have to scroll around the page to be able to see everything. (See figure 1). Unlike a desktop or laptop, there is no way to resize the browser window to fit the content that you want to see. Thankfully, on mobile devices, almost every modern browser scales and renders the page so that you can more easily see and interact with it, panning and zooming into the areas you’re most interested in.</p>
<p>[caption id="attachment_2808" align="alignright" width="168"]<a href="http://petelepage.com/blog/wp-content/uploads/2012/12/Fig2-InFocus.png"><img class="size-medium wp-image-2808 " title="Figure 2" alt="Figure 2" src="http://petelepage.com/blog/wp-content/uploads/2012/12/Fig2-InFocus-168x300.png" width="168" height="300" /></a> Figure 2[/caption]</p>
<p>Most mobile browsers define a default viewport width of 980px CSS pixels, meaning that they lay out the page on a 980px wide area, then scale it down to fit within the width of the screen. (If you’re unfamiliar with CSS pixels, device pixels, device pixels ratios, or the like, check out the Smashing Magazine article <a href="http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/">Towards a Retina Web</a>. This works great for most desktop sites that don’t take into account mobile devices and were designed for big screens. Sites that were designed to be compatible with narrow screens however are likely to be unnecessarily stretched and scaled. For example, see figure 2 - there is no viewport set, and the image is 1600px wide, that means users need to scroll left to right to see all of the content.</p>
<p>The meta viewport tag allows you to override the browser default value, allowing you to adjust the display and zoom level to best suit your web page.</p>
<h2>Using meta viewport</h2>
<h3>Setting a specific viewport width</h3>
<p>To override the default viewport defined by the browser you simply need to add a viewport meta tag in the <code>&lt;head&gt;</code> section of your page:</p>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=320&quot; /&gt;<br />
[/html]</p>
<p>[caption id="attachment_2809" align="alignright" width="168"]<a href="http://petelepage.com/blog/wp-content/uploads/2012/12/vp-320.png"><img class="size-medium wp-image-2809  " alt="A page with a fixed viewport width." src="http://petelepage.com/blog/wp-content/uploads/2012/12/vp-320-168x300.png" width="168" height="300" /></a> Figure 3- A page with a fixed viewport width.[/caption]</p>
<p>Setting the viewport width to 320px, is similar to resizing your laptop browser window to be 320px wide, now the browser will render the page on a canvas that’s 320px wide. If your device is 320px, then you’re all set, the browser doesn’t have to do any scaling and you’re pretty much all set. Obviously not all devices are 320px wide, and your site most likely isn’t 320px wide.</p>
<p>But what happens if you rotate the phone from portrait to landscape, and suddenly the device is now actually 480px wide? If this happens, the browser scales the content up by 50%, so that the 320px width, so that the 320px wide document is stretched to fit in the 480px wide browser window. Unfortunately, when this scaling is applied, less content will be displayed above the fold, and the content may look oversized.</p>
<p>If you’ve designed a site for a fixed width desktop, for example, you know your page is 600px wide, then you can simply add <code>&lt;meta name="viewport" content="width=600" /&gt;</code> to the <code>&lt;head&gt;</code> of your document, which will scale the content to fit within the window. Depending on the density of your content, this may work well, but you’ll want to test it to make sure.</p>
<p>Adding a specific width viewport, is discouraged unless you’re adding it to a legacy site as a stop-gap measure until you can build a more responsive site.</p>
<h3>Setting the viewport width to the device-width</h3>
<p>[caption id="attachment_2810" align="alignright" width="168"]<a href="http://petelepage.com/blog/wp-content/uploads/2012/12/vp-dw.png"><img class="size-medium wp-image-2810 " alt="A page with width=device-width viewport." src="http://petelepage.com/blog/wp-content/uploads/2012/12/vp-dw-168x300.png" width="168" height="300" /></a> Figure 4 - A page with width=device-width viewport.[/caption]</p>
<p>Consider the sustainability of a fixed width website and how it would look given the huge variety of mobile web devices, each with a different screen size, it becomes even more of a challenge when those devices are used in landscape mode. For that reason, building your site using a responsive approach and placing it within the viewport without any zooming will help to make your site look great across all of those devices. It doesn’t need to be responsive from phone all the way to desktop, but it should at least flex from a small portrait phone, to a mid-sized mobile tablet in landscape; about 320px to 640px.</p>
<p>When you design your page or web app using a responsive approach, you don’t want the browser to render your responsive content in a viewport that is 980px wide and then scaled down to the tiny screen; instead you want the content to render in the actual viewport size. To do that, you can tell the browser to set the viewport to be the width of the actual device by applying the following meta viewport tag:</p>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;<br />
[/html]</p>
<p>This means the viewport will be proportional to the width of the device's screen, for example on any portrait iPhone (whether or not it is retina) the width would be 320 <a href="http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/" target="_blank">CSS pixels</a>, on a landscape iPhone 3 or iPhone 4 it would be 480 CSS pixels, on a portrait Nexus 4 it would be 384 CSS pixels, and on a landscape Nexus 4 it would be 640 CSS pixels</p>
<h3>Setting the viewport scale</h3>
<p>When you specify a specific value for the viewport width, the browser will automatically determine the appropriate scale factor needed. For example, if you set the <code>width=640</code> on a device that has a screen width of 320px, the browser will scale the content by 0.5.</p>
<p>In some cases, you may want to specify the scale used by the browser. You can do this by setting <code>initial-scale</code>, <code>minimum-scale</code> and <code>maximum-scale</code>.</p>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;<br />
[/html]</p>
<p>Initial scale forces the browser to an initial scale, but still allows the user to pinch-zoom on the content to be able to make things larger or smaller. By using <code>minimum-scale</code> or <code>maximum-scale</code>, you can set a boundary on the amount of scaling the user can do.</p>
<p>You can also prevent zooming by adding <code>user-scalable=no</code>, or setting the <code>minimum-scale</code> and <code>maximum-scale</code> to the same values. This is particularly useful for mobile web applications where it doesn’t make sense to allow the user to zoom or scale content.</p>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1,<br />
  maximum-scale=1, minimum-scale=1&quot; /&gt;<br />
[/html]</p>
<p>Currently the user-scalable property does not work in Chrome for Android (m18).</p>
<h3>Setting the viewport height</h3>
<p>In addition to setting the viewport width, you can also set the viewport height. While it’s not something that’s used often, it’s good for mobile web applications that may pan horizontally only.</p>
<p>[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;height=device-height&quot; /&gt;<br />
[/html]</p>
<h2>Practices that are no longer recommended</h2>
<ul>
<li>Adding a specific width viewport, is discouraged unless you’re adding it to a legacy site as a stop-gap measure until you can build a more responsive site (you’ll need to replace the 320 with the width of your site):<code>&lt;meta name="viewport" content="width=320" /&gt;</code></li>
<li>The viewport property <code>target-densitydpi</code> has been removed from the <a href="http://dev.w3.org/csswg/css-device-adapt/">CSS Device Adaptation</a> specification and should not be used. It has been deprecated in Chrome for Android, and has never been supported in Mobile Safari or Firefox for Android. For more information, see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=737090">Mozilla Bug 797090</a> or <a href="https://bugs.webkit.org/show_bug.cgi?id=88047">WebKit bug 88047</a>.</li>
</ul>
<h2>Best practice for using meta viewport</h2>
<ul>
<li>Use a <strong>comma</strong> to delimit different viewport properties. Although semi-colons may work, they do not behave consistently across browsers.</li>
<li>For a responsive website, designed with mobile in mind and where the user may want to be able to zoom in to particular areas of content:<br />
[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,<br />
  initial-scale=1&quot; /&gt;<br />
[/html]</li>
<li>For a mobile web application where you don’t want to allow zooming of the content:<br />
[html]<br />
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,<br />
  minimum-scale=1, maximum-scale=1&quot; /&gt;<br />
[/html]</li>
</ul>
<h2>The Future</h2>
<p>Currently, the only consistent way to specify the viewport for a page is via the meta viewport tag, but the W3C is currently working on a <a href="http://dev.w3.org/csswg/css-device-adapt/">CSS Device Adaptation</a>, that will provide a way to specify the size, zoom factor and orientation of the viewport in CSS using the <code>@viewport</code> rule. As of late 2012, only Opera Mobile 11+ and Internet Explorer 10 provide support for it using a vendor prefix.</p>
<h2>Additional Resources</h2>
<ul>
<li><a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/</a></li>
<li><a href="http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html">http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag">https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag</a></li>
<li><a href="http://www.quirksmode.org/mobile/viewports.html">http://www.quirksmode.org/mobile/viewports.html</a></li>
</ul>
