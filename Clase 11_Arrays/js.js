const a = ["C"]
const b = [1, true, "Hola", ["A", "B", `${a}`]];
console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][2][0]);


const c = Array.of("X", "Y", "Z", 9, 8, 7);
//Array.of creates an array from a certain amount of arguments.

console.log(c);

const d = Array(100).fill(1);
console.log("Array.fill: ", d);

//With this syntax, we can create an array from scratch, filled with a certain value. Nonetheless, it's commonly used like this: https://mzl.la/2TO1GCl

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);
//The push() method inputs an element to the bottom of the array.
colores.pop();
console.log(colores);
//The pop() method extracts an element from the bottom of the array.


//The forEach() method executes a provided function once for each array element.: https://mzl.la/3gNc3Os

colores.forEach(function(el, index, array) {
    console.log(`<li id="${index}">${el}</li>`);
    // console.log(array)
});


//HIGH ORDER FUNCTIONS FOR ARRAYS:


//ARRAY REDUCE:


const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];

let total = scores.reduce((acc, el) => acc + el, 0);
console.log(total);

//Aquí el acumulador es el array. Se va sobreescribiendo con cada iteración que se hace sobre cada elemento del array. 1ª iteración => [90, 90], 2º => [30, 90] 3º => [20, 90] 4º => [20, 90], etc.

let minMax = scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
console.log(minMax);


const students = [{
    userid: 'stevenh',
    name: 'Steven',
    passFail: true
}, {
    userid: 'beodric234',
    name: 'Beodric',
    passFail: false
}, {
    userid: 'rob21',
    name: 'Robert',
    passFail: false
}, {
    userid: 'Johnny21',
    name: 'John',
    passFail: true
}];
//Queremos hacer de este objeto, otro objeto con la estructura id como propiedad: todo el objeto como valor. Por ejemplo: stevenh: {}.
let studentObj = students.reduce(function(acc, person) { return {...acc, [person.userid]: person } }, {});

console.log(studentObj)

//Obtenemos algo así: Jhonny: Object{userid: "Johnny21", name: "John", passFail: true}
//Esto es útil para poder acceder de cara al futuro cada objeto con object.userid. Ej: studentObj.stevenh;

//Explicación de Nicolás Schurmann: 

const mascotas = [
    { nombre: 'Pelusa', edad: 12, raza: 'gato' },
    { nombre: 'Puchini', edad: 12, raza: 'perro' },
    { nombre: 'Pulga', edad: 10, raza: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, raza: 'gato' }
]
console.log(mascotas)
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    //hay que poner el.nombre entre corchetes, por sintaxis.
    [el.nombre]: el
}), {})
console.log(indexed);

//Vamos a desanidar (o aplanar) este arreglo:
const anidado = [1, [2, 3], 4, [5]];

const plano = anidado.reduce((acc, el) =>
    acc.concat(el), []);

console.log(plano);



//ARRAY FILTER: Crea un arreglo igual o menor que el arreglo de referencia. Es un método inmutable.
// const mascotas = [
//     { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
//     { nombre: 'Puchini', edad: 12, tipo: 'gato' },
//     { nombre: 'Pulga', edad: 10, tipo: 'gato' },
//     { nombre: 'Chanchito feliz', edad: 3, tipo: 'gato' }
// ]

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosFiltrados = numeros.filter(x => x < 5); //la función devuelve true o false, y dependiendo de si pasa el test o no, el dato iterado se incorpora al nuevo array.
console.log(numerosFiltrados, numeros);

const perros = mascotas.filter(x => x.raza === 'perro');

console.log(perros);

const gatos = mascotas.filter(x => x.raza === 'gato');
console.log(gatos);


//ARRAY MAP:

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i]
    };
    return acumulado;
};
const numArr = [1, 2, 3, 4, 5];
console.log(suma(numArr));

// multiplicar * 2
//Vamos a multiplicar los números por dos con Array.prototype.map();

const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados);
// creando un nuevo array de pares:
const parejas = numeros.map(x => [x, x]);
console.log(parejas)


