document.addEventListener("DOMContentLoaded", function () {
  // Animação suave para os itens da seção skills
  const skillBoxes = document.querySelectorAll(".skills-container");

  skillBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("show");
    }, index * 480);
  });

  // Efeito Smooth no Scroll para outros elementos
  const elementsToAnimate = document.querySelectorAll(
    "#jobs-section .job-box, .jobinho .video-box, .footer .footer-coluna"
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
