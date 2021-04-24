const persona = {
    nombre: "Sergio",
    apellido: "Rubio",
    edad: 20,
}

const handler = {

    set(obj, prop, val) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad ${prop} no existe en el objeto persona.`)
        }

        if (
            (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(val))

        ) {
            return console.error(`La propiedad "${prop}" sólo acepta letras y espacios en blanco`)
        }

        if ((prop === "edad") && (isNaN(val) || val > 120 || val < 1)) {
            return console.error(`La edad no es válida`);

        }

        obj[prop] = val;
    }
}

const sergio = new Proxy(persona, handler)

sergio.nombre = "sergio";
sergio.apellido = "rubio";
sergio.edad = 35;
sergio.twitter = "@netcoder";
console.log(sergio)



console.log(persona)