---
title: Measure & understand how installed PWA users differ from browser tab users
date: 2020-08-19
category: web development
tags:
  - pwa
  - localization
  - analytics
layout: layouts/post.njk
---

Are PWA users more engaged than browser-tab users? Do they convert more?
Spend more time on site? How can you tell the difference between users who
opened your PWA up via the launcher (standalone/installed users) vs users in
a browser tab? Great question! The easiest way to do it is by using a
dimension to track standalone vs browser.

<!--more-->

I'm working on a more complete version of this for <web.dev> with a lot more
detail, how to measure the effectiveness of your install promotions, how
to do it with other analytics providers, etc, but I wanted to get this out
now.

1. In Google Analytics, setup a custom dimension, I called mine `DISPLAY_MODE`
2. In your page, before you fire the `pageview` event, set the dimension using
the code below.

``` js
let displayMode = 'browser';
  const mqStandAlone = '(display-mode: standalone)';
  if (navigator.standalone || window.matchMedia(mqStandAlone).matches) {
    displayMode = 'standalone';
  }
ga('set', 'dimension1', displayMode);
```

Now, comparing `DISPLAY_MODE` in Google Analytics you can see how `standalone`
users differ from `browser` users. I've been testing this on
[Squoosh](https://squoosh.app) lately, and it's interesting to see the
differences. Users in standalone compress more images, come back to Squoosh
more often, and spend more time in Squoosh than those just in a browser tab.
