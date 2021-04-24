function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        resultado += n
    });

    console.log(c) //El spread operator te reúne en un array un conjunto de valores.
    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0]

console.log(arr1, arr2);


//para juntar arreglos:

const arr3 = [...arr1, ...arr2];
console.log(arr3);