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


