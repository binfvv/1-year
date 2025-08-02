const envelopeContainer = document.querySelector('.envelope-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const bgMusic = document.getElementById('bgMusic');

let clickCount = 0;
const maxClicks = 10;
let hasPlayedMusic = false;

const initialPosition = {
  left: envelopeContainer.offsetLeft,
  top: envelopeContainer.offsetTop
};

const maxX = window.innerWidth - envelopeContainer.offsetWidth - 40;
const maxY = window.innerHeight - envelopeContainer.offsetHeight - 40;

envelopeContainer.addEventListener('click', () => {
  clickCount++;

  if (clickCount <= maxClicks) {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    envelopeContainer.style.position = 'fixed';
    envelopeContainer.style.left = `${randomX}px`;
    envelopeContainer.style.top = `${randomY}px`;
  }

  if (clickCount === maxClicks) {
    setTimeout(() => {
      envelopeContainer.style.left = `${initialPosition.left}px`;
      envelopeContainer.style.top = `${initialPosition.top}px`;
    }, 300);
  }

  if (clickCount === maxClicks + 1) {
    overlay.classList.add('active');

    if (!hasPlayedMusic) {
      bgMusic.volume = 0.5; // âm lượng từ 0 đến 1
      bgMusic.play();
      hasPlayedMusic = true;
    }
  }
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});
