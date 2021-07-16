---
title: Seamless/GrubHub order history
date: 2019-08-07
category: general
tags:
  - seamless
layout: layouts/post.njk
---

AKA How much have I spent on Seamless this year? {: .lead }

<!--more-->

I use [Seamless](https://seamless.com) (aka GrubHub) a lot, probably 4 or 5
times a week. Don't get me wrong, I can cook, and I like to cook, but also
knowing that yummy food is going to show up at your door in about 30 minutes
is amazing. And their new Progressive Web App is great, loads fast, it's
installable, everything I want in a PWA.

But it got me thinking, how much do I spend on Seamless? They don't
really tell you on their site. But, you can see your order history for the
last year. So, I wrote a little code to add up all my orders.

First, you'll need to navigate to
[https://www.seamless.com/account/history?pageSize=200](https://www.seamless.com/account/history?pageSize=200),
essentially the order page, but showing 200 orders. If you see multiple
pages at the bottom, up the page size until everything is on the same page.

Once the page has loaded, open Chrome's DevTools, switch to the Console
panel, and paste the following code:

``` js
let total = 0;
const orders = [];
const elems = document.querySelectorAll('ghs-past-order-card');
elems.forEach((card) => {
  const elem = card.querySelectorAll('div.s-row > div')[1];
  // Date
  const d = elem.querySelectorAll('div.s-row')[1].querySelector('div').textContent;
  // Restaurant
  const r = elem.querySelectorAll('h4')[0].textContent;
  // Total
  const t = elem.querySelectorAll('h4')[1].textContent.replace('$', '');
  // Add order to array
  orders.push(`${d.replace(/,/g, '')},${r},${t}`);
  if (d !== 'CANCELED') {
    total += parseFloat(t, 10);
  }
});
console.log(orders.join('\n'));
console.log('count', orders.length);
console.log('total', total);
```

That should print off your list of orders, along with the total number of
orders, and the amount of money you've spent on Seamless/GrubHub. You can
also copy/paste the list as a CSV file if you want that.

Since August 22nd, 2018, I've ordered from Seamless 164 times. I'm going to
pull the orders into a spreadsheet to see what my favorite restaurants are
and such later, but this felt like a little bit of fun in the meantime.

{% Aside %}
  This code will break the moment they change their HTML or CSS rendering,
  none of the elements are identified in any semantic way, essentially I
  had to pick elements by position or relation to other elements.
{% endAside %}

Enjoy!

PS: If you haven't tried Seamless, use my [referral code](http://fbuy.me/nutji)
and we both get a little bonus!
