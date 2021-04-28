/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/*





//Ejercicio 5:

 const str = prompt("Introduce a phrase")

 const theFunction = function strRev(str) {
     let splitString = str.split('')
     let reverseArray = splitString.reverse();
     let joinArray = reverseArray.join('');

//     console.log(joinArray);
// }

 theFunction(str);





*/




// Ejercicio 6:

/*







let a = "Hola mundo mundo hola adios mundo".split(' ');
let b = [];
let c = [] //Repeated elements

let len = a.length;


for (let i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    } else {
        c.push(a[i]);
    }
}


console.log(`Las expresiones "${b}" aparecen 1 o más veces`);
console.log(`Veces encontrada la expresión ${c[0]}: ${c.length + 1}`);





*/


/*




//Ejercicio 7:

let arr1 = prompt("Input a word to check if it's a palindrome").split('');



function checkPal(array) {

    //Declaramos el primer array a comparar:

    const a = array

    //Declaramos el segundo array a comparar, que será el primero al revés (lo hacemos a través de una constante para no mutar al array original)

    const b = [...a].reverse()

    //Pasamos a minúscula ambos arrays, ya que si no, un string palíndromo daría como no palíndromo por tener una letra mayúscula (Salas, por ej.)

    const lowerCaseA = []
    const lowerCaseB = []

    console.log(lowerCaseA)
    console.log(lowerCaseB)


    for (i = 0; i < a.length; i++) {
        lowerCaseA.push(a[i].toLowerCase());
    }


    for (i = 0; i < b.length; i++) {
        lowerCaseB.push(b[i].toLowerCase());
    }
    console.log(a);
    console.log(b);


    //Una vez comprobado que se han creado bien los arrays en minúscula, procedemos a comparar el contenido de los índices de ambos arrays. Cada vez que coincidan los contenidos de ambos índices, dirá "es palíndromo", pero si encuentra cualquier diferencia, dirá lo contrario y romperá el bucle:

    for (i = 0; i < lowerCaseA.length; i++) {
        if (lowerCaseA[i] === lowerCaseB[i]) {
            console.log(`${a} is a palindrome`)
        } else {
            console.log(`${a} is not a palindrome`)
            break;
        }
    }


}

checkPal(arr1);


*/















//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
/*

const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo ultrices, gravida augue vitae, posuere ligula. Etiam faucibus elit sit amet auctor pulvinar. Etiam a elit quis lacus iaculis vestibulum non ultricies velit. Suspendisse fermentum nec ipsum nec luctus. Duis vestibulum erat elit, id tempus eros aliquam vitae. Fusce eget porttitor neque. Nulla facilisi. Sed a enim sem. Duis accumsan, mi eu rutrum ultrices, nisl dolor cursus neque, nec porta ipsum lorem id est. Donec at ante arcu. Morbi iaculis lacinia leo nec interdum. Sed iaculis eget mi id rhoncus. Etiam semper blandit eleifend. Quisque dictum magna finibus felis dapibus, ac consectetur mi porta."

const str2arr = str.split(" ");

console.log(str2arr);



*/


// const result = str2arr.filter(word => word === "xyz");

// console.log(result);

// function hasThePattern(arr) {

//     let pattern = prompt("Introduce the pattern");
//     let subArr = [];

//     //Recorremos el índice del array, ejecutando lo que hay dentro del bucle cada vez que nos topamos con un elemento del array. Si la posición del array "arr" incluye Pattern: metemos en subArr el patrón. Si la posición del array "arr" no incluye Pattern, pasamos a la siguiente. Para que no se repita el console.log(``) constantemente, metemos un console.clear(); justo antes de que aparezca. Así, aunque se imprima el console.log cada vez que itera el bucle, aparece la consola limpia.


//     for (let i in arr) {
//         if (arr[i].includes(pattern)) {
//             subArr.push(pattern);
//             console.clear();
//             console.log(`The pattern ${pattern} appears ${subArr.length} times`);
//         };
//     }

// }

//Lo que he hecho, sirve para que el programa te diga cuántas veces aparece un patrón en un array. Para eliminar el patrón, se haría de la siguiente manera: 



