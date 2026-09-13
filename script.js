const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress span');
const mobileCta = document.querySelector('.mobile-cta');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.faq-list details, .curriculum details').forEach((detail) => detail.addEventListener('toggle', () => {
  if (!detail.open) return;
  detail.parentElement.querySelectorAll('details').forEach((other) => {
    if (other !== detail) other.open = false;
  });
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.setProperty('--delay', `${Math.min(index % 3, 2) * 70}ms`);
  revealObserver.observe(element);
});

const updateScrollUi = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  mobileCta?.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
};

window.addEventListener('scroll', updateScrollUi, { passive: true });
updateScrollUi();
