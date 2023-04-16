  //Hacemos la funcion con los diferentes metodos para invertir la cadena
function InvertirPalabras(Cadena) {
    // Dividir la cadena en un array de palabras con el metodo split
    var palabrasArray = Cadena.split(" ");
    
    // Invertir el orden del array de palabras
    var palabrasInvertidasArray = palabrasArray.reverse();
    
    // Unir las palabras invertidas en una cadena
    var cadenaInvertida = palabrasInvertidasArray.join(" ");
    
    // Devolver la cadena invertida
    return cadenaInvertida;
  }

console.log(InvertirPalabras("Maria Del Carmen")); // "mundo Hola"




