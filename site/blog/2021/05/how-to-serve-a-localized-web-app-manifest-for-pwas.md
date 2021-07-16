---
title: How to serve a localized web app manifest for PWAs
date: 2021-05-26
category: web development
tags:
  - pwa
  - localization
  - web app manifest
layout: layouts/post.njk
---

Do you want to serve a localized experience for your Progressive Web App (PWA)
depending on the users language? {: .lead }

Unfortunately today, there's no built in mechanism for localizing your web
app manifest. There's some work being done in the spec, but it hasn't landed
in any browser yet. **But, it's possible to do with a little server side code.**

<!--more-->

First, you'll need to create a separate manifest file, localized for each
language you want to serve. For example, if I wanted to offer
[Squoosh](https://squoosh.app/) in English and French, I'd create two separate
manifest files. That part is easy enough, but now I need to tell the PWA about
 the localized manifest file.

For that, I recommend using the `accept-language` HTTP header on the server
to decide which manifest file to send. This way, the browser will always ask
for the *same filename*, but will get different content depending on the
user's preferred language.

To do this with [Firebase hosting](https://firebase.google.com/docs/hosting),
create a `localized-files` directory, and drop the localized manifest files
into the appropriate language folders. Then add an
[`i18n` property to the `firebase.json` file](https://firebase.google.com/docs/hosting/i18n-rewrites), and that's it.

The server will serve the appropriate file to the user based on their
preferred language. English gets manifest from the English directory, and
French gets the manifest from the French directory.

**The configuration will vary for different servers, but the concept remains the same.**

If you wanted to take this a step further, provide a language picker within
your app that sets a cookie with the user's selection. Then serve the
localized manifest with the cookie taking priority over the accept-language
HTTP header.

One of advantages of this implementation is that if the user changes their
preferred language later, the manifest remains at the same path. And in many
cases, the PWA will be automatically updated based on the preferred language.

To learn more about how Chrome handles changes to the manifest, and what
properties will trigger an update, check out How Chrome handles updates to
the web app manifest.
