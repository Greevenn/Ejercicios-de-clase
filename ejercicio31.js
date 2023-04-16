//31.Escribe una función en JavaScript que reciba un arreglo de números y retorne
//el promedio de todos los elementos del arreglo.

function promedioArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];//se acumula los elementos del arreglo
    }
    var promedio = suma / arreglo.length;/// se saca el promedio
    return promedio;
  }

console.log(promedioArreglo([20,10,20]));//16.6666