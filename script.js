const nodos = [
  {
    id: "BOT-001",
    ubicacion: "La Rambla",
    estado: "conectado",
    tiempo: "Hace 2 min",
  },
  {
    id: "BOT-002",
    ubicacion: "Passeig de Gràcia",
    estado: "alert",
    tiempo: "AHORA",
  },
  {
    id: "BOT-003",
    ubicacion: "Avinguda Diagonal",
    estado: "conectado",
    tiempo: "Hace 10 min",
  },
  {
    id: "BOT-004",
    ubicacion: "Gran Via de les Corts",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-005",
    ubicacion: "El Raval",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-006",
    ubicacion: "Barrio Gótico",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-007",
    ubicacion: "El Born",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-008",
    ubicacion: "Barceloneta",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-009",
    ubicacion: "Sagrada Familia",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-010",
    ubicacion: "Gràcia",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-011",
    ubicacion: "Sants",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-012",
    ubicacion: "Les Corts",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-013",
    ubicacion: "Poblenou",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-014",
    ubicacion: "Sant Martí",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
  {
    id: "BOT-015",
    ubicacion: "Montjuïc",
    estado: "desconectado",
    tiempo: "Desconectado",
  },
];

const tablaCuerpo = document.getElementById("tabla-cuerpo");

function cargarTabla() {
  tablaCuerpo.innerHTML = "";

  // Posibles estados para la aleatorización
  const opcionesEstado = ["conectado", "desconectado", "alert"];

  nodos.forEach((nodo) => {
    // Aleatorizamos el estado del nodo antes de pintarlo
    const estadoAleatorio =
      opcionesEstado[Math.floor(Math.random() * opcionesEstado.length)];

    const fila = document.createElement("tr");
    let claseEstado = "";
    let textoEstado = "";
    let tiempoTexto = nodo.tiempo;

    if (estadoAleatorio === "conectado") {
      claseEstado = "conectado";
      textoEstado = "OPERATIVO";
      tiempoTexto = "En línea";
    } else if (estadoAleatorio === "alert") {
      claseEstado = "error-critico";
      textoEstado = "¡SOS ACTIVADO!";
      tiempoTexto = "AHORA";
    } else {
      claseEstado = "desconectado";
      textoEstado = "FUERA DE LÍNEA";
      tiempoTexto = "Desconectado";
    }

    fila.innerHTML = `
            <td>${nodo.id}</td>
            <td>${nodo.ubicacion}</td>
            <td><span class="etiqueta-estado ${claseEstado}">${textoEstado}</span></td>
            <td>${tiempoTexto}</td>
        `;
    tablaCuerpo.appendChild(fila);
  });
}

window.onload = cargarTabla;
