const track = document.querySelector('.carousel-track');
const boxes = Array.from(document.querySelectorAll('.job-box'));
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let index = 0;
let boxWidth;
let itemsPerView;

function cloneSlides() {
  const clonesStart = boxes.slice(-itemsPerView).map(el => el.cloneNode(true));
  const clonesEnd = boxes.slice(0, itemsPerView).map(el => el.cloneNode(true));

  clonesStart.forEach(clone => {
    track.insertBefore(clone, track.firstChild);
  });

  clonesEnd.forEach(clone => {
    track.appendChild(clone);
  });
}

function updateItemsPerView() {
  itemsPerView = window.innerWidth <= 768 ? 1 : 2;
  const boxWidth = track.querySelector('.job-box').offsetWidth + 10;
  track.style.transform = `translateX(-${boxWidth * itemsPerView}px)`;
}

function updateSizes() {
  itemsPerView = window.innerWidth <= 768 ? 1 : 2;
  boxWidth = track.querySelector('.job-box').offsetWidth + 10;
  track.style.transform = `translateX(-${boxWidth * itemsPerView}px)`;
}

function moveTo(indexDelta) {
  index += indexDelta;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${boxWidth * (index + itemsPerView)}px)`;

  // Reset para loop suave
  track.addEventListener('transitionend', handleLoop, { once: true });
}

function handleLoop() {
  if (index >= boxes.length) {
    index = 0;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${boxWidth * itemsPerView}px)`;
  } else if (index < 0) {
    index = boxes.length - 1;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${boxWidth * (index + itemsPerView)}px)`;
  }
}

// Animar senções da page
prevButton.addEventListener('click', () => moveTo(-1));
nextButton.addEventListener('click', () => moveTo(1));
window.addEventListener('resize', () => location.reload());

updateItemsPerView();  // Atualiza na inicialização

// Inicialização
cloneSlides();
setTimeout(() => {
  updateSizes();
}, 100);