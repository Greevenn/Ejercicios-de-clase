//23.Escribe una función que tome una cadena como parámetro y devuelva la cadena en orden inverso. Debe emplear el ciclo for.
function invertirCadena(cadena) {
    var resultado = '';
    for (var i = cadena.length - 1; i >= 0; i--) {
      resultado += cadena[i];
    }
    return resultado;
  }

  console.log(invertirCadena("hola")); //resultado aloh
  