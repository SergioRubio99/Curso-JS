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
    this.sonar() = function() {
        document.write("Hago sonidos porque estoy vivo.")
    }


    // Recuerda, si usáramos arrow functions, no podríamos hacer uso del objeto this

    this.saludar() = function() {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

const bruno = new Animal("Snoopy", "Macho"),
    sophie = new Animal("sophie", "Hembra");

console.log(bruno, sophie);

*/


//Lo ideal es sacar los métodos de la función constructora, y asignarlos al prototipo. Esto mejorará el rendimiento de la aplicación. Ejemplo:


function Animal(nombre, genero) {
    //Atributos

    this.nombre = nombre;
    this.genero = genero;

}

//Métodos agregados al propotipo de la función constructora:

Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo.")
}


// Recuerda, si usáramos arrow functions, no podríamos hacer uso del objeto this

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`)
}

const bruno = new Animal("Snoopy", "Macho"),
    sophie = new Animal("sophie", "Hembra");

console.log(bruno, sophie);

bruno.sonar()
sophie.saludar()

bruno.saludar()
sophie.sonar()