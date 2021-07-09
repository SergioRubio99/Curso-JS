// console.log("Inicio");

// setTimeout(() => {
//     console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
// }, 1100);

// // setInterval(() => {
// //     console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
// // }, 1000);

// let clock = setInterval(() => {
//     console.log(new Date().toLocaleTimeString('en-US'));
// }, 1000);

// let tempor = setTimeout(() => {
//     console.log(new Date().toLocaleTimeString('en-US'));
// }, 1000);

// clearTimeout(tempor);
// console.log("Después de ejecutar el método ClearTimeout()");

// clearInterval(clock);
// console.log("Después de ejecutar el método ClearInterval()");


//CODE RELATED TO THE CLOCK AND THE ALARM:

const $div_clock = document.createElement('div');
const $div_clock_title = document.querySelectorAll('.clocks h1')[2]
const $inside_clock = document.querySelector('.inside_clock');
console.log($div_clock_title)
let tempor;

function showClock() {
    $div_clock.classList.add('clock_box_active');
    let r;
    tempor = setInterval(() => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        r = `${h}: ${m}: ${s}`
        $div_clock_title.innerHTML = `${r}`;

        //the disabled attribute is boolean: 
        // $clock_button.disabled = true;
    }, 10);


}


$inside_clock.appendChild($div_clock);
// $article_clock.appendChild($div)


//The show clock button:
const $clock_button_start = document.querySelector('.clock_button_start');
$clock_button_start.addEventListener("click", showClock);

const $clock_button_hide = document.querySelector('.clock_button_end');
//The hide clock button:
function hideClock() {
    $div_clock_title.innerHTML = `CLOCK`;
    clearTimeout(tempor)
}
$clock_button_hide.addEventListener("click", hideClock);


//The copy clock button:
let $clock_button_copy = document.querySelector('.clock_button_copy')

function updateClipboard(newClip) {
    navigator.clipboard.writeText($div_clock.innerHTML).then(function() {
        console.log('Date successfully copied: ', $div_clock_title.innerHTML) /* clipboard successfully set */
    });
}

$clock_button_copy.addEventListener("click", updateClipboard);




//ALARM: 
let ee = new Audio('ee.wav');
let alarmTempo;

function alarmStart() {
    // ee.play()
    let hSel = prompt('How many hours will pass until the alarm sounds?');
    if (hSel < 0.001 || hSel > 10) {
        return console.log('Bad input')
    }
    console.log(`${hSel}h equal to ${hSel * 3600} seconds. The alarm will proceed.`);
    let seconds = new Date().getTime() / 1000;
    let x = seconds + (hSel * 3600);
    alarmTempo = setInterval(() => {
        if ((x < new Date().getTime() / 1000)) {
            $alarmStart.disabled = true;
            ee.play()
            console.log(new Date().getTime() / 1000)
            console.log(new Date().getTime())
            console.log(`${hSel}h equal to ${hSel * 3600} seconds `);
        };
    }, 00001);

}


const $alarmStart = document.querySelector('.alarm_button_start');
$alarmStart.addEventListener('click', alarmStart)


//alarm stop button: 

function alarmStop() {
    clearTimeout(alarmTempo)
    ee.pause();
    $alarmStart.disabled = false;

}
const $alarmStop = document.querySelector('.alarm_button_stop');
$alarmStop.addEventListener('click', alarmStop);