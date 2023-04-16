//15.Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los números en el arreglo.

function sumaArregloNumeros(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];//sumamos todo los numeros
    }
    return suma;
  }
  console.log(sumaArregloNumeros([1,2,3]));//se imprime 6