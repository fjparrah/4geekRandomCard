function obtenersignoAleatorio() {
  let picas = [
    "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/2665.svg",
    "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/2660.svg",
    "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/2663.svg",
    "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/svg/2666.svg",
  ];
  let picaElegida = picas[Math.floor(Math.random() * picas.length)];

  return picaElegida;
}

function obtenerNumeroAleatorio() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K"];
  let numeroAl = numeros[Math.floor(Math.random() * numeros.length)];

  return numeroAl;
}

function manejarClick() {
  let numeroAleatorio = obtenerNumeroAleatorio();
  let parrafo = document.getElementById("numero");
  parrafo.innerHTML = numeroAleatorio;

  //signo
  let signoAleatorio = obtenersignoAleatorio();
  let signo = document.getElementById("imagen");
  let signo1 = document.getElementById("imagen1");
  signo.src = signoAleatorio;
  signo1.src = signoAleatorio;
}

// Agrega un listener al evento 'click' en la ventana (pantalla)
// document.addEventListener("click", manejarClick);
manejarClick();

setTimeout(manejarClick, 10000);

