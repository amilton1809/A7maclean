// Botão Voltar ao Topo
  window.addEventListener("scroll", function() {
    const btnTop = document.getElementById("btn-top");
    if (window.scrollY > 300) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  document.getElementById("btn-top").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });