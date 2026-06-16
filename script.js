/* ===========================
   NAVIGATION — Burger menu
=========================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===========================
   NAVBAR — shadow on scroll
=========================== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===========================
   SCROLL REVEAL
=========================== */
const revealElements = () => {
  const elements = document.querySelectorAll(
    '.about-text, .skills-wrap, .project-card, .beyond-card, .contact-inner, .section-title, .section-label'
  );

  elements.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards
    if (el.classList.contains('project-card') || el.classList.contains('beyond-card')) {
      const siblings = el.parentElement.children;
      const index = Array.from(siblings).indexOf(el);
      if (index === 1) el.classList.add('reveal-delay-1');
      if (index === 2) el.classList.add('reveal-delay-2');
      if (index === 3) el.classList.add('reveal-delay-3');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

/* ===========================
   ACTIVE NAV LINK on scroll
=========================== */
const activateNavLink = () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.style.color = '');
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.style.color = 'var(--blue)';
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(section => observer.observe(section));
};

/* ===========================
   HERO PHOTO placeholder
=========================== */
const heroPhoto = document.getElementById('hero-photo');

heroPhoto.addEventListener('error', () => {
  // If no photo is set, show initials placeholder
  heroPhoto.style.display = 'none';
  const wrap = document.querySelector('.hero-photo-wrap');
  if (!wrap.querySelector('.photo-placeholder')) {
    const placeholder = document.createElement('div');
    placeholder.className = 'photo-placeholder';
    placeholder.style.cssText = `
      width: 100%; height: 100%;
      border-radius: 50%;
      background: #111;
      border: 3px solid var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 3rem;
      color: var(--blue);
      letter-spacing: 2px;
      position: relative;
      z-index: 1;
    `;
    placeholder.textContent = 'SM';
    wrap.insertBefore(placeholder, wrap.firstChild);
  }
});

/* ===========================
   INIT
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  revealElements();
  activateNavLink();
});