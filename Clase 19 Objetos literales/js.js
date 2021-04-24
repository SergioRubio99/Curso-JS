let nombre = "Lucas",
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("ladrido")
    }
}

console.log(perro);
perro.ladrar()

const dog = {
    nombre,
    edad,
    raza: "Bulldog",
    ladrar() {
        console.log("Segundo Ladrido")
    }
}

console.log(dog);
dog.ladrar();