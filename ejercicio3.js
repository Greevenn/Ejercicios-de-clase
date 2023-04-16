//Escribe una función que tome un arreglo de números como parámetro y  devuelva la suma de todos los elementos del arreglo.
function sumatodo(arreglo){
    let suma=0;//igualamos la variable a 0
    for (let i= 0; i < arreglo.length; i++) { //recorremos el arreglo
         suma += arreglo[i];//operacion acumuladora del arreglo
        
    }
    return suma;
}
console.log(sumatodo([1,1,1,1]));// tienen que dar 4


