//13.Escribe una función que tome una cadena de texto como parámetro y
//devuelva true si la cadena contiene la letra "a", o false si no la contiene.
function contieneLetraA(cadena) {
    return cadena.includes("a") || cadena.includes("A");//agregamos el metodo include para ver si tiene a 
    
  }
  console.log(contieneLetraA("holA mendo ")); //imprime true