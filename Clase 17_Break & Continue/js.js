const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for (let i = 0; i < numeros.length; i++) {

    if (i === 5) {
        break;
    }

    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {

    if (i === 5) {
        continue;
        //Omite el código en una iteración concreta.
    }

    console.log(numeros[i]);
}


//Ejercicio. Hacer un programa que de un array nos separe pares e impares. 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        document.write(`</br> ${array[i]}  is an uneven number <br>`)
    } else {
        document.write(`</br> ${array[i]}  is an even number <br>`)
    }
}