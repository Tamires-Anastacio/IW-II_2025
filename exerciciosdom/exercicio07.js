const campo = document.getElementById('campoTexto');

    campo.addEventListener('input', () => {
      if (campo.value.length < 5) {
        campo.classList.add('invalido');
      } else {
        campo.classList.remove('invalido');
      }
    });