//Recorremos el índice del array, ejecutando lo que hay dentro del bucle cada vez que nos topamos con un elemento del array. Si la posición del array "arr" incluye Pattern: metemos en subArr el patrón. Si la posición del array "arr" no incluye Pattern, pasamos a la siguiente. Para que no se repita el console.log(``) constantemente, metemos un console.clear(); justo antes de que aparezca. Así, aunque se imprima el console.log cada vez que itera el bucle, aparece la consola limpia.


/*


function delChar(text = prompt("Input a text"), pattern = prompt("Input a pattern")) {
    (!text) ?
    console.warn("You didn't input a text"): (!pattern) ?
        console.warn("You didn't input a pattern") :
        console.info(text.replace(new RegExp(pattern, "ig"), ""));
}

delChar(str);


*/


/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/



//9)

/*


function randomNum(number) {
    console.log(Math.floor((Math.random() * number) + 501))
}

randomNum(99);



*/


//Para obtener un número random entre dos números cualquiera, sería de la siguiente manera:


/*


function randomNum(maxNumber, minNumber) {
    let deductedNum = maxNumber - minNumber;
    console.log(Math.floor((Math.random() * deductedNum) + minNumber))
}

randomNum(999, 1034);

*/


//10

//Usamos la misma función que en el ejercicio 7:





/*
let arr1 = prompt("Input a word or a number to check if it's a palindrome").split('');



function checkPal(array) {


    const a = array



    const b = [...a].reverse()

    lowerCaseA = []
    const lowerCaseB = []

    console.log(lowerCaseA)
    console.log(lowerCaseB)


    for (i = 0; i < a.length; i++) {
        lowerCaseA.push(a[i].toLowerCase());
    }


    for (i = 0; i < b.length; i++) {
        lowerCaseB.push(b[i].toLowerCase());
    }
    console.log(a);
    console.log(b);


    //Una vez comprobado que se han creado bien los arrays en minúscula, procedemos a comparar el contenido de los índices de ambos arrays. Cada vez que coincidan los contenidos de ambos índices, dirá "es palíndromo", pero si encuentra cualquier diferencia, dirá lo contrario y romperá el bucle:

    for (i = 0; i < lowerCaseA.length; i++) {
        if (lowerCaseA[i] === lowerCaseB[i]) {
            console.log(`${a} is a palindrome`)
        } else {
            console.log(`${a} is not a palindrome`)
            break;
        }
    }


}

checkPal(arr1);












*/

//11)

//Usamos el método array.reduce. Este multiplica dos parámetros del array en orden. Hay que asegurarse de que el array.reduce no comienza con el parámetro inicial 0, ya qu en tal caso empezaría multiplicando 0*1, lo cual da 0, para volver a hacer la misma operación con los siguientes valores del array (0*1,0*2,0*3,etc), lo cual va a dar siempre 0. Para evitarlo, usamos el método array.shift():




/*






var arr = []
var futureMult = 0

function factorial(num, array) {
    for (i = 0; i <= num; i++) {
        arr.push(i)
    }
    arr.shift()
    const result = arr.reduce((a, b) => a * b);
    console.log(result)
}

factorial(5, arr)

//alternativa: 

let num = prompt("Introduce an integer number")
let total = 1
for (let i = 1; i <= num; i++) {

    total = total * i

}

console.log(total);







*/
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


//12)



/*

function checkIfPrime(number) {
    if (!number) {
        console.clear();
        console.warn("You didn't input a number")
    }

    if (number === 0) {
        console.clear();
        console.warn("The number has to be superior to zero")
    }

    if (Math.sign(number) == -1) {
        console.clear();
        console.warn("The number can't be negative")
    }

    if (number % 1 != 0) {
        console.clear();
        console.warn("The number can't have decimals into it")
    }

    (number % 2 === 0) ?
    console.log("Not a prime number"): console.log("Prime number")


}

checkIfPrime(339);



*/


//13)




/*

function ifEven(num) {

    if (!num) {
        console.clear();
        alert("You didn't input a number");
        console.clear();
        location.reload();


    }

    if (num == 0) {
        console.clear();
        alert("The number has to be superior to zero");
        console.clear();
        location.reload();


    }

    if (Math.sign(num) == -1) {
        console.clear();
        alert("The number can't be negative");
        console.clear();
        location.reload();


    }

    if (num % 1 != 0) {
        console.clear();
        alert("The number can't have decimals into it");
        console.clear();
        location.reload();

    }

    (num % 2 == 0) ? console.log("Even"): console.log("uneven");
}


ifEven(prompt("Input a number"))


*/



