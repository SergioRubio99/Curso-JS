const numeros = [1, 2, 3];

//Sin destructuring:

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres)

//Con destructuring:

const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre: "Sergio",
    apellido: "Rubio",
    edad: 21
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);



//Examples from this another tutorial: https://bit.ly/3zGzmSO;



"use strict";

let arr = [100, 50, 60];

// let x = arr[0],
//     y = [arr1],
//     z = arr[2];

let [x, y, z] = arr

const getScores = () => [100, 85, 90, 65, 40];

let [a, b, , c] = getScores();

//The code above will place 100 in a, 85 in b, will miss the 90, and place 65 in c.

let quiz1 = [],
    quiz2 = [],
    quiz3 = [];

//Here we're using destructuring to add values to the function:
const separateScores = function([s1, s2, s3]) {
    quiz1.push(s1);
    quiz2.push(s2);
    quiz3.push(s3);
};

separateScores([111, 20, 35])
console.log(quiz1)
separateScores([111, 20, 35])
console.log(quiz1, quiz2)
separateScores([111, 20, 35])
console.log(quiz1, quiz2, quiz3)



let obj = {
    name: 'Steven',
    interests: ['reading', 'running', 'javascript'],
    email: 'srubio@correoelectronico.com'
}

//The variables must have the same name than the object properties, for the program to know which property assign.

let { name, email, interests } = obj
console.log(name, email, interests);

let stu1 = {
    name: "Jamie",
    student: true,
    score1: 100,
    score2: 90,
    score3: 60,
    score4: 85,
    score5: 0
}


let stu2 = {
    name: "Hans",
    student: true,
    score1: 50,
    score2: 45,
    score3: 90,
    score4: 0,
}

const sumFirstThreeScores = function({ score1, score2, score3 }) {
    return score1 + score2 + score3;
}


//This last example is pretty useful for operating with objects that present partially different sets of properties.



// console.clear();
//How to swap values using destructuring: 

"use strict";

let num1 = 0,
    num2 = 1,
    num3 = 2;

/*let temp;

temp = num1;
num1 = num2;
num2 = temp;*/

"use via destructuring";

[num1, num2, num3] = [num3, num2, num3]; //You can put any variable as num2 or num1 in the second array. It will switch it anyway.
console.log(num1, num2, num3);