const peces = [
    { nombre: 'Nemo', edad: 2, familia: 'Poeciliidae' },
    { nombre: 'Sebas', edad: 3, familia: 'Betta splendens' },
    { nombre: 'Mary', edad: 1, familia: 'Cichlidae' },
    { nombre: 'Poppy', edad: 1, familia: 'Poeciliidae' }
]

//sacando la edad promedio:

const resultado1 = suma(peces);
console.log(resultado1);

const edades = mascotas.map(x => x.edad);
const resultado = suma(edades) / edades.length
console.log(edades);
console.log(resultado);


//Ejemplo de la MDN.
let kvArray = [{ clave: 1, valor: 10 },
    { clave: 2, valor: 20 },
    { clave: 3, valor: 30 }
];

let reformattedArray = kvArray.map(function(obj) {
    let rObj = {};
    rObj[obj.clave] = obj.valor;
    return rObj;
});

console.log(reformattedArray);
//Sacar los unicodes de un string:

let map = Array.prototype.map;
let valores = map.call('Hello World', function(char) { return char.charCodeAt(0); });
// valores ahora tiene [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


//ARRAY SORT:

//Si no se especifica patrón de ordenamiento, ordenará los caracteres acorde a los códigos unicode.
//https://mzl.la/36f78kL

//Vamos a ordenar este array por lastName, y pasando dicha propiedad a lowercase:

let arr = [{
    firstName: 'Steven',
    lastName: 'Hancock',
    score: 90
}, {
    firstName: 'Lynette',
    lastName: 'Jorgensen',
    score: 100
}, {
    firstName: 'Andrew',
    lastName: 'Wilson',
    score: 71
}, {
    firstName: 'Annika',
    lastName: 'Turner',
    score: 82
}];

// arr.sort()
//Ordenando por apellido: 
// arr.sort(function(a, b) {
//     if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
//         return -1
//     if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
//         return 1
//     return 0
// });
// console.log(arr)

arr.sort(function(a, b) {
    return a.score - b.score;
})

console.log(arr)

//Array sort modifica el array original siempre, aunque crees un nuevo array, o lo ejecutes después de console.log(array).


//¿Cómo revertir un string con caracteres especiales, sin modificar la posición de dichos caracteres especiales? 

//Input: 'a,b$c'
//Output: 'c,b$a'

const theStr = 'a,b$cdef*gh,ijk'; //k,j$ihgf*ed,cba

//Vamos a crear una función que dé un objeto con dos arrays: uno con los índices de los caracteres especiales, y otro con los corrientes:

const indexOfLettersAndNonLetters = function(str) {
    return [...str].reduce((indexObj, item, index) => {
        //Vamos a conseguir el unicode de cada caracter, para saber si es una letra o algo más.
        let code = item.charCodeAt();

        (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? indexObj.letters.push(index): indexObj.others.push(index);

        return indexObj;
    }, { letters: [], others: [] })
};

console.log(indexOfLettersAndNonLetters(theStr));
const reverseOnlyLetters = function(str) {
    let indexObj = indexOfLettersAndNonLetters(str);

    return [...str].reduce((revOrder, item) => {
        let code = item.charCodeAt();
        //Dependiendo de qué caracter sea, simple o no, hace un revOrder[x] = item, a través de revOrder[indexObj.letters.pop()] o revOrder[indexObj.others.shift()]. O sea, saca del array de índices de caracteres simples el último número, y establece que en el nuevo array, item (que empezamos a iterar por el principio) estará en ese índice. Si el caracter es complejo, usa revOrder[indexObj.others.shift()], que es como poner arr[x].shift., de forma que mete el caracter complejo en el mismo indice que en el que estaba en el anterior array. Uno se pregunta: ¿cómo puede meter por ejemplo, un caracter simple en índice 15, si no ha rellenado el array todavía? Al establecer que el caracter debe ir en ese indice tan avanzado, se llena el resto de índices hasta llegar al 15 con <empty slot>
        (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? revOrder[indexObj.letters.pop()] = item: revOrder[indexObj.others.shift()] = item;
        console.log(revOrder);
        return revOrder;
    }, []).join('');
};

console.log(reverseOnlyLetters(theStr));