// 14) pe. miFuncion(0,"C") devolverá 32°F. y viceversa:

// Formulas: https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-temperature


//El método .toFixed() sirve para indicar el número de decimales que queremos mostrar.



/*


function CelsiusToFahrenheit(Celsius) {
    let converted = (Celsius * (9 / 5)) + 32;

    if (Celsius === undefined) {
        alert(`Input a number`);
        location.reload();
    }
    console.log(`Tienes ${converted.toFixed(2)} grados Fahrenheit`);

}



function FahrenheitToCelsius(Fahrenheit) {
    let converted = (Fahrenheit - 32) * (5 / 9);

    if (Fahrenheit === undefined) {
        alert(`Input a number`);
        location.reload();

    }
    console.log(`Tienes ${(converted).toFixed(2)} grados Celsius`);

}


CelsiusToFahrenheit();
FahrenheitToCelsius(240);


*/



// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


//15)

//Cómo pasar de binario a decimal: https://youtu.be/tFLRGHx5tnY


function binToDec(binary) {

    if (!binary) {
        alert("Input a number!")
        location.reload();
    }

    if (Math.sign(binary) == -1) {

        alert("Input a positive binary number!")
        location.reload();
    }

    let binaryArr = binary.split("")
    let indexArr = []

    //Elevamos cada elemento de binaryArr a 2 (número base de los números binarios), y con el resultado vamos llenando indexArr: 

    for (i = 0; i < binary.length; i++) {
        indexArr.push(Math.pow(2, i))
    }


    //Antes de continuar, vamos a comprobar si en binaryArr se han introducido solo 0 y 1, ningún otro número.


    for (i = 1; i <= binary.length; i++) {
        if (binaryArr[i] === 1) {
            console.log("alright")
        } else if (binaryArr[i] === 0) {
            console.log("alright")
        } else { console.log("Binary numbers are made only of zeroes and ones") }

    }

    //Continuamos:

    console.log(binaryArr)
    console.log(indexArr);

    //Le damos la vuelta al array indexArr (fruto de elevar la base del número binario (siempre 2) a la potencia de cada índice del array binario), ya que tenemos que multiplicar cada elemento de indexArr por cada elemento de binaryArr, pero no podemos hacerlo al uso. Hemos de darle la vuelta para que se multiplique con indexArr de mayor a menor (JS por defecto muestra el array de menor a mayor).

    let reversed = indexArr.reverse();
    var result = []

    console.log(reversed)

    for (i = 0; i < binaryArr.length; i++) {
        result.push(reversed[i] * binaryArr[i])
    }


    console.log(result)

    var finalSum = result.reduce((a, b) => a + b, 0)
    console.log(`${finalSum}`)

    //Para comprobar que el número introducido es binario, y no tiene caracteres aporte de 0 y 1.

    if (isNaN(finalSum) == true) {
        console.clear();
        alert("Input a valid binary number!")
    }



}

binToDec("1010111");


//////////////////////////////////////////////////////////////////////////////////////////////////


//De decimal a binario: https://youtu.be/bScw3CNb_fM


//Regular Expressions: https://youtu.be/aPkBloR9MEI?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
















