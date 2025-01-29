document.addEventListener('DOMContentLoaded', () => {
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

  const navItem = document.querySelectorAll('.nav__item');

  navItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const subMenu = item.querySelector('.nav__submenu');

      if (subMenu) {
        subMenu.classList.toggle('showNav');
      }

      navItem.forEach((items) => {
        if (items !== item) {
          const otherSubMenu = items.querySelector('.nav__submenu');
          if (otherSubMenu) {
            otherSubMenu.classList.remove('showNav');
          }
        }
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item')) {
      navItem.forEach((item) => {
        const subMenu = item.querySelector('.nav__submenu');
        if (subMenu) {
          subMenu.classList.remove('showNav');
        }
      });
    }
  });

  const navItems = document.querySelector('.nav__items');
  const menuBtn = document.querySelector('.hamburger__icon');
  const closeBtn = document.querySelector('.close__icon');

  menuBtn.addEventListener('click', () => {
    navItems.classList.add('showNavBar');
    closeBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    navItems.classList.remove('showNavBar');
    closeBtn.style.display = 'none';
  });
});
