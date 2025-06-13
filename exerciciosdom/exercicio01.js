
    function mostrarHora() {
      const agora = new Date();
      const horaFormatada = agora.toLocaleTimeString(); // formato local, ex: 14:35:12
      document.getElementById("hora").textContent = `Hora atual: ${horaFormatada}`;
    }
  