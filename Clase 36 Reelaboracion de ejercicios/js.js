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

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

















//<---------------------------------------------------------->





// Ejercicio 1: Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/*
function seize(string) {

    console.log(`
    
    Length of the array: ${string.length}
    
    `)

}


seize("Hola mundo");
*/







//<---------------------------------------------------------->









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










//<---------------------------------------------------------->













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















//<---------------------------------------------------------->







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














//<---------------------------------------------------------->





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
















//<---------------------------------------------------------->









// Ejercicio 6: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. (Acuérdate de hacer las validaciones pertinentes)



//Vamos a crear una función que elimine los duplicados, sean cuantos sean, y aparezcan las veces que aparezcan: 


/*
let str = "Hola mundo mundo casa casa coche coche hola mundo"
let emptyArr = []

let expReg = /[A-Za-z]/ig

if (expReg.test(str) === true) {

    function filter(str) {
        str = str.toLowerCase();
        let arr = str.split(" ");
        arr2 = arr;
        let result = []
        console.log(arr2);
        let times = 0
        for (i = 0; i < arr.length; i++) {
            for (e = 0; e < arr2.length; e++) {
                if (arr2[e] === arr[i]) {
                    times++
                    if (times > 1) {
                        times = 0
                        result.push(arr2[e])
                        arr2.splice(e, 1)
                    }
                }
            }
        }

        console.log(result)
        console.log(arr2)
    }
    filter(str)

    console.log(emptyArr.length)
} else {
    console.warn("Input only characters")
}
*/















//<---------------------------------------------------------->








// Ejercicio 7: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.




// function palindrome(input) {

//     let expReg = /[A-Za-z]/ig

//     if (expReg.test(input) === true) {
//         //Testeamos que no se haya introducido en la función un valor undefined:
//         if (input === undefined) {
//             return console.log("Don't input undefined objects")
//         }
//         //Cogemos el input, y lo metemos en un array. Invertimos una copia de ese array (no usamos Array.reverse() sin más, porque es un método mutante del array original. Por ello, creamos una copia del array original con Array.prototype.concat()).

//         let sptArr = input.toLowerCase().split("");
//         let revArr = [].concat(sptArr).reverse();
//         let coincidences = 0;
//         console.log(sptArr);
//         console.log(revArr);
//         //Recorremos el primer array, y chequeamos cada elemento del mismo con cada elemento del array invertido. Si hay coincidencia, sumamos a coincidences 1.
//         for (i = 0; i < sptArr.length; i++) {
//             if (sptArr[i] === revArr[i]) {
//                 coincidences++
//             }
//         }
//         //Si el número de coincidencias es equivalente a la longitud de sptArr, estamos ante un palíndromo. 
//         if (coincidences === sptArr.length) {
//             console.log("Both strings are palindromes")
//         } else {
//             console.log("No palindromes here")
//         }


//     } else {
//         console.warn("Input a string made of characters")
//     }

// }

// palindrome('salas');













//<---------------------------------------------------------->








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











//<---------------------------------------------------------->












// Ejercicio 9 Programa una función que obtenga un numero aleatorio entre 501 y 600.

/*

function random(min, max) {

    console.log(Math.random() * (max - min) + min);

}

random(501, 600)
*/












//<---------------------------------------------------------->











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











//<---------------------------------------------------------->









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










//<---------------------------------------------------------->











// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.



function prime(num) {
    let nReg = /[0-9]/ig;

    if (nReg.test(num) === false || Math.sign(num) === -1) {
        console.log("Input a positive number");
    } else if (num === 1 || num === 2) {
        console.log("Primo");
    } else if (num === 0) {
        console.log("0 is not a prime number");
    }

    for (i = 2; i < num - 1; i++) {
        if (num % i === 0) {
            return console.log("It's not a prime number")
        }
    }
    return console.log("It is, indeed, a prime number")
}









//<---------------------------------------------------------->














// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.



