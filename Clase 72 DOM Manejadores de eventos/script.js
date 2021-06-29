function hiWorld() {
    //It may be relevant to handle the event itself. It contains an endless amount of values and methods
    alert('Hi world');
    console.log(event);
}

const $semanticEvent = document.getElementById('Semantic event');

//Warning! invoke the function with no parenthesis, so it doesn't executes immediately. In semantic events, one function substitutes the previous one. The following function won't execute:

$semanticEvent.onclick = hiWorld;

//Arrow function format:
$semanticEvent.onclick = function(e) {
    console.log("Semantic Handler function")
    console.log(e);
    console.log(event);
};

//An event handler function can't receive any input value, only the event itself. We can call it with the reserved word 'event'.


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

//Notice how we've assigned more than one function to the event, because we're not using semantic handlers, such as onclick, but addEventListener.