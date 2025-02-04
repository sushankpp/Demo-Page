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

  const navItem = document.querySelectorAll('.nav__items li');

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
    if (!e.target.closest(navItem) && !e.target.closest('.nav__items')) {
      closeAllNavs();
    }
  });

  // document.addEventListener('mouseover', (e)=>{
  //   if (!e.target.closest('.nav__item')) {
  //     closeAllNavs();
  //   }
  // })

  const navItems = document.querySelector('.nav__items');
  const menuBtn = document.querySelector('.hamburger__icon');
  const closeBtn = document.querySelector('.close__icon');

  menuBtn.addEventListener('click', (e) => {
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

  const accordionItem = document.querySelectorAll('.accordion__item');

  accordionItem.forEach((item) => {
    item.addEventListener('click', () => {
      this.accordionContent = item.querySelector('.accordion__content');
      this.accordionBtn = item.querySelector('.accordion-btn');
      if (accordionContent.classList.contains('active')) {
        accordionContent.classList.remove('active');
        accordionBtn.classList.remove('clicked');
      } else {
        accordionContent.classList.add('active');
        accordionBtn.classList.add('clicked');
      }
    });
  });
});
