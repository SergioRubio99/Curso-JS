let d = document;
// window.addEventListener('load', e => {
//     console.log(e);
// });


let date;
let $btn = d.querySelector('.countdown_btn');
$btn.addEventListener('click', e => {
    date = prompt('Input a date, in the following format: yyyy-mm-dd')
    $btn.setAttribute('style', 'display:none;');
    let mydate = new Date(date);
    // console.log(mydate);
    // console.log(mydate.toDateString());
    // console.log(mydate.getDate());
    // console.log(mydate.getMonth());
    // console.log(mydate.getFullYear());
    // console.log(Date.prototype.valueOf(mydate))
    let regEx = /^([\d]{4})[-.\/\\](([0][0-9]{1})|([1][0-2]))[-.\/\\](([0-2][0-9]{1})|([3][01]))$/g
    if (regEx.test(date) === false || mydate.getTime() < new Date().getTime()) {
        console.warn('The date you gave is not in a valid format');
    } else {
        setInterval(() => {

            let dateArr = (date.split(/-/g));
            // console.log(dateArr);
            let res = new Date().toISOString().slice(0, 10).replace(/-/g, " ");
            //toISOString() devuelve la fecha tal que así: 2011-10-05T14:48:00.000Z. La cortamos para tener "2011 10 05" y luego jugamos con cada valor. 
            // console.log(res);
            let currentDate = res.split(" ");
            // console.log(currentDate);
            let result = ["", "", ""];

            if (dateArr[0] > currentDate[0]) {
                result[0] = dateArr[0] - currentDate[0]
            } else if (dateArr[0] === currentDate[0]) {
                result[0] = 0;
            }

            if (dateArr[1] >= currentDate[1]) {
                result[1] = dateArr[1] - currentDate[1];
            }

            if (dateArr[1] < currentDate[1]) {
                result[0]--;
                result[1] = parseInt(dateArr[1]) + (12 - parseInt(currentDate[1], 10));
            }

            if (dateArr[2] >= currentDate[2]) {
                result[2] = dateArr[2] - currentDate[2];
            }

            if (dateArr[2] < currentDate[2]) {
                result[1]--
                    result[2] = 30 - (parseFloat(currentDate[2]) - parseFloat(dateArr[2]))
            }
            // console.log(result);
            let minutes = 60 - (new Date().getMinutes())
            let h = 24 - (new Date().getHours());
            let seconds = 60 - (new Date().getSeconds())

            d.querySelector('.countdown_container').textContent = `${result[0]} years, ${result[1]} months, ${result[2]} days, ${h} hours, ${minutes}minutes and ${seconds} seconds are left`
        }, 0001);
    }


})