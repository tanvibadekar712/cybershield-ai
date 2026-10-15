let charts = [];

function chart(id, type, data, opts = {}) {
  const el = document.getElementById(id);
  if (!el) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const labelColor = isDark ? '#A18E94' : '#64748B';
  const c = new Chart(el, {
    type,
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: labelColor, font: { family: 'Inter', weight: '500' } }
        }
      },
      ...opts
    }
  });
  charts.push(c);
}

async function load() {
  charts.forEach(c => c.destroy());
  charts = [];
  const s = await (await fetch('/api/stats')).json();
  document.getElementById('kTotal').textContent = s.total;
  document.getElementById('kToxic').textContent = s.toxic_pct + '%';
  document.getElementById('kHigh').textContent = s.high_count;
  document.getElementById('kSafe').textContent = s.safe_pct + '%';

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const tickColor = isDark ? '#A18E94' : '#64748B';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

  const axis = {
    scales: {
      x: {
        ticks: { color: tickColor, font: { family: 'Inter' } },
        grid: { color: gridColor }
      },
      y: {
        ticks: { color: tickColor, precision: 0, font: { family: 'Inter' } },
        grid: { color: gridColor },
        beginAtZero: true
      }
    }
  };

  chart('trendChart', 'line', {
    labels: s.trend.labels,
    datasets: [
      {
        label: 'Total Analyzed',
        data: s.trend.total,
        borderColor: isDark ? '#E4D8DB' : '#0B0B0C',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(11, 11, 12, 0.04)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: isDark ? '#FFFFFF' : '#0B0B0C',
        borderWidth: 2
      },
      {
        label: 'Harmful Flagged',
        data: s.trend.harmful,
        borderColor: '#800020',
        backgroundColor: 'rgba(128, 0, 32, 0.08)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#800020',
        borderWidth: 2
      }
    ]
  }, axis);

  const cats = Object.keys(s.categories);
  chart('catChart', 'doughnut', {
    labels: cats.length ? cats.map(c => c.replace('_', ' ')) : ['No data'],
    datasets: [{
      data: cats.length ? Object.values(s.categories) : [1],
      backgroundColor: ['#800020', '#9B1135', '#0B0B0C', '#D97706', '#059669', '#580015'],
      borderColor: isDark ? '#1C1317' : '#FFFFFF',
      borderWidth: 2
    }]
  });

  chart('sevChart', 'bar', {
    labels: Object.keys(s.severity),
    datasets: [{
      label: 'Comments',
      data: Object.values(s.severity),
      backgroundColor: ['#059669', '#0284C7', '#D97706', '#800020'],
      borderRadius: 6
    }]
  }, axis);

  const h = await (await fetch('/api/history')).json();
  document.querySelector('#table tbody').innerHTML = h.map(r =>
    `<tr>
      <td>${r.time}</td>
      <td>${r.text.replace(/</g, '&lt;')}</td>
      <td><span class="chip tag">${r.label.replace('_', ' ')}</span></td>
      <td><span class="sev ${r.severity}">${r.severity}</span></td>
      <td><b>${Math.round(r.score * 100)}%</b></td>
    </tr>`
  ).join('') || '<tr><td colspan="5">No analyses yet. Try the Analyzer!</td></tr>';
}

document.getElementById('clearHist').addEventListener('click', async () => {
  if (confirm('Clear all history?')) {
    await fetch('/api/history', { method: 'DELETE' });
    load();
  }
});

load();