//Referencia básica: https://youtu.be/DaXuPcdKqQ4
//Explicación de Jon Mircha: 

/*
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value);
    }, 700);
};

cuadradoCallback(4, (value) => {
    console.log('Inicia el callback');
    console.log(`Callback: ${value}, ${value * value}`);
    cuadradoCallback(value * value, (value) => {
        console.log('Segunda iteración del callback');
        console.log(`Callback: ${value}, ${value * value}`);
        cuadradoCallback(value * value, (value) => {
            console.log('Tercera iteración del callback');
            console.log(`Callback: ${value}, ${value * value}`);
            cuadradoCallback(value * value, (value) => {
                console.log('Cuarta iteración del callback');
                console.log(`Callback: ${value}, ${value * value}`);
                cuadradoCallback(value * value, (value) => {
                    console.log('Quinta iteración del callback');
                    console.log(`Callback: ${value}, ${value * value}`);
                });
            });
        });

    });
});

console.log("Synchronous invokes");
console.log("Synchronous invokes");
console.log("Synchronous invokes");
console.log("Synchronous invokes");
console.log("Synchronous invokes");
console.log("Synchronous invokes");
*/
//Explicación de All things javascript: https://bit.ly/3gUkKbh

// let logCall = function() {
//     console.log('logCall was called back.')
// }

setTimeout(function() {
    console.log('logCall was called back after timeout.')
}, 1500);;


let btn = document.querySelector('#item');

btn.addEventListener('click', function(e) {
    console.log('The button was clicked.')
});



let students = [{ name: "Lena", score: 90, school: "East" }, { name: "Jonah", score: 60, school: "West" }, { name: "Alfred", score: 30, school: "East" }, { name: "Robinson", score: 90, school: "East" }, { name: "Louis", score: 90, school: "South" }, { name: "Jonathan", score: 80, school: "South" }, { name: "Lauren", score: 90, school: "North" }, { name: "Alexandra", score: 90, school: "East" }, { name: "Natasha", score: 60, school: "East" }]

let processStudents = function(data, callback) {
    for (i = 0; i < data.length; ++i) {
        if (data[i].school.toLowerCase() === 'east') {
            if (typeof callback === 'function') {
                callback(data[i])
            }
        }
    }
}

let passed = [];
let not_passed = [];
processStudents(students, function(obj) {
    if (obj.score >= 60) {
        console.log(obj.name + ' passed.');
        passed.push(obj.name);
    } else if (obj.score < 60) {
        console.log(obj.name + ' did not pass');
        not_passed.push(obj.name);
    }

    if (obj.name === 'Natasha') {
        console.log(`Students who passed: ${passed}. Students who didn't: ${not_passed}.`);
    }
})

determineTotal = function() {
    let total = 0,
        count = 0;
    processStudents(students, function(obj) {
        total += obj.score;
        count++;
    });
    console.log('Total score of all eastern students: ' + total + ' - Total Count: ' + count)
}

determineTotal();

//PROMESAS: