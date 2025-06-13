const campoNome = document.getElementById('nome');

    campoNome.addEventListener('blur', function() {
      if (campoNome.value.trim() === '') {
        alert('O campo "Nome" é obrigatório!');
        campoNome.focus(); // opcional: retorna o foco ao campo
      }
    });