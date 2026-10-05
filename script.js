/**
 * Script interactivo para la página del curso Desarrollo Web
 * Universidad Técnica de Manabí
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Asignar año dinámico al pie de página
  const spanAnio = document.getElementById("anio-actual");
  if (spanAnio) {
    spanAnio.textContent = new Date().getFullYear();
  }

  // 2. Manejo y validación del formulario de contacto
  const formulario = document.getElementById("formulario-contacto");
  const mensajeEstado = document.getElementById("mensaje-estado");

  formulario.addEventListener("submit", (evento) => {
    // Evitar que el navegador recargue la página (comportamiento por defecto)
    evento.preventDefault();

    // Obtener los valores de los campos y quitar espacios sobrantes
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar que ningún campo quede vacío
    if (!nombre || !correo || !mensaje) {
      mostrarMensaje("Por favor, completa todos los campos requeridos.", "error");
      return;
    }

    // Expresión regular estándar para comprobar estructura de correo
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronCorreo.test(correo)) {
      mostrarMensaje("El formato del correo electrónico no es válido.", "error");
      return;
    }

    // Mensaje de éxito si las validaciones pasan
    mostrarMensaje(
      `¡Gracias por tu mensaje, ${nombre}! Nos comunicaremos pronto a ${correo}.`,
      "exito"
    );

    // Limpiar los campos del formulario tras el envío simulado
    formulario.reset();
  });

  /**
   * Función para mostrar avisos al estudiante en la interfaz sin alertas invasivas
   * @param {string} texto - Contenido del mensaje
   * @param {'exito' | 'error'} tipo - Categoría para aplicar estilos visuales
   */
  function mostrarMensaje(texto, tipo) {
    mensajeEstado.textContent = texto;
    mensajeEstado.className = "mensaje-estado"; // Limpia clases previas

    if (tipo === "exito") {
      mensajeEstado.classList.add("mensaje-exito");
    } else {
      mensajeEstado.classList.add("mensaje-error");
    }
  }
});