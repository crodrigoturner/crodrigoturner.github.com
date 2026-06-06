---
layout: page
title: Contact
---

<p>Always happy to talk — about work, ideas, or anything in between. — Drop me a line.</p>

<form id="contact-form" class="contact-form" novalidate>
  <input type="hidden" name="access_key" value="41c5a30f-3bc1-4570-a7b9-1cf42bc99c26">
  <input type="hidden" name="subject" value="Message from carlosrodrigo.com">
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
  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    var form = this;
    var btn = form.querySelector(".form-submit");
    var status = document.getElementById("cf-status");

    btn.disabled = true;
    btn.textContent = "Sending…";
    status.textContent = "";

    var data = Object.fromEntries(new FormData(form));

    try {
      var res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      var json = await res.json();
      if (json.success) {
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
