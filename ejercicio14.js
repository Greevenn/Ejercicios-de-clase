//Escriba una funcion que tome dos cadena como parametro y devuelva true si ambas cadena son anagramas es decir si tienen las misma letra en un orden diferente

function sonAnagramas(cadena1, cadena2) {
    // Convertir ambas cadenas a arrays y ordenarlos
    let arreglo1 = cadena1.split('').sort();
    let arreglo2 = cadena2.split('').sort();
  
    // Convertir los arrays ordenados en cadenas y compararlas
   return arreglo1.join("") === arreglo2.join("");
 
  }
  console.log(sonAnagramas("asdf", "fdsaj")); //repuesta falsa
  