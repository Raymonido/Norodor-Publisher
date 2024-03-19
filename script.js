const nav = document.querySelector('nav');
const links = document.querySelectorAll('#nav-menu a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

