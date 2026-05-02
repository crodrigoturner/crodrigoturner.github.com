---
layout: page
title: Links
lang: en
---

The best of the internet — saved to [Raindrop](https://app.raindrop.io/my/62384300).

This is a little experiment inspired by [linkity link](https://linkitylink.lol/) and [clone.fyi](https://clone.fyi/). It was made with the help of Claude Code and the Raindrop API.

<div id="raindrop-list"><p class="meta">Loading…</p></div>

<script>
(function () {
  var FEED = 'https://bg.raindrop.io/rss/public/62384300';
  var container = document.getElementById('raindrop-list');

  fetch(FEED)
    .then(function (r) { return r.text(); })
    .then(function (xml) {
      var doc = new DOMParser().parseFromString(xml, 'text/xml');
      var items = Array.from(doc.querySelectorAll('item'));
      if (!items.length) { container.innerHTML = '<p class="meta">No links yet.</p>'; return; }

      items.sort(function (a, b) {
        var da = new Date((a.querySelector('pubDate') || {}).textContent || 0);
        var db = new Date((b.querySelector('pubDate') || {}).textContent || 0);
        return db - da;
      });

      var html = '<ul class="link-list">';
      items.forEach(function (item) {
        var title = (item.querySelector('title') || {}).textContent || '';
        var link  = (item.querySelector('link')  || {}).textContent || '';
        var desc  = (item.querySelector('description') || {}).textContent || '';
        var date  = (item.querySelector('pubDate') || {}).textContent || '';
        var domain = '';
        try { domain = new URL(link).hostname.replace(/^www\./, ''); } catch (e) {}
        var dateStr = '';
        if (date) {
          try { dateStr = new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }); } catch (e) {}
        }
        html += '<li>';
        html += '<a href="' + link + '" target="_blank" rel="noopener">' + title + '</a>';
        if (desc) html += '<p>' + desc + '</p>';
        html += '<small>' + [domain, dateStr].filter(Boolean).join(' · ') + '</small>';
        html += '</li>';
      });
      html += '</ul>';
      container.innerHTML = html;
    })
    .catch(function () {
      container.innerHTML = '<p class="meta">Could not load links — try visiting <a href="https://raindrop.io" target="_blank">Raindrop</a> directly.</p>';
    });
})();
</script>
