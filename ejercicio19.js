//19.Escribe una función que tome un número como parámetro y devuelva true si el número es divisible por 3 y 5, o false si no lo es.
function divisiblepor3y5(a){
    return a%3===0 || a % 5===0;//verificamos si se pueden dividir
}
console.log(divisiblepor3y5(30));
