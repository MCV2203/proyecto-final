const nodos = [
  { 
    id: "BOT-001", 
    ubicacion: "La Rambla", 
    tiempo: "Hace 2 min" 
  },
  { 
    id: "BOT-002", 
    ubicacion: "Passeig de Gràcia", 
    tiempo: "AHORA" 
  },
  { 
    id: "BOT-003", 
    ubicacion: "Avinguda Diagonal", 
    tiempo: "Hace 10 min" 
  },
  { 
    id: "BOT-004", 
    ubicacion: "Gran Via de les Corts", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-005", 
    ubicacion: "El Raval", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-006", 
    ubicacion: "Barrio Gótico", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-007", 
    ubicacion: "El Born", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-008", 
    ubicacion: "Barceloneta", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-009", 
    ubicacion: "Sagrada Familia", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-010", 
    ubicacion: "Gràcia", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-011", 
    ubicacion: "Sants", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-012", 
    ubicacion: "Les Corts", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-013", 
    ubicacion: "Poblenou", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-014", 
    ubicacion: "Sant Martí", 
    tiempo: "Desconectado" 
  },
  { 
    id: "BOT-015", 
    ubicacion: "Montjuïc", 
    tiempo: "Desconectado" 
  },
];

function cargarTabla() {
  const tablaCuerpo = document.getElementById("tabla-cuerpo");
  if (!tablaCuerpo) return;

  tablaCuerpo.innerHTML = "";
  const opcionesEstado = ["conectado", "desconectado", "alert"];

  nodos.forEach((nodo) => {
    const estadoAleatorio =
      opcionesEstado[Math.floor(Math.random() * opcionesEstado.length)];
    const fila = document.createElement("tr");

    let claseEstado, textoEstado, tiempoTexto;

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
            <td><span class="estado-visual ${claseEstado}">${textoEstado}</span></td>
            <td>${tiempoTexto}</td>
        `;
    tablaCuerpo.appendChild(fila);
  });
}

window.onload = cargarTabla;
setInterval(cargarTabla, 5000);