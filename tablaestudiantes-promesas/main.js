
let currentId = 0; // Cambia el valor inicial del ID

function abrirModal() {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    resolve();
  });
}

function cerrarModal() {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    resolve();
  });
}

function agregarEstudianteDesdeModal() {
  return new Promise((resolve, reject) => {
    const nombre = document.getElementById("nombre").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const definitiva = (nota1 + nota2 + nota3) / 3;

    if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      agregarEstudiante(currentId++, nombre, nota1, nota2, nota3, definitiva)
        .then(() => {
          return cerrarModal();
        })
        .then(() => {
          console.log("Estudiante agregado correctamente");
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject("Error al agregar estudiante");
        });
    } else {
      console.error("Por favor, ingresa datos válidos.");
      reject("Datos inválidos");
    }
  });
}

function agregarEstudiante(id, nombre, nota1, nota2, nota3, definitiva) {
  return new Promise((resolve, reject) => {
    const tabla = document.getElementById("tablaEstudiantes");
    const nuevaFila = tabla.insertRow(-1);

    nuevaFila.setAttribute("data-id-estudiante", id); // Almacena el ID en un atributo personalizado

    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    const celda3 = nuevaFila.insertCell(2);
    const celda4 = nuevaFila.insertCell(3);
    const celda5 = nuevaFila.insertCell(4);
    const celda6 = nuevaFila.insertCell(5);
    const celda7 = nuevaFila.insertCell(6);

    celda1.innerHTML = id;
    celda2.innerHTML = nombre;
    celda3.innerHTML = nota1;
    celda4.innerHTML = nota2;
    celda5.innerHTML = nota3;
    celda6.innerHTML = definitiva.toFixed(2);
    celda7.innerHTML = `
      <button class="editing" data-id-estudiante="${id}" onclick="editarEstudiante(${id})">Editar</button>
      <button onclick="eliminarEstudiante(this)">Eliminar</button>
    `;

    resolve();
  });
}

let estudianteAEditar = null;

function editarEstudiante(id) {
  return new Promise((resolve, reject) => {
    const modalEdit = document.getElementById("myModalEdit");
    modalEdit.style.display = "block";

    estudianteAEditar = id;

    const fila = document.querySelector(
      `#tablaEstudiantes tr[data-id-estudiante="${id}"]`
    );
    const celdas = fila.cells;

    const nombre = celdas[1].innerHTML;
    const nota1 = parseFloat(celdas[2].innerHTML);
    const nota2 = parseFloat(celdas[3].innerHTML);
    const nota3 = parseFloat(celdas[4].innerHTML);

    document.getElementById("idEdit").value = id;
    document.getElementById("nombreEdit").value = nombre;
    document.getElementById("nota1Edit").value = nota1;
    document.getElementById("nota2Edit").value = nota2;
    document.getElementById("nota3Edit").value = nota3;

    resolve();
  });
}

function cerrarModalEdit() {
  return new Promise((resolve, reject) => {
    const modalEdit = document.getElementById("myModalEdit");
    modalEdit.style.display = "none";
    resolve();
  });
}

function guardarEstudianteEditado() {
  return new Promise((resolve, reject) => {
    const id = estudianteAEditar;
    const nombre = document.getElementById("nombreEdit").value;
    const nota1 = parseFloat(document.getElementById("nota1Edit").value);
    const nota2 = parseFloat(document.getElementById("nota2Edit").value);
    const nota3 = parseFloat(document.getElementById("nota3Edit").value);
    const definitiva = (nota1 + nota2 + nota3) / 3;

    if (
      !isNaN(id) &&
      nombre &&
      !isNaN(nota1) &&
      !isNaN(nota2) &&
      !isNaN(nota3)
    ) {
      const tabla = document.getElementById("tablaEstudiantes");
      const fila = tabla.querySelector(`tr[data-id-estudiante="${id}"]`);
      const celdas = fila.cells;

      celdas[1].innerHTML = nombre;
      celdas[2].innerHTML = nota1;
      celdas[3].innerHTML = nota2;
      celdas[4].innerHTML = nota3;
      celdas[5].innerHTML = definitiva.toFixed(2);

      return cerrarModalEdit()
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      alert("Por favor, ingresa datos válidos.");
      reject("Datos inválidos");
    }
  });
}

function eliminarEstudiante(boton) {
  return new Promise((resolve, reject) => {
    const fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    resolve();
  });
}

// Función para cargar estudiantes desde una fuente de datos (por ejemplo, una API o un archivo JSON)
function cargarEstudiantes() {
  // Llamamos a la función getData para obtener los datos de los estudiantes
  getData()
    .then((estudiantes) => {
      // Agregar los estudiantes a la tabla
      estudiantes.forEach((estudiante) => {
        agregarEstudiante(
          estudiante.id,
          estudiante.nombre,
          estudiante.nota1,
          estudiante.nota2,
          estudiante.nota3,
          (estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3
        );
      });
    })
    .catch((error) => {
      console.error("Error al cargar los estudiantes:", error);
    });
}

// Llamamos a la función cargarEstudiantes cuando se cargue la página
window.addEventListener("load", cargarEstudiantes);
