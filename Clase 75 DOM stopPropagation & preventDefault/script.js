const $eventsDivs = document.querySelectorAll('.flow-events div'),
    $eventsLink = document.querySelector('.flow-events a');

console.log($eventsDivs);

function eventsFlow(e) {
    console.log(`Hi, ${this.className} is greeting you. ${e.target.className} originated this click`);
    // e.stopPropagation()

}

$eventsDivs.forEach(div => {
    //If you invert the propagation, putting true after eventsFlow, the click event won't work.
    div.addEventListener('click', eventsFlow)

});

//Warning! you must add the element itself. querySelectorAll, for instance, gives you a nodelist. Take care of the methods that won't return an HTML element. 
console.log($eventsLink);
$eventsLink.addEventListener('click', (e) => {
    alert('Hi, this website is yellow')
        //To prevent the element from doing its default action: 
    e.preventDefault();
    //To stop the propagation of the link:
    // e.stopPropagation();

});