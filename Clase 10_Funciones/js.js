//Resumen: https://bit.ly/3ytvMu2

function unaFuncionQueDevuelveValor() {
    console.log("Uno");
    //return 19;
    console.log("Dos");
    console.log("Tres");
    return "La función ha terminado de ejecutarse";
}

let valorDeLaFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeLaFuncion)


function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("George", 20);

//Funciones declaradas VS Funciones expresadas
funcionDeclarada()

function funcionDeclarada() {
    console.log("Funcion declarada. Se produce hoisting.")
}

funcionDeclarada()

//He aquí la expresada, también conocida como función anónima:


const funcionExpresada = function() {

    console.log("Esto es una función expresada. Es decir, una a la que se ha asignado un valor como variable. Si invocamos esta función antes de su definición, JS nos dirá Uncaught ReferenceError: can't access lexical declaration 'funcionExpresada' before initialization")
}

funcionExpresada()


//Generator functions: https://mzl.la/3gWz6GK



const sumaFunction = new Function('numero_1', 'numero_2',
    'return numero_1 + numero_2'
);

// Ejecutamos nuestra función.
console.log(sumaFunction(10, 15)) // => 25