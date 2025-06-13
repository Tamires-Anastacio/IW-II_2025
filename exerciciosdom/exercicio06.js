const botaoCopiar = document.getElementById('copiar-btn');
    const divConteudo = document.getElementById('conteudo');

    botaoCopiar.addEventListener('click', () => {
      const texto = divConteudo.textContent;

      navigator.clipboard.writeText(texto)
        .then(() => {
          alert('Texto copiado com sucesso!');
        })
        .catch(err => {
          alert('Falha ao copiar texto: ' + err);
        });
    });