//20.Escribe una función que tome un arreglo como parámetro y devuelva una
//copia del arreglo invertido
function invertirArreglo(arreglo) {
    //Es importante utilizar el método slice() para hacer una copia del arreglo original antes de invertirlo, ya que el método reverse() modifica el arreglo original.
    return arreglo.slice().reverse();
  }
  console.log(invertirArreglo([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]