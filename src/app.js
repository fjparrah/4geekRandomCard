/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

// function cambiaNumero(){

//     let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//     let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

//     let parrafo = document.getElementById('numero');

//     parrafo.textContent = `${numeroAleatorio}`;

// }

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
