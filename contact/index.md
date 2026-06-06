---
layout: page
title: Contact
---

Email → <a href="mailto:rodrigoturner.carlos@gmail.com">rodrigoturner.carlos@gmail.com</a>

<form id="contact-form" class="contact-form" novalidate>
  <div class="form-field">
    <label for="cf-name">Name</label>
    <input type="text" id="cf-name" name="name" autocomplete="name" required>
  </div>
  <div class="form-field">
    <label for="cf-email">Email</label>
    <input type="email" id="cf-email" name="email" autocomplete="email" required>
  </div>
  <div class="form-field">
    <label for="cf-message">Message</label>
    <textarea id="cf-message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit" class="form-submit">Send</button>
  <p id="cf-status" class="form-status" aria-live="polite"></p>
</form>

<script>
(function () {
  var WORKER_URL = "https://YOUR_WORKER.YOUR_SUBDOMAIN.workers.dev";

  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    var form = this;
    var btn = form.querySelector(".form-submit");
    var status = document.getElementById("cf-status");

    btn.disabled = true;
    btn.textContent = "Sending…";
    status.textContent = "";

    try {
      var res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("cf-name").value,
          email: document.getElementById("cf-email").value,
          message: document.getElementById("cf-message").value
        })
      });
      if (res.ok) {
        status.textContent = "Message sent — thanks!";
        status.className = "form-status form-status--ok";
        form.reset();
      } else {
        throw new Error();
      }
    } catch (_) {
      status.textContent = "Something went wrong. Email me directly.";
      status.className = "form-status form-status--err";
    }

    btn.disabled = false;
    btn.textContent = "Send";
  });
})();
</script>
