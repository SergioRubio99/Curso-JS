const $eventsDivs = document.querySelectorAll('.flow-events div'),
    $eventsLink = document.querySelector('.flow-events a');

console.log($eventsDivs);

function eventsFlow(e) {
    console.log(`Hi, ${this} is greeting you. ${e.target.className} originated this click`);


}

//Instead of attaching an event listener to each element ( to each div), we can set a conditional where: if the target of the click event matches a concrete HTML element (div in this case), it will execute a certain piece of code:
document.addEventListener('click', (e) => {
    console.log('Click en', e.target);

    if (e.target.matches('.flow-events div')) {
        eventsFlow(e);
    }

    if (e.target.matches('.flow-events a')) {
        eventsFlow(e)
        e.preventDefault();
    }
});

//The tools showed above, are pretty useful for setting events to async events not loaded yet.
// $eventsDivs.forEach(div => {
//     div.addEventListener('click', eventsFlow)
// });