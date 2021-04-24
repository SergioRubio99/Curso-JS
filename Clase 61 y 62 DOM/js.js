console.log("Elementos del documento:");
console.log(document);
console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.scripts);
console.log(document.getSelection().toString());

//You can input these prompts on the console, while visiting any public website, and see the elements of the DOM.

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hi buddies<h2>")
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("h2"));
console.log(document.querySelector(".card"))

console.log(document.querySelector("#h2"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll(".card")[2]) //Imprimirá el contenido de la 2da tarjeta.
console.log(document.querySelectorAll(".aside figure"))
console.log(document.querySelectorAll("h1"));
document.querySelectorAll("h1").forEach(el => console.log(el));