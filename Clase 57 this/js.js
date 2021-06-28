console.log(this);
console.log(window);
console.log(this === window);

this.addedProp = 'Global Context';
console.log(addedProp)
console.log(this.addedProp)

function print() {
    console.log(this.addedProp)
}
//This function prints addedProp because we are in the general scope.

print();

const obj = {
    addedProp: 'First Object Context',
    print: function() {
        console.log(this.addedProp)
    }
}

obj.print();

const obj2 = {
    addedProp: 'Second Object Context',
    //this print method, refers to print(), the previous global scope declared function. It will print the local scoped value, though the function comes from the global scope.
    print
}

obj2.print();


//The arrow function elevates the scope:
const obj3 = {
    addedProp: 'Third Object Context',
    print: () => {
        console.log(this.addedProp);
    }
}

obj3.print();
//The constructor function creates its own scope:
function Person(name) {
    this.name = name;
    return console.log(this.name)
}

let jon = new Person('Jon');

//This function 
function Person2(name) {
    this.name = name;
    //Here we see another in-deep scope. To execute that console.log() we'd need to instanciate it outside.
    return function() {
        // this.name = "fdffddf";
        console.log(this.name);
    }
}

let Sergio = new Person2('Sergio');
Sergio();
//After instanciating it, we see it refers to the Global Context. It has no name property, so it goes straight to the global context.