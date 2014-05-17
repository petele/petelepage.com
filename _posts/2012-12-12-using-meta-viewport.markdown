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
categories: blog
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
# Using meta viewport to optimize rendering on mobile devices

## What is the viewport?

[caption id="attachment_2807" align="alignleft" width="224"][![Figure 1 - If mobile browsers didn](http://petelepage.com/blog/wp-content/uploads/2012/12/img1.png)](http://petelepage.com/blog/wp-content/uploads/2012/12/img1.png) Figure 1 - If mobile browsers didn't apply a default viewport, web pages would overfill the screen.[/caption]

Imagine if every web page you opened on your phone or tablet got the same version as your desktop, and was displayed on the small screen of your device. On a phone, that might mean you would see only the top leftmost corner, a tiny 320px by 480px view, and you’d have to scroll around the page to be able to see everything. (See figure 1). Unlike a desktop or laptop, there is no way to resize the browser window to fit the content that you want to see. Thankfully, on mobile devices, almost every modern browser scales and renders the page so that you can more easily see and interact with it, panning and zooming into the areas you’re most interested in.

[caption id="attachment_2808" align="alignright" width="168"][![Figure 2](http://petelepage.com/blog/wp-content/uploads/2012/12/Fig2-InFocus-168x300.png "Figure 2")](http://petelepage.com/blog/wp-content/uploads/2012/12/Fig2-InFocus.png) Figure 2[/caption]

Most mobile browsers define a default viewport width of 980px CSS pixels, meaning that they lay out the page on a 980px wide area, then scale it down to fit within the width of the screen. (If you’re unfamiliar with CSS pixels, device pixels, device pixels ratios, or the like, check out the Smashing Magazine article [Towards a Retina Web](http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/). This works great for most desktop sites that don’t take into account mobile devices and were designed for big screens. Sites that were designed to be compatible with narrow screens however are likely to be unnecessarily stretched and scaled. For example, see figure 2 - there is no viewport set, and the image is 1600px wide, that means users need to scroll left to right to see all of the content.

The meta viewport tag allows you to override the browser default value, allowing you to adjust the display and zoom level to best suit your web page.

## Using meta viewport

### Setting a specific viewport width

To override the default viewport defined by the browser you simply need to add a viewport meta tag in the `&lt;head&gt;` section of your page:

{% highlight html %}
<meta name="viewport" content="width=320" />
{% endhighlight %}

[caption id="attachment_2809" align="alignright" width="168"][![A page with a fixed viewport width.](http://petelepage.com/blog/wp-content/uploads/2012/12/vp-320-168x300.png)](http://petelepage.com/blog/wp-content/uploads/2012/12/vp-320.png) Figure 3- A page with a fixed viewport width.[/caption]

Setting the viewport width to 320px, is similar to resizing your laptop browser window to be 320px wide, now the browser will render the page on a canvas that’s 320px wide. If your device is 320px, then you’re all set, the browser doesn’t have to do any scaling and you’re pretty much all set. Obviously not all devices are 320px wide, and your site most likely isn’t 320px wide.

But what happens if you rotate the phone from portrait to landscape, and suddenly the device is now actually 480px wide? If this happens, the browser scales the content up by 50%, so that the 320px width, so that the 320px wide document is stretched to fit in the 480px wide browser window. Unfortunately, when this scaling is applied, less content will be displayed above the fold, and the content may look oversized.

If you’ve designed a site for a fixed width desktop, for example, you know your page is 600px wide, then you can simply add `&lt;meta name="viewport" content="width=600" /&gt;` to the `&lt;head&gt;` of your document, which will scale the content to fit within the window. Depending on the density of your content, this may work well, but you’ll want to test it to make sure.

Adding a specific width viewport, is discouraged unless you’re adding it to a legacy site as a stop-gap measure until you can build a more responsive site.

### Setting the viewport width to the device-width

[caption id="attachment_2810" align="alignright" width="168"][![A page with width=device-width viewport.](http://petelepage.com/blog/wp-content/uploads/2012/12/vp-dw-168x300.png)](http://petelepage.com/blog/wp-content/uploads/2012/12/vp-dw.png) Figure 4 - A page with width=device-width viewport.[/caption]

Consider the sustainability of a fixed width website and how it would look given the huge variety of mobile web devices, each with a different screen size, it becomes even more of a challenge when those devices are used in landscape mode. For that reason, building your site using a responsive approach and placing it within the viewport without any zooming will help to make your site look great across all of those devices. It doesn’t need to be responsive from phone all the way to desktop, but it should at least flex from a small portrait phone, to a mid-sized mobile tablet in landscape; about 320px to 640px.

When you design your page or web app using a responsive approach, you don’t want the browser to render your responsive content in a viewport that is 980px wide and then scaled down to the tiny screen; instead you want the content to render in the actual viewport size. To do that, you can tell the browser to set the viewport to be the width of the actual device by applying the following meta viewport tag:

{% highlight html %}
<meta name="viewport" content="width=device-width" />
{% endhighlight %}

This means the viewport will be proportional to the width of the device's screen, for example on any portrait iPhone (whether or not it is retina) the width would be 320 [CSS pixels](http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/), on a landscape iPhone 3 or iPhone 4 it would be 480 CSS pixels, on a portrait Nexus 4 it would be 384 CSS pixels, and on a landscape Nexus 4 it would be 640 CSS pixels

### Setting the viewport scale

When you specify a specific value for the viewport width, the browser will automatically determine the appropriate scale factor needed. For example, if you set the `width=640` on a device that has a screen width of 320px, the browser will scale the content by 0.5.

In some cases, you may want to specify the scale used by the browser. You can do this by setting `initial-scale`, `minimum-scale` and `maximum-scale`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1">
{% endhighlight %}

Initial scale forces the browser to an initial scale, but still allows the user to pinch-zoom on the content to be able to make things larger or smaller. By using `minimum-scale` or `maximum-scale`, you can set a boundary on the amount of scaling the user can do.

You can also prevent zooming by adding `user-scalable=no`, or setting the `minimum-scale` and `maximum-scale` to the same values. This is particularly useful for mobile web applications where it doesn’t make sense to allow the user to zoom or scale content.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
{% endhighlight %}

Currently the user-scalable property does not work in Chrome for Android (m18).

### Setting the viewport height

In addition to setting the viewport width, you can also set the viewport height. While it’s not something that’s used often, it’s good for mobile web applications that may pan horizontally only.

{% highlight html %}
<meta name="viewport" content="height=device-height">
{% endhighlight %}

## Practices that are no longer recommended

*   Adding a specific width viewport, is discouraged unless you’re adding it to a legacy site as a stop-gap measure until you can build a more responsive site (you’ll need to replace the 320 with the width of your site):`&lt;meta name="viewport" content="width=320" /&gt;`
*   The viewport property `target-densitydpi` has been removed from the [CSS Device Adaptation](http://dev.w3.org/csswg/css-device-adapt/) specification and should not be used. It has been deprecated in Chrome for Android, and has never been supported in Mobile Safari or Firefox for Android. For more information, see [Mozilla Bug 797090](https://bugzilla.mozilla.org/show_bug.cgi?id=737090) or [WebKit bug 88047](https://bugs.webkit.org/show_bug.cgi?id=88047).

## Best practice for using meta viewport

*   Use a **comma** to delimit different viewport properties. Although semi-colons may work, they do not behave consistently across browsers.
*   For a responsive website, designed with mobile in mind and where the user may want to be able to zoom in to particular areas of content:
    {% highlight html %}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {% endhighlight %}
*   For a mobile web application where you don’t want to allow zooming of the content:
    {% highlight html %}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
    {% endhighlight %}

## The Future

Currently, the only consistent way to specify the viewport for a page is via the meta viewport tag, but the W3C is currently working on a [CSS Device Adaptation](http://dev.w3.org/csswg/css-device-adapt/), that will provide a way to specify the size, zoom factor and orientation of the viewport in CSS using the `@viewport` rule. As of late 2012, only Opera Mobile 11+ and Internet Explorer 10 provide support for it using a vendor prefix.

## Additional Resources

*   [http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/](http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/)
*   [http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html](http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html)
*   [https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag)
*   [http://www.quirksmode.org/mobile/viewports.html](http://www.quirksmode.org/mobile/viewports.html)