/*


function even_uneven(num) {
    let regEx = /[0-9]/
    let wholeRegEx = /./ig
    let spcRegEx = /\s/ig


    if (wholeRegEx.test(num) === false || spcRegEx.test(num) === true || num === undefined) {
        console.log("Input something")

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









//<---------------------------------------------------------->









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














//<---------------------------------------------------------->















// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.




//dec to bin: https://www.youtube.com/watch?v=8USbTNHvQik 
// function convert(num, type) {

//     num = num.toString();
//     type = type.toString();
//     //We convert the values to strings because I can't test via regEx2 the num value if it's not a string.


//     let regEx1 = /^[0-9]*$/ //this regex means matching only numbers and nothing else. 
//     let regEx2 = /[2-9]/
//     if (regEx1.test(num) === false) {
//         return console.log("Input a correct value as number");
//     } else if (regEx1.test(type) === false || (type != 2 && type != 10 && type != "2" && type != "10")) {
//         return console.log("the base must be 2 or 10");
//     } else if ((type === 2 || type === "2") && regEx2.test(num) === true) {
//         console.log("If the base is 2, you must input a binary number", num);
//     }


//     if (type == 10) {
//         arr = []
//             // arr2 = []
//         let a = num //We create this variable for the for loop, because if we iterate on the "num" variable, and manage it inside the loop at the same time, the "i" variable won´t make any sense and the loop won't iterate the times needed. 
//         for (i = 0; i < a; ++i) {

//             arr.push(Math.floor(num % 2))
//                 // arr2.push(Math.floor(num / 2))
//             num = Math.floor(num / 2)

//             if (num < 1) {
//                 break
//             }
//         }

//         console.log(`This is the decimal number made binary: ${arr.reverse()}`)
//     }

//     //bin to dec: https://youtu.be/CUr74ebGWT8

//     if (type == 2) {

//         arr = []
//         arr2 = []
//         arr3 = []
//         arr4 = []
//         for (i = 0; i < num.length; i++) {
//             arr.unshift(num[i])
//             arr2.push(Math.pow(2, i))
//         }

//         for (i = 0; i < num.length; i++) {
//             arr3.push(arr[i] * arr2[i])
//         }

//         const reducer = (accumulator, currentValue) => accumulator + currentValue;

//         console.log(arr);
//         console.log(arr2)
//         console.log(`This is the binary number made decimal: ${arr3.reduce(reducer)}`)
//     }

// }

// convert(1010110101010, 2);














//<---------------------------------------------------------->











// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.



// 20% de 60 = (20 x 60) / 100 = 12 


/*

function discount(num, dis) {
    regEx = /\s/
    regEx1 = /./
    regEx2 = /[A-z]/
    regEx3 = /[0-9]/

    if (num === undefined || dis === undefined) {
        return console.log("Please, input both values");
    } else if (isNaN(dis) === true || isNaN(num)) {
        return console.log("Input only numbers");
    } else if (dis > 100) {
        return console.log("The discount cannot be superior to the 100% of the cost of the product")
    }




    let a = (dis * num) / 100
    console.log(`The final price is: ${num-a}$`)
}

discount(20, 1)

*/















//<---------------------------------------------------------->












// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

/*
function date(dt) {

    //If no Date object is inputted, it will return the typical 'this method is not a function' error. Type the method without parenthesis, and check if it's a function. If there is no function, the input is wrong, because the function exists only when the associated object is into the scope, and we're working with a Date() object.

    if (typeof dt.getFullYear != 'function') {

        return console.log(`Input a date!`)

        // console.log(typeof dt == "string")

    } else if (dt === undefined) {

        return console.log(`Input something`)

    } else {
        let a = new Date();
        let y = dt.getFullYear();
        let c = a.getFullYear();
        console.log(y);
        console.log(a);
        console.log(c);

        console.log(`${c-y} years have passed since the date you've inputted`)


    }

}

date(new Date(1984, 12, 30))

*/



















//<---------------------------------------------------------->









// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

/*
function vowelOrCons(str) {


    let a = 0
    let b = 0
    let arr = str.split("")

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            a++
        } else {
            b++
        }

        if (arr[i] === " ") {
            b--
        }
    }



    console.log(`The string has ${a} vowels`)
    console.log(`The string has ${b-1} consonants`)
    console.log(arr)
}

vowelOrCons("Hola mundo Z aaa N");


*/
















