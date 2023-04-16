// 27.Escribe una función que tome dos números y un booleano como parámetros.
//Si el booleano es verdadero, la función debe devolver la multiplicación de los
//dos números; de lo contrario, debe devolver su diferencia.

function operacion(num1, num2, booleano) {
    if(booleano) {//validamos la funcion si es verdadera
      return num1 * num2;
    } else {
      return num1 - num2;
    }
  }
console.log(operacion(1,2,true));  //le arrojara 2