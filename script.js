document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-proximo")) {
    const atual = document.querySelector(".ativo");
    const proximoId = "passo-" + e.target.dataset.proximo;

    atual.classList.remove("ativo");
    document.getElementById(proximoId).classList.add("ativo");
  }
});
