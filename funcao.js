
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

