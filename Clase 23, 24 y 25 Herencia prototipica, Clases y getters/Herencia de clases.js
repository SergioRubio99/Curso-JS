class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre,
            this.edad = edad,
            this.correo = correo;
    }

    mostrarSaludo(saludo) {
        return saludo;
    }

    mostrarInfo() {
        return `
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Correo: ${this.correo}
        `;
    }
}

const carlos = new Usuario('Carlos Arturo', 23, "correo@ejemplo.ar");
console.log(carlos.mostrarInfo());


class Estudiante extends Usuario {
    constructor(nombre, edad, correo, carrera) {
        //El método super(); sirve para copiar el constructor(); de la función de la que heredamos:

        super(nombre, edad, correo);
        this.carrera = carrera;
        this.califications = null;
    }

    mostrarInfo() {
        return `
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Correo: ${this.correo}
            Carrera: ${this.carrera}
        `;
    }

    //Un método estático puede ejecutarse sin necesidad de instanciar la clase a través de un objeto:

    static quienSoy() {
        console.log("Soy estudiante de psicología. Me apasiona el funcionamiento de la mente humana, especialmente en situaciones de riesgo.");
    }


    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

    get Califications() {
        return this.califications;
    }

    set Califications(califications) {
        this.califications = califications;
    }
}



const alejandro = new Estudiante('Alejandro', 30, "email@ejemplo.es", "Psicología");
console.log(alejandro.mostrarInfo());

//Ejecución del método estático:

Estudiante.quienSoy();

//¿Cömo ejecutamos el método/función getter Califications? Podríamos pensar en hacerlo así
//Estudiante.Califications();  Sin embargo, Javascript convierte los métodos getter en propiedades, por lo que se ejecutaría así:


alejandro.Califications = 10;
console.log(alejandro.Califications)