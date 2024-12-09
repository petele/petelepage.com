---
layout: layouts/page.njk
permalink: /wp-admin/
eleventyExcludeFromCollections: true
---

<div class="sad-panda">
  <h2>
    Login
  </h2>

  <img src="/img/sadpanda.png">
</div>

<form>
  <div class="mb-3">
    <label for="inpEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inpEmail">
  </div>
  <div class="mb-3">
    <label for="inpPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="inpPassword">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="inpRemember">
    <label class="form-check-label" for="inpRemember">Remember me</label>
  </div>
  <button id="butLogin" class="btn btn-primary">Login</button>
</form>

<script>
  gtag('event', 'wp_admin', {
    event_category: 'shown',
    event_label: location.pathname
  });
  const inpEmail = document.querySelector('#inpEmail');
  const inpPass = document.querySelector('#inpPassword');
  const but = document.querySelector('#butLogin');
  but.addEventListener('click', () => {
    gtag('event', 'wp_admin', {
      event_category: 'email',
      event_label: inpEmail.value,
    });
    gtag('event', 'wp_admin', {
      event_category: 'password',
      event_label: inpPassword.value,
    });
    const e = inpEmail.value;
    const p = inpPassword.value;
    const msg = `Login attempt recorded. '${e}' with password '${p}'`;
    alert(msg);
    setTimeout(() => {
      window.location.reload();
    }, 2650);
  });
</script>
