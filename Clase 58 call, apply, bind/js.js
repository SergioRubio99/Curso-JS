console.log(this);
this.place = 'Global context';

function salute(greeting, who) {
    console.log(`${greeting} ${who}, from the place: ${this.place}`);

}

salute('Hi', 'Sebastien');

const obj = {
    place: 'Object context'
}


salute.apply(obj, ["Hi", "Sergio"]);
salute.apply(null, ["Hi", "Sebastien"]);
salute.apply(this, ["Hi", "Martin"]);
//The call() method defines the conext. Here tells the invoked function to execute in the context of obj: 
salute.call(obj, "Hi", "Jon");
//Typing 'null' or 'this', you go to the global context again:
salute.call(null, "Hi", "George");
salute.call(this, "Hi", "Robert");

const person = {
    name: "James",
    salute: function() {
        console.log(`Hi ${this.name}`);
    }
}
this.name = 'Window'
person.salute();

const anotherPerson = {
    //We use the 'bind' method to link a context. Here we used a function invoked from another object, which will return undefined, because it has no this element. We need to bind the context with the bind() method.
    salute: person.salute.bind(person)
}

anotherPerson.salute()

const anotherPerson2 = {
    //If we put 'this', instead of 'person', we will get 'Hi Window'
    salute: person.salute.bind(this)
}

anotherPerson2.salute()