// Fecha de inicio
const fechaInicio = new Date("2024-12-01T00:00:00");

// Contador exacto
function actualizarContador() {
  const ahora = new Date();

  let anios = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
    dias += mesAnterior;
  }
  if (meses < 0) {
    anios--;
    meses += 12;
  }

  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  document.getElementById("contador").textContent =
    `${anios} años, ${meses} meses, ${dias} días, ${horas}h ${minutos}m ${segundos}s`;
}

// Generar grid de meses
function generarMeses() {
  const mesesGrid = document.getElementById("mesesGrid");
  const nombresMeses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"
  ];

  const videos = [
    "img/enero.mp4",
    "img/febrero.mp4",
    "img/marzo.mp4",
    "img/abril.mp4",
    "img/mayo.mp4",
    "img/junio.mp4",
    "img/julio.mp4",
    "img/agosto.mp4",
    "img/setiembre.mp4", // ojo al nombre real
    "img/octubre.mp4",
    "img/noviembre.mp4",
    "img/diciembre.mp4"
  ];

  const ahora = new Date();
  const anioInicio = fechaInicio.getFullYear();
  const anioActual = ahora.getFullYear();

  for (let anio = anioInicio; anio <= anioActual; anio++) {
    for (let mes = 0; mes < 12; mes++) {
      const fechaMes = new Date(anio, mes, 1);
      if (fechaMes < fechaInicio || fechaMes > ahora) continue;

      // Envolvemos cada tarjeta en un <a>
      const link = document.createElement("a");
      link.href = `html/mes.html?anio=${anio}&mes=${mes}`;
      link.classList.add("mes-card");

      // Video preview
      const video = document.createElement("video");
      video.src = videos[mes];
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.classList.add("video-preview");

      // Info debajo
      const info = document.createElement("div");
      info.classList.add("mes-info");

      const titulo = document.createElement("h3");
      titulo.textContent = `${nombresMeses[mes]} ${anio}`;

      const frase = document.createElement("p");
      frase.textContent = "Un mes especial contigo 💕";

      info.appendChild(titulo);
      info.appendChild(frase);

      link.appendChild(video);
      link.appendChild(info);

      mesesGrid.appendChild(link);
    }
  }
}

// Inicializar
if (document.getElementById("contador")) {
  actualizarContador();
  setInterval(actualizarContador, 1000);
}
if (document.getElementById("mesesGrid")) {
  generarMeses();
}
