console.log(this);
console.log(window);
console.log(this === window);
console.log(typeof window);

this.name = "Global context";
console.log(this.name);

function print() {
    console.log(this.name);
}
print();

{
    //This is not only an object, but a block too.
}

const obj = {
    name: "Context: object",
    print: function() {
        console.log(this.name);

    }
}

obj.print();

const obj2 = {
    name: 'Context: 2nd object',
    print
}

obj2.print();

const obj3 = {
    name: 'Context: 3rd object',
    print
}

obj3.print();

const obj4 = {
    name: 'Context: 4th object',
    print
}

obj4.print();


//When into an arrow function, the 'this' method doesn't generate a scope, so in this case the console will print 'Global context', not 'Context: 4th object'. It goes to the global context.

const obj5 = {
    name: 'Context: 4th object',
    print: () => { console.log(this.name) }
}

obj5.print();



function Person(name) {
    this.name = name;
    // return console.log(this.name);
    return function() {
            //Internally, this function didn't create a new context. You will get the 'Global context' again.
            console.log(`${this.name}, es this.name`)
        }
        //The arrow function, however, operates into the context of its father element.
    return () => console.log(this.name)
}

let Sergio = new Person("Sergio")
Sergio()