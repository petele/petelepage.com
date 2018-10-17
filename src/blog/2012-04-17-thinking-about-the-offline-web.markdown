---
layout: post
title: 'Thinking about the offline web '
date: '2012-04-17 09:53:24 -0400'
categories: blog
tags:
- Performance
- Fast
- BestPractices
- AppCache
- offline
- indexed db
comments:
- id: 4830
  date: '2012-04-17 15:12:02 -0400'
  content: interesting post.  I'd say one of the key factors you've missed here is
    the deep coupling at a business level between offline and mobile.  Product managers
    see offline as a mobile technology, because it has very little application to
    an always on, always reliable wired internet connection in the home or office.  And
    as a result, it's almost as equally deeply coupled to touch.  I think one of the
    challenges the developer community should try to address is this lumping of all
    HTML5 technologies together as an 'all or nothing' endeavour, only to be considered
    for tablet or smartphone devices.
- id: 4831
  date: '2012-04-17 20:54:03 -0400'
  content: "Have you taken a look at the offline capabilities CouchDB provides? I
    gave a tech talk at Google in 2009, about ground computing and the benefits of
    local data: http://googlecode.blogspot.com/2009/09/chris-anderson-couchdb-relaxing-offline.html\r\n\r\nCouch
    is being ported to many new implementations. For instance the new PouchDB syncs
    with CouchDB, and is built on IndexedDB for browser JavaScript https://github.com/mikeal/pouchdb\r\n\r\nAlso
    for iOS there is the lightweight TouchDB, which also syncs with CouchDB and uses
    SQLite for storage: https://github.com/couchbaselabs/TouchDB-iOS\r\n\r\nThe essence
    of the idea is that your data set should be the same no matter where you are (like
    the cloud) but stored locally (like a desktop). The endgame for this application
    architecture is independent apps (run offline and installed like desktop apps)
    that connect to the cloud when they want to share data or they are interested
    in a continuous data feed."
- id: 4832
  date: '2012-04-18 07:21:19 -0400'
  content: "You should check out <a href=\"http://5apps.com\" rel=\"nofollow\">5apps</a>.
    It's a deployment platform for HTML5+JS apps, they have a feature for enabling
    AppCache by default.\r\n\r\nAnd if you use the open <a href=\"http://unhosted.org/#remotestorage\"
    rel=\"nofollow\">remoteStorage protocol</a>, you can get localStorage with the
    benefit of per-user cloud sync."
---
Over the last few months, I’ve spent a lot of time thinking about how to make it easier for developers to build web applications that work offline, its a tough problem to solve. The web has the features/technology to do it, but I think there are two things preventing us from getting there easily. The first is a perception issue for users, many people think that the web only works when they’re online, no internet, no web. That leads to a bit of a catch-22, users aren’t asking for it, so developers aren’t prioritizing it. The second problem is that it requires a change in the way we build web applications. Instead of building server side web applications, we need to build more client side web applications that use web-based APIs to get what they need.

**More than just ‘offline’**

But applications that work offline isn’t the only reason to start using these new techniques. There are lots of other scenarios that benefit from the offline experience. For example, the intermittent connection where someone may have a connection for 5 minutes, then lose it for 2 then have it again for 3 minutes. The low bandwidth connection, for people connected maybe by dial-up or 3G modem. It also benefits the person with a great net connection - because any time you load data from the local machine, it’s almost guaranteed to be faster than if it were to come across the network. The performance benefits are pretty significant here!

**Reuse the same code for different platforms**

If you’re already building native (iOS, Android, Desktop) applications, you probably already have the set of server-side APIs, build your web application to take advantage of those to get the data that it needs. Architect your web application in the same way that you’re building native applications - using the same set of APIs and XMLHTTPRequests! If you’re worried about performance (and everyone should be), you should cache data locally, so that after the first time the app is run, it only needs to get the newest data from the server, and there is some available immediately at start up.

**Offline techniques**

Building applications that work offline requires two main things, a way to store the applications components (the HTML, JavaScript, CSS, images, and other assets) on the user’s machine, and some way to store data. Solving the first problem is done with the HTML5 feature application cache, which tells the browser to explicitly store the necessary files locally on the user’s computer, and instead of asking for them from the server every time, load them from the cache.

HTML5 offers lots of great ways to cache data locally, localStorage, indexed DB and web SQL. Unfortunately, the only consistently available storage feature today is localStorage, but it’s got a few drawbacks. WebSQL works across most browsers, but it has been deprecated, and could go away at some point. The recommended method, is indexed DB, but it’s not available in all browsers yet, but it’s coming. Check out [http://caniuse.com](http://caniuse.com) for more info about implementation.

**Up next** - how do we get users to demand offline?