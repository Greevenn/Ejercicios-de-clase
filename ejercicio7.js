//Escribe una función que tome dos números como parámetros y devuelva el número mayor.


function numeroMayor(num1, num2) {
    //se utiliza un ciclo para ver cual es el mayor 
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(numeroMayor(1,2)); //se imprime
  