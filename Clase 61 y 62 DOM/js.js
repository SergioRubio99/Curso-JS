// const speak = (text) => speechSynthesis.speak(new SpeechSynthesisUtterance('Hi, this is just an example of bad spoken english.'));

// speak();

//You can input these prompts on the console, while visiting any public website, and see the elements of the DOM.



console.log('***********Elementos del documento**********');

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
//How to print the list of links in the website:

console.log(document.links)

//It returns a node list, that does not share all the array methods. You couldn't apply a map() method before transforming it into an array. forEach() is shared.

//To show a list of all the images or forms present in the website: 
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

//To get mouse selected text:

// setTimeout(() => {
//     console.log(document.getSelection().toString());

// }, 2500);

//Add text to the DOM:
document.write('<h2>Hello world, from the DOM</h2>');

//Node methods:
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'));
console.log(document.querySelector('#menu')); //Due to performance reasons, getElementsByName is preferred, because it doesn't have to search if the concrete element tag.
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
//query selectors return node lists. get... methods return an array. You can use forEach on both.

document.querySelectorAll('a').forEach(el => console.log(el));

console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelector('#menu li'));
console.log(document.querySelectorAll('#menu li'));