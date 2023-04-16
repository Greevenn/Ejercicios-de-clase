//30.Escribe una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo con todas las palabras en minúscula.
function palabrasEnMinuscula(arreglo) {
    var nuevoArreglo = [];
    for (var i = 0; i < arreglo.length; i++) {
      nuevoArreglo.push(arreglo[i].toLowerCase());//aplica el método toLowerCase() para convertir cada string en minúscula. 
    }
    return nuevoArreglo;
  }
  
  console.log(palabrasEnMinuscula(["HOLA BB"])); //repuesta hola bb
