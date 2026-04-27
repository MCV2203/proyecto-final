const datos = {
  rambla: {
    titulo: "La Rambla",
    estado: "En proceso",
    texto: "Una de las calles más conocidas de Barcelona, muy turística y con gran afluencia de personas durante todo el año.",
    conflictiva: true,
    explicacion: "Zona con alta concentración turística y presencia de carteristas.",
    imagen: "https://www.locabarcelona.com/wp-content/uploads/2024/09/Las-Ramblas-Barcelona.jpg"
  },
  passeigdegracia: {
    titulo: "Passeig de Gràcia",
    estado: "Instalado",
    texto: "Avenida emblemática con tiendas de lujo y arquitectura modernista.",
    conflictiva: false,
    explicacion: "Zona muy vigilada con baja incidencia de delitos.",
    imagen: "https://bcnmagica.com/imagenes/passeig-de-gracia.jpg"
  },
  diagonal: {
    titulo: "Avinguda Diagonal",
    estado: "Instalado",
    texto: "Una de las principales arterias de la ciudad.",
    conflictiva: false,
    explicacion: "Zona amplia y estable con buena seguridad general.",
    imagen: "https://miniatures-bima.dtibcn.cat/1024x0/filters:format(jpeg)/bima/DISE/059061512060915.jpg?signature=4851fa8d5fb1b0dcdc6a32c042ca210cb384dcb716a7283cff5c596d288a7e4d"
  },
  raval: {
    titulo: "El Raval",
    estado: "Instalado",
    texto: "Zona céntrica con gran diversidad cultural.",
    conflictiva: true,
    explicacion: "Históricamente asociada a robos menores y actividad nocturna conflictiva.",
    imagen: "https://imagenes.elpais.com/resizer/v2/USHS2GV5RNO57L5EGFJUXUBADA.jpg?auth=61c061d1aef05c293738360edb270fa1c01d2b3db95d36aa969cb97fb273aab4&width=1960&height=1103&smart=true"
  },
  gotico: {
    titulo: "Barrio Gótico",
    estado: "En proceso",
    texto: "Centro histórico de Barcelona.",
    conflictiva: true,
    explicacion: "Calles estrechas y alta afluencia turística facilitan hurtos.",
    imagen: "https://bcnmagica.com/imagenes/musico-pont-del-bisbe-1-930x620.jpg"
  },
  born: {
    titulo: "El Born",
    estado: "Instalado",
    texto: "Zona cultural y de ocio muy activa.",
    conflictiva: false,
    explicacion: "Zona segura con ambiente turístico y local equilibrado.",
    imagen: "https://thisismed.com/wp-content/uploads/2025/01/museo-picasso-de-barcelona-1.jpg__2560.0x1707.0_q85_subsampling-2-1.jpg"
  },
  barceloneta: {
    titulo: "Barceloneta",
    estado: "Instalado",
    texto: "Zona de playa con mucha afluencia turística.",
    conflictiva: true,
    explicacion: "Robos oportunistas en temporada alta.",
    imagen: "https://estatics-nasia.dtibcn.cat/nasia-pro/media/201505platja-barceloneta.optimized.0134252f.jpg"
  },
  sagrada: {
    titulo: "Sagrada Familia",
    estado: "Instalado",
    texto: "Zona del monumento más visitado de Barcelona.",
    conflictiva: false,
    explicacion: "Zona altamente vigilada por su importancia turística.",
    imagen: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1112/home-hero-dk-1.jpg"
  },
  gracia: {
    titulo: "Gràcia",
    estado: "No instalado",
    texto: "Barrio tranquilo con vida local.",
    conflictiva: false,
    explicacion: "Zona residencial con baja criminalidad.",
    imagen: "https://www.barcelife.com/wp-content/uploads/2023/11/Descubriendo-el-barrio-de-Gracia-Arte-y-vida-bohemia-en-Barcelona1.jpg"
  },
  sants: {
    titulo: "Sants",
    estado: "Instalado",
    texto: "Zona residencial y de transporte.",
    conflictiva: false,
    explicacion: "Zona estable y bien conectada.",
    imagen: "https://www.shbarcelona.com/blog/es/wp-content/uploads/2016/09/telefono-gratuito-estacion-de-barcelona-sants-810x477.jpg"
  },
  lescorts: {
    titulo: "Les Corts",
    estado: "Instalado",
    texto: "Zona residencial tranquila.",
    conflictiva: false,
    explicacion: "Una de las zonas más seguras de Barcelona.",
    imagen: "https://www.eixnoubarris.com/media/eixnoubarris/image/noticias/532_Foto.1742681561.jpg"
  },
  poblenou: {
    titulo: "Poblenou",
    estado: "En proceso",
    texto: "Zona moderna y tecnológica.",
    conflictiva: false,
    explicacion: "Área en desarrollo con baja conflictividad.",
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/84/2a/82/fb-img-1447447192323.jpg?w=900&h=500&s=1"
  },
  santmarti: {
    titulo: "Sant Martí",
    estado: "No instalado",
    texto: "Zona mixta industrial y residencial.",
    conflictiva: false,
    explicacion: "Seguridad variable pero generalmente estable.",
    imagen: "https://images.trvl-media.com/place/179733/5db5f72b-134d-45c4-a59e-1358aa9c6b44.jpg"
  },
  montjuic: {
    titulo: "Montjuïc",
    estado: "No instalado",
    texto: "Zona verde con museos y vistas.",
    conflictiva: false,
    explicacion: "Zona turística y natural muy controlada.",
    imagen: "https://cdn.civitatis.com/guias/barcelona/fotos/museo-nacional-arte-cataluna.jpg"
  }
};

const panel = document.getElementById("panelInfo");
const contenido = document.getElementById("contenido");
const fondo = document.getElementById("fondo");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".calle").forEach(calle => {
  calle.addEventListener("click", () => {

    const zona = calle.dataset.zona;
    const d = datos[zona];

    // estado del sistema
    let claseEstado = "";
    if (d.estado === "Instalado") claseEstado = "good";
    else if (d.estado === "En proceso") claseEstado = "mid";
    else if (d.estado === "No instalado") claseEstado = "bad";

    // estado de zona conflictiva
    let claseZona = d.conflictiva ? "bad" : "good";
    let textoZona = d.conflictiva ? "⚠ Zona conflictiva" : "Zona no conflictiva";

    contenido.innerHTML = `
      <h2 style="text-align:center; margin-bottom:10px;">
        ${d.titulo}
      </h2>

      <p class="${claseEstado}" style="text-align:left; font-weight:bold;">
        Botón de emergencia: ${d.estado}
      </p>

      <p class="${claseZona}" style="text-align:left; font-weight:bold;">
        ${textoZona}
      </p>

      <p><strong>Info:</strong> ${d.texto}</p>

      <p><strong>Motivo:</strong> ${d.explicacion}</p>

      <div style="text-align:center; margin-top:15px;">
        <img src="${d.imagen}" style="width:100%; border-radius:12px;">
      </div>
    `;

    panel.classList.remove("oculto");
    fondo.classList.remove("oculto");
  });
});

function cerrarModal() {
  panel.classList.add("oculto");
  fondo.classList.add("oculto");
}

cerrar.addEventListener("click", cerrarModal);
fondo.addEventListener("click", cerrarModal);