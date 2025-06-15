// Tabs
const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');

// Verberg tabs standaard
tabs.forEach(tab => tab.classList.remove('active'));

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    // Scroll naar tab
    window.scrollTo({ top: document.querySelector("main").offsetTop, behavior: 'smooth' });
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// On load animatie
window.addEventListener('load', () => {
  document.querySelectorAll('.animate-fade').forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      el.style.opacity = 1;
    }, 400);
  });

  document.querySelectorAll('.animate-slide').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-20px)';
    el.style.transition = 'all 0.8s ease';
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 600);
  });
});