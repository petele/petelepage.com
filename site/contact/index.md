---
layout: layouts/page.njk
title: Contact
eleventyNavigation:
  key: Contact
  order: 4
---

The best way to get ahold of me is via <a id="contact" href="">email</a>.

<script>
  const enc = 'cGV0ZS5sZXBhZ2VAcG9ib3guY29t';
  const elem = document.getElementById('contact');
  elem.setAttribute('href', 'mailto:'.concat(atob(enc)));
</script>
