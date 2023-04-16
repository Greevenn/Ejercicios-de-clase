//28.Escribe una función que tome tres parámetros booleanos y devuelva
//verdadero si al menos uno de los tres parámetros es verdadero, de lo
//contrario, debe devolver falso.

function alMenosUnoEsVerdadero(a, b, c) {
    return a || b || c ;//valoramos los booleanos
  
    
  }

console.log(alMenosUnoEsVerdadero(true,false,false));// verdadero true
  