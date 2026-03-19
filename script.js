// 1. Animação de Scroll (Faz os elementos aparecerem suavemente)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("mostrar");
    }
  });
});

// Seleciona tudo que tem a classe 'oculto' e começa a observar
const elementosOcultos = document.querySelectorAll(".oculto");
elementosOcultos.forEach((el) => observer.observe(el));

// 2. FAQ Interativo (Efeito Sanfona)
const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    // Alterna a classe 'ativa' para mudar o ícone de + para -
    pergunta.classList.toggle("ativa");

    // Pega a caixa de resposta logo abaixo da pergunta
    const resposta = pergunta.nextElementSibling;

    // Abre ou fecha a resposta calculando o tamanho do texto
    if (pergunta.classList.contains("ativa")) {
      resposta.style.maxHeight = resposta.scrollHeight + "px";
    } else {
      resposta.style.maxHeight = 0;
    }
  });
});
