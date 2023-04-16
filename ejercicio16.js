//16.Escribe una función que tome dos números como parámetros y devuelva el
//número menor.
function numeromenor(num1,num2){
    if (num1 < num2) { //validamos si el numero es menor 
        return num1;
      } else {
        return num2;
      }
}
console.log(numeromenor(1,2));// se imprime 1
