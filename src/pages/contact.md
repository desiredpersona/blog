---
layout: page.njk
title: Contact
description: Contact Desired Persona
permalink: "/contact/"
eleventyNavigation:
  key: contact
  order: 3
---

<form name="contact" data-netlify-recaptcha="true" netlify>
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Name <br><input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <br><input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message <br><textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
