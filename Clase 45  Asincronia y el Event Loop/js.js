/*
//https://bit.ly/3xOUp3R

Antes de explicar como funciona el modelo de JavaScript es important entender algunos conceptos: 

Procesamiento Single thread y Multi thread.
Operaciones de CPU y Operaciones de I/O.
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Síncronas y Asíncronas.

*/


/*Código Síncrono Bloqueante.*/

// (() => {
//     console.log('Código síncrono');
//     console.log('Inicio');

//     function dos() {
//         console.log('Dos');
//     };

//     function uno() {
//         console.log('Uno');
//         dos();
//         console.log('Tres');
//     };

//     uno();
//     dos();
//     console.log('Fin');
// })();

// 

/*Código Asíncrono No Bloqueante. */


(() => {
    console.log('Código Asíncrono.');
    console.log('Inicio');

    function dos() {
        setTimeout(function() {
            console.log('Dos');
        }, 3000);
    }

    function uno() {
        setTimeout(function() {
            console.log('Uno');
        }, 0);
        //Why would you execute a piece of code into a setTimeout zero? to defer something until the stack is clear. 
        dos();
        console.log('Tres')
    }

    uno();
    console.log('Fin');
    console.log('**************************');
})();