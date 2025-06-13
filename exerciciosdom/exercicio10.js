const lista = document.getElementById('lista');

    lista.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const botao = event.target;
        const li = botao.closest('li');

        if (botao.classList.contains('up')) {
          const prev = li.previousElementSibling;
          if (prev) {
            lista.insertBefore(li, prev);
          }
        } else if (botao.classList.contains('down')) {
          const next = li.nextElementSibling;
          if (next) {
            lista.insertBefore(next, li);
          }
        }
      }
    });