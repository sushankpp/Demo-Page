document.addEventListener('DOMContentLoaded', () => {
  const progressCheckpoint = document.querySelectorAll('.checkpoint');
  const progressFill = document.querySelectorAll('.fill');
  const progressionSteps = document.querySelectorAll('.progression-path__step');
  const metricBlock = document.querySelectorAll('.metrics-block__grid-item');
  const navigationLinks = document.querySelectorAll(
    '.hero-banner__navigation-links'
  );
  const progressFiller = document.querySelectorAll('.progress-filler');
  const HeadernavigationLinks = document.querySelectorAll(
    '.hero-banner__navigation-links'
  );
  const slideDuration = 5000;

  let currentProgress = 0;
  let hasRan = false;

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: true,
    noSwiping: false,
    autoplay: {
      delay: slideDuration,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        updateNavigation(this.realIndex);
      },
    },
  });

  function resetProgressBar(activeIndex) {
    progressFiller.forEach((fill, i) => {
      if (i === activeIndex) {
        fill.style.transition = `width ${slideDuration}ms linear`;
        fill.style.width = '100%';
      } else {
        fill.style.transition = 'none';
        fill.style.width = '0%';
      }
    });
  }

  function updateNavigation(activeIndex) {
    navigationLinks.forEach((link, i) => {
      if (i === activeIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    resetProgressBar(activeIndex);
  }

  navigationLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
      swiper.slideTo(i);
    });
  });

  // Initial call to update progress on page load
  updateNavigation(swiper.realIndex);

  // Function to update progress
  function updateProgress() {
    let windowHeight = window.innerHeight;

    progressionSteps.forEach((step, id) => {
      let boundingVal = step.getBoundingClientRect();

      if (
        boundingVal.top < windowHeight / 2 &&
        boundingVal.bottom > windowHeight / 2
      ) {
        currentProgress = id;
      }
    });

    progressCheckpoint.forEach((chk, i) => {
      if (i <= currentProgress) {
        chk.classList.add('checkpoint__active');
      } else {
        chk.classList.remove('checkpoint__active');
      }
    });

    progressFill.forEach((fill, i) => {
      if (i < currentProgress) {
        fill.style.height = '100%';
      } else if (i === currentProgress) {
        let nextStep = progressionSteps[i + 1];
        if (nextStep) {
          let nextStepPos = nextStep.getBoundingClientRect().top;
          let progressPer = ((windowHeight - nextStepPos) / windowHeight) * 100;
          fill.style.height = `${Math.min(progressPer, 100)}%`;
        } else {
          fill.style.height = '100%';
        }
      } else {
        fill.style.height = '0%';
      }
    });

    progressionSteps.forEach((stp, i) => {
      let title = stp.querySelector('.content__title');
      let content = stp.querySelector('.content__text');

      if (i <= currentProgress) {
        title.classList.add('show-content__title');
        content.classList.add('show-content__text');
      } else {
        title.classList.remove('show-content__title');
        content.classList.remove('show-content__text');
      }
    });
  }

  // Function to update numbers
  function updateNumbers() {
    if (hasRan) return;

    let windowHeight = window.innerHeight;

    metricBlock.forEach((item) => {
      const boundVal = item.getBoundingClientRect();

      if (boundVal.top < windowHeight && boundVal.bottom > 0) {
        hasRan = true;

        const title = item.querySelector('.metrics-block__grid-title');
        let maxCounter = parseInt(title.textContent.trim());
        let counter = 0;
        let seconds = 2;
        const interval = (seconds * 1000) / maxCounter;

        const loop = setInterval(() => {
          title.textContent = counter;
          if (counter >= maxCounter) {
            clearInterval(loop);
          }
          counter++;
        }, interval);
      }
    });
  }

  updateProgress();
  updateNumbers();

  window.addEventListener('scroll', updateProgress);
  window.addEventListener('scroll', updateNumbers);
});
