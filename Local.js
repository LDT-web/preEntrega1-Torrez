// 1 hola q esta buscando tenemos remeras pantalones zapatillas
//elegie una opcion
//2 tenesmos en tallas s m l
//2.5 remeras talla m no hay

//3 color blanco negro gris

//4 preguntar si quere algo mas
// yo pregunto una vez empiezo a elegir y cuando termine q me pregunte si quiero algo mas y

let local;
let hola;
let remera;
let color;

function remeras() {
  talle = prompt("tenemos en talla s, m y l ");
  if (talle == "s" || talle == "m") {
    color = prompt("tenes en color blanco y negro");
  }
  // else if ((talle = "m")) {
  //   color = prompt("tenes en color blanco y negro");
  // }
  else {
    alert("en este momento no tenemos remeras en esa talla");
  }
}

function zapatillas() {
  talle = parseInt(prompt("tenemos en talla 36, 38 y 39 "));
  if (talle == "36") {
    color = prompt("tenes en color blanco y negro");
  } else if ((talle = "38")) {
    color = prompt("tenes en color blanco y negro");
  } else {
    alert("en este momento no tenemos zapatillas en esa talla");
  }
}

while (local != "ir a caja") {
  local = prompt("entrar o ir a caja");
  switch (local) {
    case "ir a caja":
      alert("gracias valla a caja");
      break;
    case "entrar":
      hola = prompt(
        "hola que estas buscando, tenemos \nremeras,\npantalones,\ny zapatillas"
      );
      switch (hola) {
        case "remeras":
          remeras();
          break;
        case "zapatillas":
          zapatillas();
          break;
      }
      break;
    default:
      alert("Esta cerrado.");
      break;
  }
}
// let compras

alert("su compra es una " + hola + " talle " + talle + " de color " + color);
// compra();
// eta maal tengo q cambiar la varriable de producto q al empezar el  bucle empiesa de nuevo ey la variable producto cambia
