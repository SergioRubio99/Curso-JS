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


//to join arrays:

const arr3 = [...arr1, ...arr2];
console.log(arr3);



//used in object literals:

obj = {
    name: "Amanda",
    age: "35",
    country: "United States",
    state: "New Hampshire",
    marks: "27",
    giveData: function(...obj) {
        console.log(this.name, this.age, this.country, this.state, this.marks)
    }
}

console.log(obj.giveData());

let nObj = {...obj };
console.log(nObj)


let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({...objects });

let mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

console.log(mergedObj1);
console.log(mergedObj2);

//https://mzl.la/3gYzXH6