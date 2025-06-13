const botao = document.getElementById('toggle-button');
    const paragrafo = document.getElementById('paragrafo');

    botao.addEventListener('click', () => {
      paragrafo.classList.toggle('aberto');
      botao.textContent = paragrafo.classList.contains('aberto') ? 'Esconder' : 'Mostrar';
    });