const carousel = document.querySelector('.carousel');
const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];
const pauseButton = document.querySelector('#autoplay');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide = 0;
let timer;
let paused = reducedMotion.matches;
let hovering = false;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.hidden = i !== currentSlide;
    slide.classList.toggle('active', i === currentSlide);
    dots[i].classList.toggle('active', i === currentSlide);
    dots[i].setAttribute('aria-pressed', String(i === currentSlide));
  });
  document.querySelector('#slide-count').textContent = `0${currentSlide + 1} / 03`;
}

function updateAutoplay() {
  window.clearInterval(timer);
  pauseButton.textContent = paused ? 'Putar' : 'Jeda';
  pauseButton.setAttribute('aria-label', paused ? 'Putar pergantian banner' : 'Jeda pergantian banner');
  if (!paused && !hovering && !document.hidden && !carousel.contains(document.activeElement)) {
    timer = window.setInterval(() => showSlide(currentSlide + 1), 5500);
  }
}

function navigate(index) {
  showSlide(index);
  updateAutoplay();
}

document.querySelector('#prev').addEventListener('click', () => navigate(currentSlide - 1));
document.querySelector('#next').addEventListener('click', () => navigate(currentSlide + 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => navigate(index)));
pauseButton.addEventListener('click', () => {
  paused = !paused;
  updateAutoplay();
});
carousel.addEventListener('mouseenter', () => { hovering = true; updateAutoplay(); });
carousel.addEventListener('mouseleave', () => { hovering = false; updateAutoplay(); });
carousel.addEventListener('focusin', updateAutoplay);
carousel.addEventListener('focusout', () => window.setTimeout(updateAutoplay, 0));
document.addEventListener('visibilitychange', updateAutoplay);
reducedMotion.addEventListener('change', event => { paused = event.matches; updateAutoplay(); });
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    navigate(currentSlide + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
updateAutoplay();

const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = [...navMenu.querySelectorAll('a')];
function closeMenu() {
  navMenu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.navbar')) closeMenu();
});

const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
let scrollPending = false;
function updateActiveNav() {
  const offset = document.querySelector('.header').offsetHeight + 100;
  let activeId = sections[0].id;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= offset) activeId = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeId = sections[sections.length - 1].id;
  }
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    window.requestAnimationFrame(updateActiveNav);
  }
}, { passive: true });
window.addEventListener('resize', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();