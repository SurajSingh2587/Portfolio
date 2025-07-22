 const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelectorAll('.nav-link');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Highlight active link on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop - 80 <= scrollY &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