//<---------------------------------------------------------->













// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


/*
function checkName(str) {
    regEx = /\s/
    regEx2 = /[A-Za-zÁÉÍÓÚáéíóúñÑ]/
    if (typeof str != "string") {
        return console.warn("Introduce a string")
    } else if (str.length > 30) {
        return console.warn("Don't input a string that is too long")
    } else if (regEx.test(str) === false) {
        return console.warn("The name must contain a blank space")
    }

    let arr = str.split("");

    for (i = 0; i <= str.length; i++) {

        if (regEx2.test(arr[i]) === false && arr[i] != " " && arr[i] != "-") {
            return console.warn("Input only latin characters")
        }
    }

    let a = 0

    for (i = 0; i < str.length; i++) {
        if (arr[i] === " ") {
            a++
        }
        if (a > 3) {
            return console.warn("Don't input more than 3 spaces")
        }
    }


    console.log("Valid name!")


}

checkName("Sergio Núñez  ");
*/











//<---------------------------------------------------------->










// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


/*
function email(email) {
    const a = /\./

    if (typeof email != "string") {
        return console.warn("Input a string with an email in it")
    } else if (email.length < 1) {
        return console.warn("Don't imput an empty string")
    }

    const regEx1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const regEx2 = /\s/

    const regEx3 = /[-! " # $ % & ' ( ) * +,  / :;= ? [ ^ _ ` { | } ~ ]/



    if (regEx2.test(email) === true) {
        return console.warn("Don't input blank spaces");
    } else if (regEx3.test(email) === true) {
        return console.warn("Input only @ . and A-z")
    } else if (regEx1.test(email) === true) {

        //Here we check if, from the dot, the email has a normal amount of characters (.net, .com, .onion, .uk would be valid domains).

        for (i = 0; i < email.length; i++) {
            strArr = []
            if (a.test(email.charAt(i)) === true) {
                for (e = i; e < email.length; e++) {
                    strArr.push(email.charAt(e))
                }

                if (strArr.length > 6 || strArr.length < 3) {
                    return console.warn("The e-mail domain must contain between 2 and 5 characters.")
                }
                //console.log(strArr);
            }
        }
        console.log("Valid email!");
    }

}

email("example@example.net");


*/










//<---------------------------------------------------------->






// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

//Reminder: when we execute a self invoking anonymous function, the values it returns go straight to the general scope, and the function itself is discarded. 




/*
(function(arr) {

    if (arr === undefined) {
        return console.warn("Input an array")
    } else if (isNaN(arr[0]) === true) {
        return console.warn("Input an array")
    } else {

        //One last validation, over each element of the array:

        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] != "number") {
                return console.warn("All the elements of the array must be numbers")
            }
        }


        arr2 = []
        for (i = 0; i < arr.length; i++) {

            arr2.push(arr[i] * arr[i])

        }
        console.log(arr)
        console.log(arr2)
    }
})

([1, 4, 5]);

*/












//<---------------------------------------------------------->







// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

/*
(function(arr) {
    function bigger(arr) {
        for (i = 0; i <= arr.length; i++) {

            //the filter method allows us to apply a condition to all the elements of the array.

            let nArr = arr.filter(x => x > arr[i])

            if (nArr[1] === undefined) {
                return nArr[0]
            }

        }
    }

    var a = bigger(arr);
    console.log(a)

    function lesser(arr) {
        for (i = 0; i < arr.length; i++) {
            let nArr = arr.filter(x => x <= arr[i])


            if (nArr[1] === undefined) {

                return nArr[0]
            }
        }
    }

    var b = lesser(arr);
    console.log(b);


    return console.log(`The lesser number of your array is ${b}, and the bigger ${a}.`)


})([1, 120, 4, 5, 199, -60, 50505, 20, -3232, 17, 100202, -89, 10, 1, 2, 2002]);


*/









//<---------------------------------------------------------->






//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

