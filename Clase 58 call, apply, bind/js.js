console.log(this);
this.place = 'Global context';

function salute(greeting, who) {
    console.log(`${greeting} ${who}, from the place: ${this.place}`);

}

salute('Hi', 'Sebastien');

const obj = {
    place: 'Context: object'
}


salute.apply(obj, ["Hi", "Sergio"]);
salute.apply(null, ["Hi", "Roland"]);
salute.apply(this, ["Hi", "Martin"]);

salute.call(obj, "Hi", "Jon");
//Typing 'null' or 'this', you go to the global context again:
salute.call(null, "Hi", "George");
salute.call(this, "Hi", "Robert");

const person = {
    name: "James",
    //If we used an arrow function here, we'd get an 'undefined'. Why? Because we'd be operating into the context of its father element, where we didn't set a name. 
    salute: function() {
        console.log(`Hi ${this.name}`);
    }
}
this.name = 'Window'
person.salute();

const anotherPerson = {
    //We use the 'bind' method to link a context: 
    salute: person.salute.bind(person)
}

anotherPerson.salute()

const anotherPerson2 = {
    //If we put 'this', instead of 'person', we will get 'Hi Window'
    salute: person.salute.bind(this)
}

anotherPerson2.salute()