---
layout: page
title: Now

---

### Reading
<script src=https://bookshop.org/widgets.js data-type="book" data-affiliate-id="124613" data-sku="9780593833377"></script>

### Watching


### Learning


### Doing



### Listening

<div id="lastfm-now"></div>

<script>
fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=crodrigoturner&api_key=59c55425d2236fa9e80a4576fd5ccc0f&format=json&limit=1')
  .then(r => r.json())
  .then(data => {
    const track = data.recenttracks.track[0];
    const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
    const img = track.image.find(i => i.size === 'medium')['#text'];
    const el = document.getElementById('lastfm-now');
    el.innerHTML = `
      <div class="lastfm-track">
        ${img ? `<img src="${img}" alt="" class="lastfm-art">` : ''}
        <div class="lastfm-info">
          <span class="lastfm-status">${nowPlaying ? '▶ now playing' : '↩ last played'}</span>
          <strong>${track.name}</strong>
          <span>${track.artist['#text']}</span>
        </div>
      </div>`;
  });
</script>


