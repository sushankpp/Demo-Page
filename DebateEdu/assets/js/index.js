const progressBars = document.querySelectorAll('.progress-fill');
const navigationTxt = document.querySelectorAll(
  '.hero-banner__navigation-text'
);
const heading = document.querySelector('.hero-banner__title');
const para = document.querySelector('.hero-banner__text');
let currentId = 0;

let txtArr = [
  {
    h1: "Where tomorrow's leaders find their voice today",
    p: ' Join elite debate champions and unlock advanced techniques in argumentation , persuasion, and public speaking.',
  },
  {
    h1: 'Your Joruney from Beginner to World-class Debater',
    p: 'Master the art of debate step by step, from foundational skills to advanced strategies used by global champions. Elevate your confidence, critical thinking, and persuasion skills to compete at the highest level.',
  },
  {
    h1: 'Be Part of an Exclusive Circle of Debate Champions',
    p: 'Connect with top-tier debaters, mentors, and coaches from around the world. Engage in high-level discussions, refine your techniques, and gain insights that set you apart in the competitive debate arena.',
  },
];

function startProgress() {
  progressBars.forEach((bar) => {
    bar.style.width = '0%';
  });
  navigationTxt.forEach((txt) => txt.classList.remove('active'));

  if (currentId < progressBars.length) {
    navigationTxt[currentId].classList.add('active');
    progressBars[currentId].style.width = '100%';

    if (progressBars[currentId]) {
      heading.textContent = txtArr[currentId].h1;
      para.textContent = txtArr[currentId].p;
    }

    setTimeout(() => {
      currentId = (currentId + 1) % progressBars.length;
      startProgress();
    }, 3000);
  }
}

startProgress();
