document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // FancyBox.bind('[data-fancybox]', () => {
  //   return { autoFocus: true };
  // });

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const nav = document.querySelector('.header__nav');

  hamburgerMenu.addEventListener('click', () => {
    nav.classList.add('nav--visible');
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
    closeMenu.style.display = 'none';
  });
});
