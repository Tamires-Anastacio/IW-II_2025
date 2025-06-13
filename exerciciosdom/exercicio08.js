const btn = document.getElementById('gerar-btn');
    const container = document.getElementById('container');

    function corAleatoria() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    btn.addEventListener('click', () => {
      container.innerHTML = ''; // limpa container antes de gerar

      for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        div.classList.add('quadrado');
        div.style.backgroundColor = corAleatoria();
        container.appendChild(div);
      }
    });