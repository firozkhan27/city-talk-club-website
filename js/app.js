// Navbar

const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.mobile-nav-block');
const mobileNavList = document.querySelector('.mobile-nav-list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navBlock.classList.toggle('active');
  mobileNavList.classList.toggle('active');
});
