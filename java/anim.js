var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición en segundos y su duración en segundos
var lyricsData = [
  { text: "Yves Saint Laurent", time: 33, duration: 1 },
  { text: "Y si no es Dior, que no la llamen", time: 34, duration: 5 },
  { text: "Te encantan todos los detalles", time: 39, duration: 2 },
  { text: "Y ahí es donde entro yo", time: 41, duration: 4 },
  { text: "Sus quedantes", time: 45, duration: 2 },
  { text: "De empresarios a traficantes", time: 47, duration: 3 },
  { text: "No me asustan esos don nadie", time: 50, duration: 2 },
  { text: "Conmigo vas a estar", time: 52, duration: 4 },
  { text: "Y ya no sé por dónde empezar", time: 56, duration: 3 },
  { text: "Tú domaste mi instinto animal", time: 59, duration: 3 },
  { text: "¿Cuántos Rolex te ocupo comprar?", time: 62, duration: 3 },
  { text: "Un besito, nada más", time: 65, duration: 3 },
  { text: "Le mando dinero a tus papás", time: 68, duration: 2 },
  { text: "Muevo el mundo si es por ti, nomás", time: 70, duration: 3 },
  { text: "Tú eres Madonna en la actualidad", time: 73, duration: 3 },
  { text: "Mi güerita flow rockstar", time: 76, duration: 4 },
  { text: "¡Ea! Pa' que sepas cuánto te quiero, mija", time: 80, duration: 10 },
  { text: " ♡  ♡  ♡  ♡ ", time: 90, duration: 11 },
  { text: "Bolsa Birkin", time: 101, duration: 2 },
  { text: "Me pegué un tiro pa' comprarla", time: 103, duration: 3 },
  { text: "No te preocupes por la lana", time: 106, duration: 3 },
  { text: "Tú vales eso y más", time: 109, duration: 3 },
  { text: "Lady Gaga", time: 112, duration: 2 },
  { text: "No toma si no es con champaña", time: 114, duration: 3 },
  { text: "Los vidrios rápido se empañan", time: 117, duration: 3 },
  { text: "Me besa al manejar", time: 120, duration: 4 },
  { text: "Y ya no sé por dónde empezar", time: 124, duration: 2 },
  { text: "Tú domaste mi instinto animal", time: 126, duration: 3 },
  { text: "¿Cuántos Rolex te ocupo comprar?", time: 129, duration: 3 },
  { text: "Un besito, nada más", time: 132, duration: 3 },
  { text: "Le mando dinero a tus papás", time: 135, duration: 2 },
  { text: "Muevo el mundo si es por ti, nomás", time: 137, duration: 4 },
  { text: "Eres Madonna en la actualidad", time: 141, duration: 2 },
  { text: "Mi güerita flow rockstar", time: 143, duration: 3 },
  { text: "Ah, ah, ah", time: 146, duration: 9 },
  { text: "¡Uh! Mi güerita flow rockstar  ♡  ♡ ", time: 155, duration: 6 },
  { text: " ♡  ♡ ♡ ♡ ♡ ♡ ♡", time: 155, duration:25 }
];

function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var timeSinceLineStart = time - currentLine.time;
    var opacity = Math.min(1, timeSinceLineStart / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics);
}

audio.addEventListener("play", function() {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function() {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