/*


function decToBin(num) {

    //Podríamos hacer una calculadora de Decimal a binario con decimales: https://www.youtube.com/watch?v=DG009wcbBw4

    //Vamos a validar que no es un número binario. No tiene lógica, ya que estrictamente podemos pasar 100101, por ejemplo, a binario (100.101 = 11000011100000101). Aun así, para que sirva de ejemplo, así lo haríamos con expresiones regulares:





    let expReg0101 = /0101/g
    let expReg1010 = /1010/g

    console.log(expReg0101.test(num))
    console.log(expReg1010.test(num))

    if (expReg0101.test(num) === true || expReg1010.test(num) === true) {
        console.log(`${num} must be a decimal number`)
    }








    let x = num / 2
    let multiplied = []
    let binOutput = []
    for (let i = num; i > 1; i = i / 2) {
        multiplied.unshift(i)

    }

    multiplied.reverse()

    for (i = 0; i < multiplied.length; i++) {

        if (Math.floor(multiplied[i]) % 2 === 0) {
            binOutput.unshift(0)
        } else {
            binOutput.unshift(1)
        }
    }

    console.log(multiplied)
    console.log(binOutput)

    //Para comprobar que el número introducido es positivo (No sería necesario dada la posterior validación mediante RegularExpressions): 

    if (Math.sign(num) === -1) {
        console.clear();
        console.log(`${num} is a negative number. You have to input a positive one.`)
    }
    // console.log(multiplied[1]) 


    //Vamos a comprobar si hay caracteres extraños introducidos: 

    let expRegExtraña = /[.*+\-?^${}()|[\]\\]/g
    if (expRegExtraña.test(num) === true) {
        console.clear();
        console.log(`You inputted: ${num} Do not input any character that is not decimal.`)
    }

}


decToBin(87);



*/










//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/*



function discount(price, discount) {
    if (typeof price === "string") {
        console.log(`Input a number, not a string. ${price} is a string`)
    }

    if (Math.sign(price) == -1) {
        console.warn(`Do not input a negative number. ${price} is a negative number`)
    }

    if (price === 0) {
        console.warn(`You have to input a price above zero`)
    }

    let finalPrice = price - ((price * discount) / 100)
    console.log(finalPrice)
}


discount(3800, 30)




*/
/*

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


function dateCalculus(date) {
    console.log(`${ new Date().getFullYear() - date.getFullYear() } years have passed since ${date.getFullYear()}`)
}

dateCalculus(new Date(1984, 4, 23));




*/
/*


// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.





const word = prompt("Introduce a string").toLowerCase()

let consonants = 0
let vocals = 0

for(const character of word){
    if(character == "a" || character == "á" || character == "e" || character == "é" || character == "i" || character == "í" || character == "o" || character == "ó" ||character == "u" ||character == "ú") vocals++
    else consonants++
}

console.log(`You word has ${vocals} vocals, ${consonants} consonants and ${word.length} characters`)


*/












/*

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function yourName(name, surname) {



    //Vamos a validar que sea un string: 

    let expReg2 = /[A-ZÑÇíáéóú]/i //La flag "i" indica que, encuentre la leta que encuentre, sea mayúscula o minúscula, la incluya como coincidencia.
    let expRegNum = /[0-9]/g



    if (name) {
        // if (expReg3.test(name) === true) {
        //     console.warn("Do not input numbers.")
        // } else {
        //     console.log("You have inputted only latin characters.")
        // }

        if (expReg2.test(name) === false || expRegNum.test(name) == true) {
            console.warn("Do not input anything but latin characters.")
        } else {
            console.log("You have inputted only latin characters.")
        }

        if (name.length > 15) {
            console.clear();
            console.warn("Do not input an exaggerate amount of characters.")
        } else {
            console.log("Your name is right.")
        }

    } else {
        console.warn("You did not write your name.")
    }



    if (surname) {
        // if (expReg3.test(name) === true) {
        //     console.warn("Do not input numbers.")
        // } else {
        //     console.log("You have inputted only latin characters.")
        // }

        if (expReg2.test(surname) === false || expRegNum.test(surname) == true) {
            console.warn("Do not input anything but latin characters.")
        } else {
            console.log("You have inputted only latin characters.")
        }

        if (surname.length > 15) {
            console.clear();
            console.warn("Do not input an exaggerate amount of characters.")
        } else {
            console.log("Your name is right.")
        }

    } else {
        console.warn("You did not write your name.")
    }

    console.log(`You are ${name} ${surname}.`)
}


yourName(prompt("Input your name"), prompt("Input your surname"))






*/
/*

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function emailAddress(email) {

    let expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let expReg2 = /[`^/*[(]]/

    if (email) {
        if (expReg2.test(email.toLowerCase()) === true) {
            console.log("not valid!")
        }

        if (expReg.test(email.toLowerCase()) === true) {
            console.log("The email inputted is valid.")
        } else {
            console.log("The email inputted is not valid.")

        }
    } else {
        console.warn("Input an email address.")
    }
}

emailAddress("legacyentertainmentyt@gmail.com")








*/
/*
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].



function squaring(arrOfNums) {

    let result = []
    console.log(arrOfNums)

    for (i = 0; i < arrOfNums.length; i++) {

        result.push(Math.pow(arrOfNums[i], 2))
            // console.log(Math.pow(arrOfNums[i], 2))
    }

    console.log(result)
}


squaring([1, 2, 3, 4, 5, 6])


*/
/*

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function max_min(arr) {

    //Procedemos a resolver el problema base: 

    function max_min_2(array) {
        let finalArr = []


        finalArr.push(Math.max(...array))
        finalArr.push(Math.min(...array))


        return console.log(finalArr)
    }

    max_min_2(arr);



    //Procedemos con las validaciones: 


    for (i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "string") {
            console.clear();
            console.warn("You wrote a string, not a number.")

        }

    }

    if (!arr.length) {
        console.clear();
        console.warn("You did not write anything.")

    }

}

max_min([1, 2, 3, 4, 5, -2, 10]);






*/



