---
title: Testing QuotaExceededError by simulating a small disk
date: 2020-08-19
category: web development
tags:
  - storage
  - indexeddb
layout: layouts/post.njk
---

An unhandled `QuotaExceededError` when writing to IndexedDB or the Cache
Storage API can cause user data loss. That's why it's **critical** to
[handle them properly](https://web.dev/storage-for-the-web/#over-quota). But,
because modern computers typically have large hard drives, exceeding your
quota can be hard to test.

<!--more-->

In Chrome, one way to simulate a small drive so that you can properly test how
your code behaves when it hits a `QuotaExceededError` is to put the user
profile directory on a small RAM disk using the `--user-data-dir` flag. Since
Chrome bases its storage quota on the size of the disk where the user profile
is, the small RAM disk will limit the storage quota significantly.

To create a 500M RAM disk on macOS, then start Chrome, I used:

``` bash
diskutil erasevolume HFS+ ramDisk $(hdiutil attach -nomount ram://980000)
open -a "Google Chrome Canary" --args --user-data-dir=/Volumes/ramDisk
```

I know you can do this on Windows and Linux as well, I'm just not sure the
command line required to create a RAM disk for each. Using a RAM disk also
makes it super easy to blow away the profile directory and start fresh,
without any service workers or anything like that.

Want to learn more about web storage, check out my article
[Storage for the web](https://web.dev/storage-for-the-web/) and
[Persistent storage](https://web.dev/persistent-storage/) on
[web.dev](https://web.dev).
