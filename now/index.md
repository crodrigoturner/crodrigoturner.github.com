---
layout: page
title: Now

---

### Reading


### Watching

<div id="tmdb-watching"></div>

<script>
// Replace TMDB_SESSION and TMDB_ACCOUNT after one-time setup (see below)
const TMDB_KEY = '11f9b3dd1e928b23b876470cb9250556';
const TMDB_SESSION = '3860364b4beac6c1eeb5f39048d39d71083942d1';
const TMDB_ACCOUNT = '22482021';

if (TMDB_SESSION !== 'YOUR_SESSION_ID') {
  Promise.all([
    fetch(`https://api.themoviedb.org/3/account/${TMDB_ACCOUNT}/rated/movies?api_key=${TMDB_KEY}&session_id=${TMDB_SESSION}&sort_by=created_at.desc`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/account/${TMDB_ACCOUNT}/rated/tv?api_key=${TMDB_KEY}&session_id=${TMDB_SESSION}&sort_by=created_at.desc`).then(r => r.json())
  ]).then(([movies, tv]) => {
    const items = [
      ...(movies.results || []).slice(0, 3).map(m => ({ title: m.title, rating: m.rating, poster: m.poster_path, year: m.release_date?.slice(0, 3) })),
      ...(tv.results || []).slice(0, 3).map(t => ({ title: t.name, rating: t.rating, poster: t.poster_path, year: t.first_air_date?.slice(0, 3) }))
    ];
    const stars = r => '★'.repeat(Math.round(r / 2)) + '☆'.repeat(5 - Math.round(r / 2));
    document.getElementById('tmdb-watching').innerHTML = items.map(item => `
      <div class="tmdb-item">
        ${item.poster ? `<img src="https://image.tmdb.org/t/p/w92${item.poster}" alt="" class="tmdb-poster">` : ''}
        <div class="tmdb-info">
          <strong>${item.title}</strong>${item.year ? ` <span class="tmdb-year">${item.year}</span>` : ''}
          <span class="tmdb-rating">${stars(item.rating)} ${item.rating}/10</span>
        </div>
      </div>`).join('');
  });
}
</script>

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


