const API = "https://stock-analyzer-backend-hnh4.onrender.com";

async function loadData() {
  document.getElementById("picks").innerHTML = "⏳ Loading top picks...";
  document.getElementById("table").innerHTML = "⏳ Loading table...";

  try {
    const [picksRes, stocksRes] = await Promise.all([
      fetch(`${API}/api/top-picks`).then(res => res.json()),
      fetch(`${API}/api/stocks`).then(res => res.json())
    ]);

    renderTopPicks(picksRes.topPicks);
    renderTable(stocksRes.stocks);
  } catch (err) {
    console.error(err);
    document.getElementById("picks").innerHTML = "❌ Failed to load top picks.";
    document.getElementById("table").innerHTML = "❌ Failed to load table.";
  }
}

function renderTopPicks(picks) {
  let html = `<h2>🏆 Top 5 Picks</h2><div style="display:flex; gap:10px; flex-wrap:wrap;">`;
  picks.forEach(p => {
    html += `<div style="border:1px solid #ccc; padding:10px; width:200px;">
      <h3>${p.symbol}</h3>
      <p><strong>${p.company}</strong></p>
      <p>Score: ${p.score?.toFixed(2)}</p>
      <p>${p.description?.slice(0, 100)}...</p>
    </div>`;
  });
  html += `</div>`;
  document.getElementById("picks").innerHTML = html;
}

function renderTable(stocks) {
  let html = `<h2>📊 Stock Data</h2><div style="overflow-x:auto;"><table border="1" cellpadding="6"><thead><tr>
    <th>Symbol</th><th>Company</th><th>Price</th><th>PE</th><th>PB</th>
    <th>Dividend Yield</th><th>Score</th>
  </tr></thead><tbody>`;

  stocks.forEach(s => {
    html += `<tr>
      <td>${s.symbol}</td><td>${s.company}</td><td>${s.price?.toFixed(2)}</td>
      <td>${s.pe}</td><td>${s.pb}</td><td>${s.dividendYield}</td><td>${s.score?.toFixed(2)}</td>
    </tr>`;
  });

  html += `</tbody></table></div>`;
  document.getElementById("table").innerHTML = html;
}

// Auto-load on first visit
loadData();
