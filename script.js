// JPC Odontologia — comportamento do site
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-mobile');
const icon = document.querySelector('#menu-icon use');
toggle.addEventListener('click', () => {
  const open = menu.dataset.open === 'true';
  menu.dataset.open = String(!open);
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  icon.setAttribute('href', open ? '#i-menu' : '#i-close');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.dataset.open = 'false';
  toggle.setAttribute('aria-expanded', 'false');
  icon.setAttribute('href', '#i-menu');
}));

// Reveal no scroll (respeita reduced-motion via CSS)
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('is-visible'));
}
