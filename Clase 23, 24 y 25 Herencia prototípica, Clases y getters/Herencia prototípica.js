//POO

/*
Clases: Modelo a seguir.

Objetos: Instancia de una clase.

Atributos: Característica o propiedad de un objeto.

Métodos: Acciones que un objeto puede llevar a cabo.


*/


const animal = {
    nombre: "Snoopy",
    existir() {
        console.log("Soy una criatura ficticia");
    }
}

console.log(animal);


const animal2 = {
    nombre: "Lola Bunny",
    existir() {
        console.log("Soy una criatura ficticia");
    }
}

console.log(animal);
console.log(animal2);


//Función constructora:


/*
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos
    this.existir = function() {
        console.log("Soy una criatura ficticia");
    }

    this.saludar = function() {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.saludar();
snoopy.existir();

lolaBunny.saludar();
lolaBunny.existir();

*/

//Lo ideal es sacar los métodos de la función constructora, y meterlos en el prototipo. Esto mejorará el rendimiento de la aplicación. Ejemplo:


function Animal(name, gender) {
    //Atributos
    this.name = name;
    this.gender = gender;

}
//Métodos agregados al prototipo de la función constructora: 

Animal.prototype.existir = function() {
    console.log("Soy una criatura ficticia");
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.name}`)
}

// const Calamardo = new Animal("Calamardo", "Male")

// console.log(Calamardo)
// Calamardo.existir()



//Herencia prototípica

function Dog(name, gender, weight) {

    this.super = Animal;
    this.super(name, gender);
    this.weight = weight

}

//Dog está heredando de Animal.
Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

//Sobreescritura de métodos del Prototipo padre en el hijo:

Dog.prototype.sonar = function() {
    console.log("I'm a dog and my sound is a bark")
}

Dog.prototype.ladrar = function() {
    console.log("Guau guau")
}

const Bri = new Dog("Bri", "Hembra", "30kg");
const Sophie = new Dog("Sophie", "Hembra", "45kg");


Bri.sonar(), Bri.ladrar(), Sophie.sonar(), Sophie.ladrar();
console.log(Bri);
console.log(Sophie);

//Vamos a probar a crear otro animal. Gatos y lobos, por ejemplo.

function Cat(name, gender, weight) {
    this.super = Animal
    this.super(name, gender)
    this.weight = weight
}

Cat.prototype = new Animal()
Cat.prototype.maullar = function() {
    console.log("Miau miau")
}

Cat.prototype.rumiar = function() {
    console.log("Rrr Rrr")
}

const Helen = new Cat("Helen", "Female", "5kg")
Helen.maullar(), Helen.rumiar();