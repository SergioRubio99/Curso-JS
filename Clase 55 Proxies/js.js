//The proxy allows us to create an object from another object, applying validations or pieces of code too when creating it: https://mzl.la/3qsAmFR.

const person = {
    nombre: '',
    apellido: '',
    edad: 0
}

const handler = {
    //handler.set() here is a particular method for proxies. It receives three values: the object itself, its properties, and the value of those properties. It executes every element is inputted.
    set(obj, prop, val) {
        obj[prop] = val
    }
}

const jon = new Proxy(person, handler);
jon.nombre = "Jon";
jon.apellido = "Pérez";
jon.edad = 20;
jon.twitter = "@twitter";
//Id we execute this with the handler.set() empty, it will give an object with three empty properties. It is there in the handler where we design the new object.
console.log(jon);

//There is a connection between the proxy and its father, so if you add a property or a method to the son, it will be added to the father too.:

console.log(person)


//You can create a proxy so it validates that the new object only has the same properties of its father:

const human_being = {
    name: "",
    surname: "",
    size: "",
    skills: ""

}

const handler2 = {
    set(obj, prop, val) {

        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error('The property: ' + prop + 'is not into the father object');
        }
        //Let's input another validation:

        if ((prop === 'name' || prop === 'surname') && (/^[A-Z][a-z]{1,30}$/.test(val) === false)) {
            return console.error('The property ' + prop + ' only accepts characters');
        }
        obj[prop] = val;

    }
}

const Brian = new Proxy(human_being, handler2);
console.log(Brian);
Brian.name = 'Brian';
Brian.surname = 'Thompson';
Brian.size = "5'99";
Brian.skills = 'Math, social skills, programming';

console.log(Brian);
console.log(human_being);


Brian.twitter = '@thompson';
//Brian and human_being keep the same properties.
console.log(Brian);
console.log(human_being);