//Función anónima autoejecutable

(function() {

    console.log("Mi primera Función autoejecutable")


})(); //Aquí es obligatorio poner ;


(function(d, w, c) {

    console.log("Mi segunda Función autoejecutable");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Esto es un console.log")

})(document, window, console);



alert("Hola");