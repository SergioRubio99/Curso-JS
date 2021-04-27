// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// En el video 39 te daré mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios de este video. 








































// Ejercicio 1: Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/*
function seize(string) {

    console.log(`
    
    Length of the array: ${string.length}
    
    `)

}


seize("Hola mundo");
*/


























//Ejercicio 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/*
let arr = "Hola mundo"
let arrSpl = arr.split("")
console.log(arrSpl)


let newArr = []


let givenNumber = 4

for (let i = 0; i < givenNumber; i++) {
    newArr.push(arrSpl[i]);
}

console.log(newArr)
*/



































//Ejercicio 3: Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


/*
let expression = "Hola que tal"
let expReg = /\s/ig
let expRegNot = /./ig
let separator = prompt("Input a separator");


if ((expReg.test(separator) === true && separator.length === 1) || expRegNot.test(separator) === false) {
    function splitting(str, separator) {
        console.log(str.split(separator))
    }
    splitting(expression, separator)

} else {
    console.warn("Input only a space or nothing.")
        // function splitting(str, separator) {
        //     let strSpl = str.split(" ")
        //     console.log(strSpl)
        // }

    // splitting(expression, separator)
}
*/

































// Ejercicio 4: Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


/*

let text = "Hola mundo";
let times = 3

function exec(text, times) {
    let arr = []

    for (i = 0; i < times; i++) {
        arr.push(text);
    }

    console.log(arr)

};

exec(text, times);

*/



































// Ejercicio 5: Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


/*
let str = "Viva la Federación Rusa";

function reverse(str) {

    let arr = [];
    let strSplitted = str.split("");


    for (i = (strSplitted.length) - 1; i >= 0; i--) {
        arr.push(strSplitted[i])
    }

    console.log(strSplitted);
    console.log(strSplitted.length);
    console.log(arr);


}

reverse(str);

*/












































// Ejercicio 6: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. (Acuérdate de hacer las validaciones pertinentes)


/*

let str = "Hola mundo hola mundo"
let emptyArr = []

let expReg = /[A-Za-z]/ig

if (expReg.test(str) === true) {

    function filter(str) {

        let arr = str.split(" ");
        let arr2 = arr;
        console.log(arr);

        for (i = 0; i < arr.length; i++) {
            var tempArr = []
            tempArr.push(arr[i])
            console.log(tempArr)
        }

        for (i = 0; i < arr.length; i++) {
            if (tempArr[0] === arr[i]) {
                emptyArr.push(tempArr[0])
                console.log(emptyArr)
            }
        }

    }
    filter(str)

    console.log(emptyArr.length)
} else {
    console.warn("Input only characters")
}

*/















































// Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

/* 

let expReg = /[A-Za-z]/ig


let input = "salas";
let sptArr = input.toLowerCase().split("");
let revArr = []
let coincidences = 0

console.log(sptArr);


if (expReg.test(input) === true) {

    for (i = sptArr.length - 1; i >= 0; i--) {
        revArr.push(sptArr[i])
    }

    for (i = 0; i < sptArr.length; i++) {
        if (sptArr[i] === revArr[i]) {
            coincidences++
        }
    }


    console.log(revArr)
    console.log(coincidences)
    console.log(sptArr.length);

    setTimeout(() => {

        if (coincidences === sptArr.length) {
            console.log("Both strings are palindromes")
        } else {
            console.log("No palindromes here")
        }

    }, 200);

} else if (input.length === 0) {
    console.warn("Input something")

} else {
    console.warn("Input only characters")
}

*/


















































// Ejercicio 8: Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


/*
let expReg = /[A-Za-z0-9]/ig

let str = "xyz1, xyz2, xyz3, xyz4 y xyz5";
pat = "xyz";

if (expReg.test(str) === true && expReg.test(pat) === true) {
    function toString(str, pat) {
        for (i = 0; i < str.length; i++) {
            str = str.replace(pat, '');
        }
        console.log(str);
    }

    toString(str, pat)
} else {
    console.warn("You can input numbers and letters only. The same principle applies to the pattern")
}

*/












































// Ejercicio 9 Programa una función que obtenga un numero aleatorio entre 501 y 600.

/*

function random(min, max) {

    console.log(Math.random() * (max - min) + min);

}

random(501, 600)
*/












































// Ejercicio 10: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.



/*

let input = 2001
let num2str = input.toString();
let arr1 = []
let revArr = []


let coincidences = 0


console.log(num2str)


//Para crear los arrays:

for (i = 0; i < num2str.length; i++) {
    arr1.push(num2str[i]);
}

for (i = arr1.length - 1; i >= 0; i--) {
    revArr.push(arr1[i])
}

//Para compararlos:

for (i = 0; i < arr1.length; i++) {

    if (arr1[i] === revArr[i]) {
        console.clear()
        console.log("Capicúa")
    } else {
        console.clear()
        console.log("No capicúa")
    }

}


console.log("***********Arr***********")
console.log(arr1)

console.log("***********revArr***********")

console.log(revArr)

 */

























































// Ejercicio 11: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

/*

function factorial(n) {

    e = 1
    for (i = 1; i <= n; i++) {
        e *= i

    }
    console.log(`
                
                El factorial del número introducido es ${e}

        `);
}

factorial(8)



*/
























































// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


/* 
function prime(num) {
    let nReg = /[0-9]/ig

    if (nReg.test(num) === false || Math.sign(num) === -1) {
        console.log("Input a positive number")
    } else if (num === 1 || num === 2) {
        console.log("Primo")
    } else if (num === 0) {
        console.log("0 is not a prime number")
    }

    arr = []

    for (i = 2; i <= num; i++) {
        let a = num % i
        arr.push(a)
        console.log(a)
        console.log(arr)
    }

    sArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            sArr.push(arr[i])
        }
    }

    console.log("arr", arr)
    console.log("sArr", sArr)
    if (sArr.length === arr.length - 1) {
        console.log("Prime num")
    } else {
        console.log("Not a prime num")
    }

}

prime(52343);

*/



/*Forma más eficiente de programarlo:*/


/*
function ifPrime(num) {

    let a = false;

    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            a = true;
            break;
        }
    }

    return (a) ?
        console.log(`${num} is not a prime number`) :
        console.log(`${num} is a prime number`)


}

ifPrime(512343)

*/




































// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.



/*


function even_uneven(num) {
    let regEx = /[0-9]/
    let wholeRegEx = /./ig
    let spcRegEx = /\s/ig


    if (wholeRegEx.test(num) === false || spcRegEx.test(num) === true || num === undefined) {
        console.log("Input something, mothafucka")

    } else if (isNaN(num) === true && regEx.test(num) === false) {
        console.log("Input only a number")
    } else {
        let a = num % 2 === 0 ?
            "Es un número par" :
            "Es un número impar"
        console.log(a);

    }

}

even_uneven(12);


*/















































/*
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

//  Switching from Celsius to Fahrenheit: ºF = (ºC · 1,8) + 32 

// Switching from Fahrenheit to Celsius: ºC = (ºF -32) / 1,8





let wholeRegEx = /[A-z]/ig;
let spcRegEx = /\s/ig;
let empRegEx = /./
let numRegEx = /[0-9]/
let fC = /[FCfc]/ig

function CtoF(a, b) {

    if ((a === undefined || b === undefined)) {
        return console.log("Input a number and the kind of degrees it represents");
    } else if (isNaN(a) === false && b === undefined) {
        return console.log("Input the sort of degree you want to convert");
    } else if (fC.test(a) === true && b === undefined) {
        return console.log("Input a number, please");
    } else if (spcRegEx.test(a) === true || spcRegEx.test(b) === true) {
        return console.log("Don't input empty spaces")
    } else if (fC.test(a) === true && numRegEx.test(b) === false) {
        return console.log("Input numbers first")
    } else if (fC.test(b) === false) {
        return console.log("Input the degrees first, then what type of degrees they are (F/C).")
    }


    let num = parseInt(a)





    if (b === "C" || b === "c") {
        let f = num * 1.8 + 32;
        return console.log(`${num} Celsius degrees equal ${f} Fahrenheit degrees`);
    }
    if (b === "F" || b === "f") {
        let c = (num - 32) / 1.8;
        return console.log(`${num} Fahrenheit degrees equal ${c} Celsius degrees`);
    }

}

CtoF(222, "f");

*/




































































// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


function convert(num, type) {

    regExp = /[0-9]/ig
    regExp2 = /[2-9]/ig


    if (regExp.test(num) === false || type === undefined) {
        return console.log("Input a number and its nature (2 for decimal, 10 for binary)");
    } else if (type !== 2 && type !== 10) {
        return console.log("Input a number and its nature (2 for decimal, 10 for binary)");
    } else if (type === 2) {

        let arr = []
        let binArr = []
        let b = num
        for (i = 0; i < num; i++) {

            arr.push(b / 2);
            binArr.push(Math.floor(b % 2));
            console.log(arr);
            console.log(binArr);

            // console.log(b)
            b /= 2

            if (b < 0.9999) {
                break
            }

        }
        console.log(`result: ${binArr.reverse()}`)

    } else if (kind = 10) {
        powArr = []
        console.log(num.length);
        a = parseInt(num);
        console.log(a);



        lastPow = 1
        arr = num.split("")
        arr2 = []
        arr3 = []
        arrR = arr.reverse()
        finalResult = 0

        for (i = 0; i < arr.length; i++) {
            arr2.push(lastPow)
            lastPow *= 2
                // console.log("last pow:", lastPow)
            if (arrR[i] == "1") {
                console.log("arr2[i]", arr2[i])
                arr3.push(arr2[i])
                finalResult += arr2[i]

            }
        }

        //Warning! the execution of the reverse() method overwrites the original array, even if you store it into a new variabl:

        arrEx = [0, 1, 2, 1, 6, 10]
        arrEx2 = arrEx.reverse()
        console.log("Fucking array", arrEx2)
        console.log("Fucking array", arrEx)

        //The code above returns the same output.








        console.log(lastPow)
        console.log("arr: ", arr)
        console.log(`arr: 2`, arr2)
        console.log("arr 3:", arr3)
        console.log("Final result: ", finalResult)
            // console.log(c)

    }



}

convert("101000011010100101110", 10)
































// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.