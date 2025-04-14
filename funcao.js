
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


