---
layout: page
title: Reading
lang: en
---

<p id="reading-status" class="meta">Loading…</p>
<table id="reading-table" style="display:none">
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Type</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody id="reading-body"></tbody>
</table>

<script>
(function () {
  const SHEET_ID = '1Jtd3gT4gG6PQZb37tgnpJ4kcDENaWyuZjo0YFuAgbxU';
  const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;

  const STATUS_ORDER = { 'Reading': 0, 'Have read': 1, 'To read': 2 };

  function parseCSV(text) {
    const rows = [];
    let field = '', row = [], inQuote = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i], next = text[i + 1];
      if (inQuote) {
        if (ch === '"' && next === '"') { field += '"'; i++; }
        else if (ch === '"') inQuote = false;
        else field += ch;
      } else {
        if (ch === '"') inQuote = true;
        else if (ch === ',') { row.push(field); field = ''; }
        else if (ch === '\n' || (ch === '\r' && next === '\n')) {
          row.push(field); field = '';
          if (row.some(c => c)) rows.push(row);
          row = [];
          if (ch === '\r') i++;
        } else field += ch;
      }
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  fetch(URL)
    .then(r => r.text())
    .then(text => {
      const [header, ...data] = parseCSV(text);
      // Columns: Title(0) Author(1) RecommendedBy(2) Type(3) Status(4)
      const books = data
        .filter(r => r[0] && r[4])
        .sort((a, b) => (STATUS_ORDER[a[4]] ?? 3) - (STATUS_ORDER[b[4]] ?? 3));

      const tbody = document.getElementById('reading-body');
      tbody.innerHTML = books.map(r => {
        const status = r[4] || '';
        const cls = status === 'Reading' ? 'reading' : status === 'Have read' ? 'have-read' : '';
        const type = r[3] === 'NF' ? 'Non-fiction' : r[3] === 'F' ? 'Fiction' : r[3];
        return `<tr class="${cls}">
          <td>${r[0]}</td>
          <td>${r[1] || ''}</td>
          <td>${type}</td>
          <td>${status}</td>
        </tr>`;
      }).join('');

      document.getElementById('reading-status').textContent =
        `${books.length} books · updated live from Google Sheets`;
      document.getElementById('reading-table').style.display = '';
    })
    .catch(() => {
      document.getElementById('reading-status').textContent = 'Could not load reading list.';
    });
})();
</script>
