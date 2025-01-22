/*
let numeroSecreto = 0;
let intentos = 1;
let ListaNunerosSorteados=[];
let numeroMAximo=10;

function verificarIntento() {
  let numeroUsruario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsruario === numeroSecreto) {
    asignarElemento(
      "p",
      `acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    asignarElemento("h1", "acertaste en el inteto " + intentos);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsruario > numeroSecreto) {
      asignarElemento("p", "el numero secreto es menor");
    } else {
      asignarElemento("p", "el numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}


function reiniciar() {
  intentos = 1;
  document.getElementById("reiniciar").disabled = true;
  condicionesIniciales();
  limpiarCaja();
}
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
function asignarElemento(etiqueta, mensaje) {
  let elemento = document.querySelector(etiqueta);
  elemento.innerHTML = mensaje;
}

function generarNumeroSecreto() {
  
  let numeroGenerado = Math.floor(Math.random() *numeroMAximo) + 1;
  console.log(numeroGenerado);
  if (ListaNunerosSorteados.length==numeroMAximo){
    asignarElemento("p", "Se han agotado los numeros disponibles");
  }else{
  console.log(ListaNunerosSorteados);
    if (ListaNunerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    }else{
      ListaNunerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  return ListaNunerosSorteados.push( Math.floor(Math.random() * 10) + 1);
}

condicionesIniciales();
function condicionesIniciales(){
  numeroSecreto = generarNumeroSecreto();
  asignarElemento("h1", "Juego del numero secreto");
  asignarElemento("p", `indica un numero del 1 al ${numeroMAximo}`);
  
}
*/
let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
//'Java', 'Ruby' y 'GoLang
lenguajesDeProgramacion.push("java", "Ruby", "GoLang");
function mostrarLista(lista) {
  console.log(lista);
}
mostrarLista(lenguajesDeProgramacion);
function mostrarListaInversa(lista) {
  console.log(lista.reverse());
}
mostrarListaInversa(lenguajesDeProgramacion);

function p(lista1) {
  let lista2 = [];
  for (let i = 0; i < lista1.length; i++) {
    lista2.push(lista1[i]*lista1[i]);
  }
  return lista2;
}
let numeros1 = [2, 1, 3, 8, 9, 4, 7, 4, 6, 5];
let numeros2 =p(numeros1);
console.log(numeros2);
console.log(numeros1);
