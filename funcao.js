
  document.querySelectorAll('.video-box').forEach((box) => {
    const video = box.querySelector('video');

    box.addEventListener('mouseenter', () => {
      video.play();
    });

    box.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  const btnTop = document.getElementById("btn-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const track = document.querySelector('.carousel-track');
    const boxes = Array.from(document.querySelectorAll('.job-box'));
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    let boxWidth = 310; // Largura da imagem + gap
    let visibleBoxes = 2; // Padrão para telas maiores

    // DUPLICAR OS ITENS PARA SCROLL INFINITO
    boxes.forEach(box => {
        const clone = box.cloneNode(true);
        track.appendChild(clone);
    });

    const totalBoxes = track.querySelectorAll('.job-box').length;

    function checkScreenSize() {
        if (window.innerWidth <= 600) {
            visibleBoxes = 1;
        } else {
            visibleBoxes = 2;
        }
    }

    function updateCarousel(animate = true) {
        const offset = currentIndex * boxWidth;
        if (!animate) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
        }
        track.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();

        if (currentIndex >= totalBoxes - visibleBoxes) {
            setTimeout(() => {
                currentIndex = 0;
                updateCarousel(false);
            }, 500);
        }
    });

    // Atualiza o número de imagens visíveis ao redimensionar
    window.addEventListener('resize', () => {
        checkScreenSize();
        updateCarousel(false);
    });

    // Inicializa
    checkScreenSize();
    updateCarousel(false);


