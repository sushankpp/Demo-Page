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
    item.addEventListener('mouseenter', () => {
      showNav(item);
    });

    item.addEventListener('click', (e) => {
      e.stopPropagation(); 
      showNav(item);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item')) {
      closeAllNavs();
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

  function showNav(item) {
    closeAllNavs(); 
    const subMenu = item.querySelector('.nav__submenu');
    if (subMenu) {
      subMenu.classList.add('showNav'); 
    }
  }

  function closeAllNavs() {
    navItem.forEach((item) => {
      const subMenu = item.querySelector('.nav__submenu');
      if (subMenu) {
        subMenu.classList.remove('showNav');
      }
    });
  }
});
