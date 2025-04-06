function abrirOverlay(botao) {
    const titulo = botao.getAttribute("data-titulo");
    const texto = botao.getAttribute("data-texto");
    const imagem = botao.getAttribute("data-img");

    document.getElementById("titulo").textContent = titulo;
    document.getElementById("info").textContent = texto;
    document.getElementById("imagemOverlay").src = imagem;

    document.getElementById("overlay").style.display = "flex";
  }

  function fecharOverlay() {
    document.getElementById("overlay").style.display = "none";
  }