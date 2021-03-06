console.log("Inicio");

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
}, 1100);

// setInterval(() => {
//     console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
// }, 1000);

let clock = setInterval(() => {
    console.log(new Date().toLocaleTimeString('en-US'));
}, 1000);

let tempor = setTimeout(() => {
    console.log(new Date().toLocaleTimeString('en-US'));
}, 1000);

clearTimeout(tempor);
console.log("Después de ejecutar el método ClearTimeout()");

clearInterval(clock);
console.log("Después de ejecutar el método ClearInterval()");