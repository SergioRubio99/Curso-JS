//We used to think that the event handler function can only receive one value, the event itself. Here we'll see how to pass different values.

function hiWorld() {
    //It may be relevant to handle the event itself. It contains an endless amount of values and methods
    alert('Hi world');
    console.log(event);
}

function greeting(name = '@Unknown') {
    console.log(`Hola ${name} - ${event}`);
}

const $semanticEvent = document.getElementById('Semantic event');
const $removedEvent = document.getElementById('Remove event')

$semanticEvent.onclick = hiWorld;

$semanticEvent.onclick = function(e) {
    console.log("Semantic Handler function")
    console.log(e);
    console.log(event);
};


const $multipleEvent = document.getElementById('Multiple event');
// $multipleEvent.addEventListener('click', hiWorld);
$multipleEvent.addEventListener('click', hiWorld);
$multipleEvent.addEventListener('click', (e) => {
    alert('Hi world. Multiple events handler');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);

});

//Lesson 73:
//We used to think that the event handler function can only receive one value, the event itself. Here we'll see how to pass different values, using an arrow function.


$multipleEvent.addEventListener('click', () => {
    greeting();
    greeting('Sergio');
});

const removeDoubleClick = (e) => {
    alert(`Removing the type ${e.type} event`);
    console.log(e);
    $removedEvent.removeEventListener('dblclick', removeDoubleClick);
    //Then we add the HTML attribute 'disabled':
    $removedEvent.disabled = true;
}

$removedEvent.addEventListener('dblclick', removeDoubleClick);

//removeEventListener needs necessarily two arguments, the type of the event and the event listener function, wich cannot be an anonymous function. It must be an invoked one.

//https://bit.ly/3dpkpLu