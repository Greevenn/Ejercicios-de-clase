//Escribe una función que tome una cadena como parámetro y devuelva true
//si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás
//que de atrás hacia adelante.
function palindromo (cadena){
    cadena=cadena.toLowerCase().replace(/ /g, "");//poner la cadena el minuscula
    let inertirpalabra= cadena.split("").reverse("").join("");//utilizamos los 3 metodos para separar las palabras revertirla y juntarlas
    return cadena===inertirpalabra;
}
console.log(palindromo("oso"));//se imprime
