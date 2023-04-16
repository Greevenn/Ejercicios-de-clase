//22.Escribe una función que tome un número como parámetro y devuelva el cubo de su valor si el número es negativo, o el doble del valor si no lo es.
function calcularCuboODoble(numero) {
    if (numero < 0) {
      return Math.pow(numero, 3); // cubo del número
    } else {
      return numero * 2; // doble del número
    }
  }
  console.log(calcularCuboODoble(-2)); // -8 resultado