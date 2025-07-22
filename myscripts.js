const menuBtn = document.querySelector('.menu-btn'); // e.g., your hamburger
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
