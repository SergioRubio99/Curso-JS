console.log("Inicio");

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
}, 3000);

setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

let tempor = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(tempor);
console.log("Después de ejecutar el método ClearTimeout()");

clearInterval(tempor);
console.log("Después de ejecutar el método ClearInterval()");