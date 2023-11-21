// Obtener el ID del personalizador de la URL
const urlParams = new URLSearchParams(window.location.search);
const personalizadorId = urlParams.get("personalizador");

// Obtener los trabajos y la información adicional del personalizador desde personalizadores.json
fetch("personalizadores.json")
  .then((response) => response.json())
  .then((data) => {
    const personalizador = data.find((p) => p.id === parseInt(personalizadorId));
    if (personalizador) {
      const imagenElement = document.getElementById("imagen");
      imagenElement.src = personalizador.imagen;
      imagenElement.alt = personalizador.nombre;

      const informacionElement = document.getElementById("informacion");
      informacionElement.textContent = personalizador.informacion;

      const nombreElement = document.getElementById("nombre");
      nombreElement.textContent = personalizador.nombre;

      // Trabajo 1
      const trabajoImagenElement1 = document.getElementById("trabajoImagen1");
      trabajoImagenElement1.src = personalizador.trabajoImagen1;
      trabajoImagenElement1.alt = personalizador.trabajoTitulo1;

      const trabajoTituloElement1 = document.getElementById("trabajoTitulo1");
      trabajoTituloElement1.textContent = personalizador.trabajoTitulo1;

      const trabajoDescripcionElement1 = document.getElementById("trabajoDescripcion1");
      trabajoDescripcionElement1.textContent = personalizador.trabajoDescripcion1;

      // Trabajo 2
      const trabajoImagenElement2 = document.getElementById("trabajoImagen2");
      trabajoImagenElement2.src = personalizador.trabajoImagen2;
      trabajoImagenElement2.alt = personalizador.trabajoTitulo2;

      const trabajoTituloElement2 = document.getElementById("trabajoTitulo2");
      trabajoTituloElement2.textContent = personalizador.trabajoTitulo2;

      const trabajoDescripcionElement2 = document.getElementById("trabajoDescripcion2");
      trabajoDescripcionElement2.textContent = personalizador.trabajoDescripcion2;

      // Trabajo 3
      const trabajoImagenElement3 = document.getElementById("trabajoImagen3");
      trabajoImagenElement3.src = personalizador.trabajoImagen3;
      trabajoImagenElement3.alt = personalizador.trabajoTitulo3;

      const trabajoTituloElement3 = document.getElementById("trabajoTitulo3");
      trabajoTituloElement3.textContent = personalizador.trabajoTitulo3;

      const trabajoDescripcionElement3 = document.getElementById("trabajoDescripcion3");
      trabajoDescripcionElement3.textContent = personalizador.trabajoDescripcion3;

      // Trabajo 4
      const trabajoImagenElement4 = document.getElementById("trabajoImagen4");
      trabajoImagenElement4.src = personalizador.trabajoImagen4;
      trabajoImagenElement4.alt = personalizador.trabajoTitulo4;

      const trabajoTituloElement4 = document.getElementById("trabajoTitulo4");
      trabajoTituloElement4.textContent = personalizador.trabajoTitulo4;

      const trabajoDescripcionElement4 = document.getElementById("trabajoDescripcion4");
      trabajoDescripcionElement4.textContent = personalizador.trabajoDescripcion4;

      // Trabajo 5
      const trabajoImagenElement5 = document.getElementById("trabajoImagen5");
      trabajoImagenElement5.src = personalizador.trabajoImagen5;
      trabajoImagenElement5.alt = personalizador.trabajoTitulo5;

      const trabajoTituloElement5 = document.getElementById("trabajoTitulo5");
      trabajoTituloElement5.textContent = personalizador.trabajoTitulo5;

      const trabajoDescripcionElement5 = document.getElementById("trabajoDescripcion5");
      trabajoDescripcionElement5.textContent = personalizador.trabajoDescripcion5;

      // Trabajo 6
      const trabajoImagenElement6 = document.getElementById("trabajoImagen6");
      trabajoImagenElement6.src = personalizador.trabajoImagen6;
      trabajoImagenElement6.alt = personalizador.trabajoTitulo6;

      const trabajoTituloElement6 = document.getElementById("trabajoTitulo6");
      trabajoTituloElement6.textContent = personalizador.trabajoTitulo6;

      const trabajoDescripcionElement6 = document.getElementById("trabajoDescripcion6");
      trabajoDescripcionElement6.textContent = personalizador.trabajoDescripcion6;
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos del personalizador:", error);
  });
