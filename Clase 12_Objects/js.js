let a = new String("Hola");
console.log(a);


const b = {}
console.log(b);

const c = new Object();
console.log(c);

//Dentro de un objeto, a las variables se las va a llamar atributos o propiedades, y a las funciones métodos.

const sergioRubio = {
    nombre: "Sergio",
    apellido: "Rubio",
    edad: 35,
    pasatiempos: ["Correr", "Hacer ejercicio", "Programar"],
    soltero: true,
    contacto: {
        email: "srubiochavarria@gmail.com",
        twitter: "@example",
        tlf: "+34 655127890"
    },
    saludar: function() {
        console.log(`Hola :)`)
    },
    decirMiNombre: function() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, y tengo ${this.edad} años. Me puedes seguir como ${this.contacto.twitter} en Twitter`)
            //Podrías usar: ${sergioRubio.nombre} ${sergioRubio.apellido}
    }

}

console.log(sergioRubio)
console.log(sergioRubio["nombre"])
console.log(sergioRubio["apellido"])

//más apropiado:
console.log(sergioRubio.nombre)
console.log(sergioRubio.apellido)
console.log(sergioRubio.edad)
console.log(sergioRubio.soltero)
console.log(sergioRubio.pasatiempos)
console.log(sergioRubio.pasatiempos[0])
console.log(sergioRubio.contacto);
console.log(sergioRubio.contacto.twitter);
sergioRubio.saludar();
sergioRubio.decirMiNombre();


console.log(Object.keys(sergioRubio));
console.log(Object.keys(sergioRubio.contacto))
console.log(Object.values(sergioRubio));
console.log(Object.values(sergioRubio.contacto));
//Para saber si un objeto tiene determinadas propiedades dentro: 

console.log(sergioRubio.hasOwnProperty("contacto"))
console.log(sergioRubio.hasOwnProperty("nacimiento"))