/*
function evenUneven(arr) {
    even = []
    uneven = []

    let object = {
        evenArray: [],
        unevenArray: []
    }


    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
            object.evenArray.push(arr[i])
        } else {
            uneven.push(arr[i]);
            object.unevenArray.push(arr[i])
        }
    }

    //console.log(even)
    //console.log(uneven)
    console.log(`These are the even numbers of your array: ${object.evenArray}. These are the uneven numbers of your array: ${object.unevenArray}`)

}

evenUneven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/











//<---------------------------------------------------------->








//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. 


/*
function lesser(arr) {

    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr)

}

function bigger(arr) {
    arr.sort().reverse()

    console.log(arr)
}


lesser([7, 5, 7, 8, 6])
bigger([7, 5, 7, 8, 6])

*/






//<---------------------------------------------------------->







// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


/*
let Arr = ["x", 10, "x", 2, "10", 10, 10, true, true]


function eliminateDuplicates(Arr) {
    mirar, para indexOf: https://mzl.la/38zywuT;
    mirar, para Array.prototype.filter: https://mzl.la/2WRERPX;

    //Básicamente le decimos al método filter: mete en el nuevo array el valor en cuestión si arr.indexOf(value) da como resultado el índice que estamos tratando. indexOf devuelve el primer índice donde aparece el elemento value. 
    const result = Arr.filter((value, index, arr) => arr.indexOf(value) === index);
    console.log(result);


}



eliminateDuplicates(Arr);


function eliminateDuplicates2(Arr) {

    let result = [...new Set(Arr)]
    return console.log(result)
}



eliminateDuplicates2(Arr);




//Una forma de preguntarle al programa si hay duplicados en el array: 

function hasDuplicates(Arr) {
    if (Arr instanceof Array) {
        for (let i = 0; i < Arr.length - 1; ++i) {
            //console.log(i)
            if (Arr.slice(i + 1).indexOf(Arr[i]) !== -1) {
                return true;

                //Con slice(index) creamos un array a partir de una posición determinada del anterior array. Luego preguntamos al programa: ¿cuál es el índice de arr[i]? Si da positivo, quiere decir que está en el nuevo array, ergo, está duplicado en el primero.
            }
        }
        return false;
    } else {
        throw TypeError('El argumento de la función debe ser un arreglo')
    }
}

try {
    console.log(hasDuplicates(Arr));
} catch (e) {
    console.log(`Error: ${e.message}`);
}



//Forma alternativa de eliminar duplicados: 

function eDup(Arr) {
    console.log(Arr);
    nArr = Arr;
    if (nArr instanceof Array) {
        for (i = 0; i < nArr.length - 1; i++) {
            if (nArr.slice(i + 1).indexOf(nArr[i]) !== -1) { nArr.splice(i, 1), i-- }
        }
        return `This is the new array without the duplicates: ${nArr}`
    } else {
        throw TypeError(`El argumento debe ser un arreglo`);
    }
}


console.log(eDup(Arr));

*/
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
/*
(function pr(arr) {
    let b = 0,
    i = b;
    arr.reduce((acc, value) => {
        b += value
        i++
    }, 0);
    return console.log(`The average is: ${b/i}`)
}([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
*/

























// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica  de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.



class film {
    constructor(id, title, director, release, countries, genre, score) {
        this.id = id,
            this.title = title,
            this.director = director,
            this.release = release,
            this.countries = countries,
            this.genre = genre,
            this.score = score;
    }



    // static id(obj) {
    //     if (obj.id.length < 5) {
    //         return console.log('invalid object');
    //     }
    // }

    // id2() {
    //     if (this.id) {
    //         return console.log('Execution of the id2 non-static method');
    //     }
    // }

    static validG() {
        return "Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western"
    }

    throwData() {
        return console.log(`Id: ${this.id}`), console.log(`Title: ${this.title}`),
            console.log(`Director: ${this.director}`),
            console.log(`Release: ${this.release}`),
            console.log(`Countries: ${this.countries}`),
            console.log(`Genre: ${this.genre}`),
            console.log(`Score: ${this.score}`);
    }
}


let I_Care_A_Lot = new film('tt9813250', 'I Care a Lot', 'J Blakeson', '2020', ['United States'], ['Comedy', 'Crime', 'Thriller'], '6.6');

