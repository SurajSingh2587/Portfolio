// Select the menu button and the navbar
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    nav.classList.toggle('active');
});
