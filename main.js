const API = "https://stock-analyzer-backend-hnh4.onrender.com";

function loadData() {
  const picksDiv = document.getElementById("picks");
  const tableDiv = document.getElementById("table");
  const statusDiv = document.getElementById("status");

  picksDiv.innerHTML = "";
  tableDiv.innerHTML = "";
  statusDiv.textContent = "Loading data...";

  Promise.all([
    fetch(`${API}/api/top-picks`).then(res => res.json()),
    fetch(`${API}/api/stocks`).then(res => res.json())
  ])
    .then(([picksRes, stocksRes]) => {
      statusDiv.textContent = "";
      renderTopPicks(picksRes.topPicks);
      renderStockTable(stocksRes.stocks);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      statusDiv.textContent = "❌ Error loading data. Check your backend.";
    });
}

function renderTopPicks(picks) {
  const picksDiv = document.getElementById("picks");
  let html = `<h2 style="text-align:center; color:#1d3557;">🏆 Top 5 Picks</h2><div class="top-picks">`;

  picks.forEach(p => {
    html += `<div class="pick-card">
      <h3>${p.symbol}</h3>
      <p><strong>${p.company}</strong></p>
      <p>Score: ${p.score?.toFixed(2) || '-'}</p>
      <p>${p.description?.slice(0, 90) || 'No description'}...</p>
    </div>`;
  });

  html += `</div>`;
  picksDiv.innerHTML = html;
}

function renderStockTable(stocks) {
  const tableDiv = document.getElementById("table");

  let html = `<h2 style="text-align:center; color:#1d3557;">📈 Full Stock Table</h2>`;
  html += `<div style="overflow-x:auto;"><table><thead><tr>
    <th>Symbol</th><th>Company</th><th>Price</th><th>PE</th><th>PB</th>
    <th>Dividend Yield</th><th>Score</th>
  </tr></thead><tbody>`;

  stocks.forEach(stock => {
    html += `<tr>
      <td>${stock.symbol}</td>
      <td>${stock.company}</td>
      <td>${stock.price?.toFixed(2) || "-"}</td>
      <td>${stock.pe || "-"}</td>
      <td>${stock.pb || "-"}</td>
      <td>${stock.dividendYield || "-"}</td>
      <td>${stock.score?.toFixed(2) || "-"}</td>
    </tr>`;
  });

  html += `</tbody></table></div>`;
  tableDiv.innerHTML = html;
}
