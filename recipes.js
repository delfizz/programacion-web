document.addEventListener('DOMContentLoaded', function () {
    // Fecha de lanzamiento (año, mes (0-11), día)
    const fechaLanzamiento = new Date(2023, 10, 30); // Ajusta la fecha según tus necesidades
  
    // Función para actualizar el contador de días
    function actualizarContador() {
      const ahora = new Date(2023,10,20);
      const diferenciaTiempo = fechaLanzamiento - ahora;
  
      // Calcula los días restantes
      const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  
      // Actualiza el contenido del elemento HTML
      const contadorElemento = document.getElementById('contador-dias');
      contadorElemento.textContent = `Faltan ${diasRestantes} días para el lanzamiento.`;
    }
  
    // Actualiza el contador al cargar la página
    actualizarContador();
  
    // Actualiza el contador cada día (86400000 milisegundos en un día)
    setInterval(actualizarContador, 86400000);
  });
  