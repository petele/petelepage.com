---
title: Is my PWA installed?
date: 2019-07-18
category: web development
tags:
  - pwa
  - out of date
layout: layouts/post.njk
---

{% Aside %}
  <b>Update:</b> This post is out of date.
  See <a href="https://web.dev/customize-install/#detect-launch-type">Detect how the PWA was launched</a>
  on web.dev for details on how to check if your PWA is installed, how it was
  launched and if the user switches between <code>standalone</code> and a
  <code>browser tab</code> view.
{% endAside %}

I got a question via email this morning asking if there was a way for a PWA
to check if it's installed. The site wanted to know what state the app was
running in, either a browser tab, or a standalone window.

First, you can use the
[`getInstalledRelatedApps()`](https://web.dev/get-installed-related-apps/) API
to check if your PWA is already installed.

You can check what 'state' the PWA is running in (browser tab, or standalone
window) with a little JavaScript to check to see if the
[CSS display mode is `standalone`](https://developers.google.com/web/fundamentals/app-install-banners/#detect-mode).

``` js
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
```

I also recommend you listen for the `appinstalled` event, it's fired when
the user has installed your app, whether from your install promotion, or from
Chrome.

``` js
window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});
```

For more details on how to customize the install experience of a
Progressive Web App, check out the [PWA docs](https://web.dev/pwa/) on web.dev.
And for patterns to promote the installation of your PWA, check out
[Patterns for Promoting PWA Installation](https://web.dev/promote-install/).
