---
title: GitHub SSH and 2-factor auth
date: 2020-06-24
category: web development
tags:
  - github
  - 2fa
  - reminder
layout: layouts/post.njk
---

I hate that using SSH & 2-factor auth means I have to auth even for for a
git pull. But there's an easier way! Change the remote used for fetch to
the HTTPS url.

First, verify that both push/fetch are using SSH by running `git remote -v`
it should output something like:

``` text
origin  git@github.com:petele/squoosh.git (fetch)
origin  git@github.com:petele/squoosh.git (push)
```

Then use `git remote set-url origin <https url>` to set the remote URL for
fetch to the HTTPS url. Your repo will now push via SSH and pull via HTTPS,
**and** it won't require the extra 2-factor auth to pull.

Now, after running `git remote -v` I get…

``` text
origin  https://github.com/petele/squoosh.git (fetch)
origin  git@github.com:petele/squoosh.git (push)
```
