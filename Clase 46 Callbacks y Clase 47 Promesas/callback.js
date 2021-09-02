//EXERCISE: Filter the students by score (>50) and location ('East') using callbacks. Make a list of passed students, and another made of failing students. Then, make a callback function that allows you to know the sum of all the East school scores, and how many students are from that school.

//Credit: https://youtu.be/Nau-iEEgEoM
let students = [{ name: "Lena", score: 90, school: "East" }, { name: "Jonah", score: 60, school: "West" }, { name: "Alfred", score: 30, school: "East" }, { name: "Robinson", score: 90, school: "East" }, { name: "Louis", score: 90, school: "South" }, { name: "Jonathan", score: 80, school: "South" }, { name: "Lauren", score: 90, school: "North" }, { name: "Alexandra", score: 90, school: "East" }, { name: "Natasha", score: 60, school: "East" }]

let filter = function(data, callback) {
    for (i = 0; i < data.length; ++i) {
        if (data[i].school.toLowerCase() === 'east') {
            if (typeof callback === 'function') {
                callback(data[i])
            }
        }
    }
}

passing = [];
failing = [];

filter(students, function(obj) {
    console.log(obj.name);
    if (obj.score > 50) {
        passing.push(obj.name)
    } else {
        failing.push(obj.name)
    }
})

console.log(`Passing students: ${passing}`);
console.log(`Failing students: ${failing}`);

detTotal = function(obj) {
    let Total = 0,
        Count = Total;

    filter(students, function(obj) {
        Total += obj.score;
        Count++
    });

    console.log(`East school scores: ${Total}.`, `East school students: ${Count}`)
}

detTotal()