(function(obj) {
    let oArr = Object.values(obj);
    for (i = 0; i < oArr.length; ++i) {
        if (oArr[i] === undefined) {
            return console.log('The film must have 7 data');
        }
    }

    (function() {
        let rEx = /^[a-z]{2}[0-9]{7}$/;
        if (rEx.test(oArr[0]) === false) return console.log('The IMDb ID must be inputted in this format: tt0000000');

    }());

    (function() {
        let rEg = /^[\w\s]{1,100}$/;
        if (rEg.test(oArr[1]) === false) {
            return console.log('The title must contain a title between 1 and 100 characters.');
        }
    }());

    (function() {
        let rEx = /^[\w\s]{5,50}$/i;
        if (rEx.test(oArr[2]) === false) {
            return console.log("The director's name must contain a title between 1 and 50 characters.");
        }
    }());

    (function() {
        let rEx = /^(20[01][0-9]|(202[0-1]))|(189[0-9]|(19[0-9][0-9]))$/;
        if (rEx.test(oArr[3]) === false) {
            return console.log("The release date must be between 1890 and 2021.");
        }
    }());

    (function() {

        if (Array.isArray(oArr[4]) === false) {
            console.log("The countries must be inputted in the form of an array");
        }
    }());

    (function() {
        if (Array.isArray(oArr[5]) === false) {
            console.log('The genres must be inputted in the form of an array')
        }
    }());

    (function() {
        let a = []
        let genres = [/^[Aa]ction$/, /^[Aa]dult$/, /^[Aa]ction$/, /^[Aa]nimation$/, /^[Aa]iography$/, /^[Cc]omedy$/, /^[Cc]rime$/, /^[Dd]ocumentary$/, /^[Dd]rama$/, /^[Ff]amily$/, /^[Ff]antasy$/, /^[Ff]ilm Noir$/, /^[Gg]ame-Show$/, /^[Hh]istory$/, /^[Hh]orror$/, /^[Mm]usical$/, /^[Mm]usic$/, /^[Mm]ystery$/, /^[Nn]ews$/, /^[Rr]eality-TV$/, /^[Rr]omance$/, /^[Ss]ci-Fi$/, /^[Ss]hort$/, /^[Ss]port$/, /^[Tt]alk-Show$/, /^[Tt]hriller$/, /^[Ww]ar$/, /^[Ww]estern$/];

        for (i = 0; i < oArr[5].length; ++i) {
            for (e = 0; e < genres.length; ++e) {
                if (genres[e].test(obj.genre[i]) === true) {
                    a.push(oArr[5][i])
                }
            }
        }

        if (a.length !== obj.genre.length) {
            console.log(`The array has an invalid genre into it`);
        }
    }());

    (function() {
        if (/^(([0-9]|10)|([0-9][\.\'\,][0-9]))$/.test(oArr[6]) === false) {
            console.log(`The inputted film score ${oArr[6]} is wrong`)
        }
    }());
}(I_Care_A_Lot));



console.log('Valid genres: ', film.validG());
I_Care_A_Lot.throwData();
//console.log(film.id(I_Care_A_Lot));
// console.log(I_Care_A_Lot.id2());




//   - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.


let arr = [{
        id: "tt1853257",
        title: "E.T",
        director: 'J Blakeson',
        release: '1976',
        countries: ['United States', 'England', 'Germany'],
        genre: ['Romance', 'Fantasy'],
        score: '8'
    },
    {
        id: "tt9813250",
        title: "Made Up Film",
        director: 'Mr Noone',
        release: '2020',
        countries: ['United States'],
        genre: ['Comedy', 'Crime', 'Thriller'],
        score: '6.6'
    },
    {
        id: "tt0842641",
        title: "Rambo",
        director: 'Charles McMillan',
        release: '1973',
        countries: ['United States', 'France'],
        genre: ['Explotions', 'Action', 'Adventure'],
        score: '8.5'
    }
];


// console.clear();


for (i = 0; i < arr.length; i++) {
    let a = Object.values(arr[i]);
    console.log(new film(`${a[0]}`, `${a[1]}`, `${a[2]}`, `${a[3]}`, `${a[4]}`, `${a[5]}`, `${a[6]}`).throwData());
}