//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


/*

function checkIfEvenOrUneven(array) {

    let even = []
    let uneven = []



    for (i = 0; i < array.length; i++) {

        (array[i] % 2 === 0) ? even.unshift(array[i]): uneven.unshift(array[i])

    }

    console.log(`These are the even numbers: ${even}`);
    console.log(`These are the uneven numbers: ${uneven}`);
    



}



checkIfEvenOrUneven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])



*/


//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.



/*


function min_max_output(array) {


    if (array == undefined) {
        console.clear();
        console.warn("You didn't input an array!");
    }


    array.sort((a, b) => a - b);

    console.log(`The numbers have been ordered: ${array}`);

    if (!array.length) {
        console.clear();
        console.warn("Empty array!");

    }


}

min_max_output([1, 5, 767, 2, 6, 78, 8, 2])



*/

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].




/*

function showDuplicates(array) {

    if (array === undefined) {
        console.clear();
        console.warn('There is no array!');

    }

    let secondArray = [];

    for (i = 0; i < array.length; i++) {

        if (array[i] === array[i + 1]) {
            secondArray.unshift(array[i]);
        }
    }

    console.log(array);
    console.log(`These are the duplicated characters: ${secondArray}`);

    if (!array.length) {
        console.clear();
        console.warn('The array is empty')
    }


}



showDuplicates(["x", 10, "x", 2, "10", 10, 10, true, true]);







//Vamos a crear una función que elimine los duplicados, aparezcan la cantidad de veces que aparezcan: 


function eliminateDuplicates(array) {

    if (array === undefined) {
        console.clear();
        console.warn('There is no array!');

    }

    let secondArr = [];

    for (i = 0; i < array.length; i++) {
        secondArr.unshift(array[i])
    }

    for (i = 0; i < array.length; i++) {

        if (array[i] === array[i + 1]) {
            secondArr.shift(array[i])
        }

    }

    console.log(`This is the inputted array: [${array}]`)
    console.log(`The new array, which is the result of eliminating the duplicates of the original one, is the following: [${secondArr}]`);


    if (!array.length) {
        console.clear();
        console.warn('The array is empty')
    }


}



eliminateDuplicates(["x", 10, "x", 2, "10", 10, 10, true, true]);




*/




/*






26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.



function calculateAverage(array) {
    let sum = 0

    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(`The average of the array is the following: ${sum / array.length}`)



}

calculateAverage([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])






*/

/*


27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMDb.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDb tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - A partir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

let threeMovies = [
    
    {

    IMDb_id: 'tt0075148'
    title: 'Rocky'
    director: 'John G. Avildsen'
    year: 1976
    country: 'United States'
    genre: 'Drama', 'Sport'
    calification: 8.1

    }

     {

    IMDb_id: 'tt0075148'
    title: 'Gladiator'
    director: 'Ridley Scott'
    year: 2000
    country:' United States'
    genre:  'Action', 'Adventure', 'Drama' 
    calification: 8.5
        
    }

     {

    IMDb_id: 'tt0311113'
    title: 'Master and Commander: The Far Side of the World'
    director: 'Peter Weir'
    year: 2003
    country: 'United States'
    genre: 'Action', 'Adventure', 'Drama'
    calification: 7.4
        
    }

]


*/

