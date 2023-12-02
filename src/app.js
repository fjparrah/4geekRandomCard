function obtenerNumeroAleatorio() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K"];
  let numeroAl = numeros[Math.floor(Math.random() * numeros.length)];

  return numeroAl;

  // return Math.floor(Math.random() * 12) + 1;
}

function manejarClick() {
  let numeroAleatorio = obtenerNumeroAleatorio();
  let parrafo = document.getElementById("numero");
  parrafo.innerHTML = numeroAleatorio;
  // parrafo.textContent = numeroAleatorio;
  //
}

// Agrega un listener al evento 'click' en la ventana (pantalla)
// document.addEventListener("click", manejarClick);
manejarClick();
