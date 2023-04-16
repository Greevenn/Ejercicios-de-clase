//29.Escribe una función que tome dos parámetros numéricos y un parámetro
//booleano. Si el tercer parámetro es verdadero, la función debe devolver el
//resultado de elevar el primer parámetro a la potencia del segundo parámetro,
//de lo contrario, debe devolver la raíz cuadrada del primer parámetro.
function operacion(num1, num2, booleano) {
    if(booleano) {
      return Math.pow(num1, num2);// utilizamos el metodo math.pow para elevarlo
    } else {
      return Math.sqrt(num1);// sacamos la raiz cuadrada
    }
  }
console.log(operacion(5, 3, true)); // Devuelve 125 (5 elevado a la potencia de 3)
console.log(operacion(25, 0.5, false)); // Devuelve 5 (la raíz cuadrada de 25)

  