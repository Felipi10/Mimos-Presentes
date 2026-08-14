const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});