class Movie {
    constructor(IMDb_id, title, director, year, country, genre, calification) {
        this.IMDb_id = IMDb_id
        this.title = title
        this.director = director
        this.year = year
        this.country = country
        this.genre = genre
        this.calification = calification
    }

    data_sheet() {
        console.log(`The data sheet of this film is the following: 
        
        IMDb_ID: ${this.IMDb_id}. Title: ${this.title}. Director: ${this.director}. Year: ${this.year}. Country: ${this.country}. Genre: ${this.genre}. Calification: ${this.calification}`);
    }

    static genres(genres) {
        console.log(genres);
    }
}

const ValidGenres = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];


const first_Movie = new Movie('tt1798709', 'Her', 'Spike Jonze', 2013, ['United States', 'Canada'], ['Drama', 'Sci-Fi', 'Romance'], 8);


//Validamos que la longitud del título de la película introducida sea la adecuada:


if (first_Movie.title.length > 100) {
    console.log("The title is too long.")
}


//Validamos que la longitud del nombre de su director sea la adecuada: 



if (first_Movie.director.length > 50) {
    console.log(`The director's name can't be so long.`)
}


//Validamos que no falte ningún dato sobre la película. Cuando falta algún dato, pondrá undefined en esa posición del objeto. Por ejemplo, en director saldrá 'undefined'. Vamos a chequear que no hay ningún elemento undefined en el objeto:

const obj2arr = Object.values(first_Movie);
console.log(obj2arr);

for (i = 0; i < obj2arr.length; i++) {

    if (obj2arr[i] === undefined) {
        console.warn('You did not input one of the main elements of the film.');

    }

}


//Comprobamos que en ningun dato del array se ha introducido un espacio en blanco ('')

for (i = 0; i < obj2arr.length; i++) {

    if (obj2arr[i] === '' || obj2arr[i] === ' ') {
        console.warn('Do not input empty spaces');
    }
}


//Comprobamos que el IMDb_id ha sido correctamente introducido. Debe constar de 9 caracteres, 2 números y 7 letras. Usaremos el array creado anteriormente a partir del objeto. Usaremos además esxpresiones regulares para comprobar que ningún caracter del IMDB_id a partir de la segunda letra es cualquier otra cosa salvo un número:

const IMDb_id_array = obj2arr[0].split('');
console.log(IMDb_id_array);
let regexpNum = /[0-9]/
let regexpChar = /[a-zA-Z]/



if (IMDb_id_array.length != 9) {
    console.warn('The IMDb_ID must contain 9 characters');
}

if (regexpChar.test(IMDb_id_array[0]) === false || regexpChar.test(IMDb_id_array[1]) === false || regexpNum.test(IMDb_id_array[2]) === false || regexpNum.test(IMDb_id_array[3]) === false || regexpNum.test(IMDb_id_array[4]) === false || regexpNum.test(IMDb_id_array[5]) === false || regexpNum.test(IMDb_id_array[6]) === false || regexpNum.test(IMDb_id_array[7]) === false || regexpNum.test(IMDb_id_array[8]) === false) {
    console.warn("The IMDb_ID must contain 2 letters from the start, and 7 letters after those 2 numbers.");
}

console.log(IMDb_id_array[2]);


//Ahora validamos que el año sea un número de 4 dígitos, y no cualquier otra cosa. Vamos para ello a separar el número en dígitos y meterlos en un array. Aunque primero, podemos comprobar que el valor introducido es un número, sin recurrir al array:

for (i = 0; i < obj2arr[3].length; i++) {
    if (isNaN(obj2arr[3][i])) {
        console.log('The year must be a number');
    }
}


//Creamos el array:

function splitToDigit(n) {
    return [...n + ''].map(Number);
}
const year_arr = splitToDigit(obj2arr[3])

// console.log(year_arr);


if (year_arr.length != 4) {
    console.warn('The year must be a four digits number')
}


//Ahora nos toca validar que el país o los países introducidos lo hayan sido en forma de arreglo:


if (!Array.isArray(obj2arr[4])) {
    console.warn('The country or countries where the movie was filmed, must be written in the form of an array.')
}



