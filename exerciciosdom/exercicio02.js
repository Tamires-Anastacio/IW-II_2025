const botao = document.getElementById("botao-tema");
    const corpo = document.body;

    botao.addEventListener("click", () => {
      corpo.classList.toggle("modo-escuro");
      corpo.classList.toggle("modo-claro");

      // Alternar ícone
      if (corpo.classList.contains("modo-escuro")) {
        botao.textContent = "🌞"; // Mostrar sol no modo escuro
      } else {
        botao.textContent = "🌙"; // Mostrar lua no modo claro
      }
    });