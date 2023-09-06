let local;
let hola;
let color;

function remeras() {
  talle = prompt("tenemos en talla s, m y l ");
  if (talle == "s" || talle == "m") {
    color = prompt("tenes en color blanco y negro");
  } else {
    alert("en este momento no tenemos remeras en esa talla");
  }
}

function zapatillas() {
  talle = parseInt(prompt("tenemos en talla 36, 38 y 39 "));
  if (talle == "36") {
    color = prompt("tenes en color blanco y negro");
  } else if (talle == "38") {
    color = prompt("tenes en color verde y azul");
    if (color == "verde") {
      alert("las verdes tienen un 25% de descuento");
    } else if (color == "azul") {
      alert("las azules tienen un 15% de descuento");
    } else {
      alert("esta zapatilla no tiene descuento");
    }
  } else {
    alert("en este momento no tenemos zapatillas en esa talla");
  }
}
function pantalones() {
  talle = prompt("tenemos en talla 40, 42 y 44 ");
  if (talle == "40") {
    color = prompt("tenes en color morados y beige");
  } else if (talle <= "39") {
    color = prompt("tenes solo en color negro");
  } else if (talle >= "44") {
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
        case "pantalones":
          pantalones();
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

alert("su compra es una " + hola + " talle " + talle + " de color " + color);
