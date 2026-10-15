const root = document.documentElement;
const btn = document.getElementById('themeBtn');
const saved = localStorage.getItem('theme') || 'light';

root.setAttribute('data-theme', saved);

if (btn) {
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}