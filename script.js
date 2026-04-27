// Datos de ejemplo para tu tabla (Simulación de los botones SOS)
const nodos = [
    { id: "BOT-001", ubicacion: "Acceso Principal Norte", estado: "online", tiempo: "Hace 2 min" },
    { id: "BOT-002", ubicacion: "Pasillo Planta 1", estado: "alert", tiempo: "AHORA" },
    { id: "BOT-003", ubicacion: "Laboratorio I+D", estado: "online", tiempo: "Hace 10 min" },
    { id: "BOT-004", ubicacion: "Almacén Exterior", estado: "offline", tiempo: "Desconectado" },
];

const tablaCuerpo = document.getElementById('tabla-cuerpo');

// Función para llenar la tabla automáticamente
function cargarTabla() {
    nodos.forEach(nodo => {
        const fila = document.createElement('tr');
        
        let claseEstado = "";
        let textoEstado = "";
        
        if(nodo.estado === "online") { claseEstado = "online"; textoEstado = "OPERATIVO"; }
        else if(nodo.estado === "alert") { claseEstado = "alert"; textoEstado = "¡SOS ACTIVADO!"; }
        else { claseEstado = "offline"; textoEstado = "DESCONECTADO"; }

        fila.innerHTML = `
            <td>${nodo.id}</td>
            <td>${nodo.ubicacion}</td>
            <td><span class="status-tag ${claseEstado}">${textoEstado}</span></td>
            <td>${nodo.tiempo}</td>
        `;
        tablaCuerpo.appendChild(fila);
    });
}

// Ejecutar al cargar la página
window.onload = cargarTabla;