//Ahora nos toca validar que el género o géneros introducidos lo hayan sido en forma de arreglo:

if (!Array.isArray(obj2arr[5])) {
    console.warn('The genre or genres of the movie, must be written in the form of an array.')
}




//Comprobamos pues si los géneros introducidos como asociados al objeto están dentro de la lista de géneros válidos. Para ello, declaramos X, que vale 0. Creamos un bucle que se ejecuta a cada genero de la película, y dentro de ese bucle, ejecutamos otro con código que corre a cada elemento del array de géneros válidos. Si se da la coincidencia de que existe un género válido (es decir, si coinciden los elementos i y z de los respectivos bucles), se sumará a X el valor 1. Si X equivale a 0 después de ejecutar los bucles, significa que no se ha dado ninguna coincidencia, ergo alguno o todos los géneros introducidos y asociados al objeto de la película no se encuentra o encuentran dentro de los géneros aceptados. 

let x = 0;

for (i = 0; i < obj2arr[5].length; i++) {

    for (z = 0; z < ValidGenres.length; z++) {
        // console.log(ValidGenres[z])
        if (obj2arr[5][i] === ValidGenres[z]) {
            x++
        }
    }
}


//Ahora bien. En este programa se halla un problema: a nada que haya un género válido, se podrán introducir indefinidos géneros inválidos acompañándole. X seguirá siendo mayor que 0, pero se habrán introducido géneros inválidos. Para solucionar esto, necesitamos que X contenga un valor similar a la longitud del array de géneros asociados a la película. En este caso, 3. 


if (x != obj2arr[5].length) {
    console.warn("The genres you associated with the movie are invalid.");
}


//Generamos un método estático que nos enseñe los géneros válidos: 



Movie.genres(ValidGenres);



//Vamos a comprobar que la calificación haya sido válidamente introducida. Deberá estar formada por un númedo de 0 a 10 con un decimal como mucho.

//Para medir la longitud del decimal, pasamos el número a string y medimos su longitud:
let cal2Str = obj2arr[6].toString();
// console.log(cal2Str.length);


if (isNaN(obj2arr[6])) {
    console.warn('The calification must be a number.');
}
//(el método isNaN() también funciona con números dentro de strings.).


if (obj2arr[6].length > 2 || Math.sign(obj2arr[6]) == -1 || cal2Str.length > 3) {
    console.warn('The calification must be a number without decimals or a number only with one decimal. Negative numbers are not allowed either.');
}


//Para mostrar la ficha técnica de la película: 

console.log(first_Movie.data_sheet());

//PARTE FINAL DEL EJERCICIO.

//A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.


let threeMovies = [

    {

        IMDb_id: 'tt0075148',
        title: 'Rocky',
        director: 'John G. Avildsen',
        year: 1976,
        country: 'United States',
        genre: ['Drama', 'Sport'],
        calification: 8.1

    },

    {

        IMDb_id: 'tt0172495',
        title: 'Gladiator',
        director: 'Ridley Scott',
        year: 2000,
        country: ' United States',
        genre: ['Action', 'Adventure', 'Drama'],
        calification: 8.5

    },

    {

        IMDb_id: 'tt0311113',
        title: 'Master and Commander: The Far Side of the World',
        director: 'Peter Weir',
        year: 2003,
        country: 'United States',
        genre: ['Action', 'Adventure', 'Drama'],
        calification: 7.4

    }

]

//Necesitamos aplicar esta fórmula, pero metiendo los datos de cada objeto del array threeMovies:  


//const first_Movie = new Movie('tt1798709', 'Her', 'Spike Jonze', 2013, ['United States', 'Canada'], ['Drama', 'Sci-Fi', 'Romance'], 8);

for (i = 0; i < threeMovies.length; i++) {
    let a = Object.values(threeMovies[i]);
    let object = new Movie(`${a[0]}`, `${a[1]}`, `${a[2]}`, `${a[3]}`, `${a[4]}`, `${a[5]}`, `${a[6]}`);
    console.log(object);
    console.log(object.data_sheet());

}

// const b = new Movie(Object.values(threeMovies[0]));
// console.log(Object.values(threeMovies[0]));