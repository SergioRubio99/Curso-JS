let nombre = "Sergio";
let apellido = "Rubio Chavarría";
let saludo = new String("Hola Mundo");
let lorem = "          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                     "

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("amet"),
    lorem.includes("Sergio"),
    lorem,
    lorem.trim(),
    lorem.split(),
    lorem,
    lorem.split(","),
    lorem,
    "Blue Whale".indexOf("Blue")
    //lastIndexOf e indexOf: https://mzl.la/2TIyzAH
);
//Todos los métodos: https://mzl.la/36eJCV0
console.clear()


//Concatenación:

let saludo2 = "Hola, mi nombre es " + nombre + " " + apellido + "."
console.log(saludo2);


//interpolación de variables
//Template String

let saludo3 = `Hola, mi nombre es ${nombre} ${apellido}, y esto es una template string.`;
console.log(saludo3)

let ul = "<ul><li>Primavera</li> <li>Verano</li> <li>Otoño</li> <li>Invierno</li> </ul>"

console.log(ul)

let ul2 = `<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>´`
console.log(ul2)

let ul3 = "<ul>";
ul3 += "<li> Primavera</li>";
ul3 += "<li> Verano</li>";
ul3 += "<li> Otoño</li>";
ul3 += "<li> Invierno</li>";
ul3 += "</ul>"

console.log(ul3)

//Usar indexOf para contar occurencias de una letra en una cadena: 

cuenta = 0;
posicion = lorem.indexOf("x");
while (posicion != -1) {
    cuenta++;
    posicion = lorem.indexOf("x", posicion + 1);
};
console.log(posicion);
//devolverá -1