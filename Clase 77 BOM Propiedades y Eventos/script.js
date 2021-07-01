//To check the size of the viewport in real time
window.addEventListener("resize", e => {
    console.clear()
    console.log('********************Resize event********************')
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    //scrollX and scrollY tell us how many pixels are between the current position of the bar and the left or top side of the viewport.
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
//event to execute when the user scrolls:

window.addEventListener("scroll", e => {
    console.clear();
    console.log('********************Scroll event********************');
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

//event to execute when the window finished loading (will wait until the whole stuff of the webpage loads (styles, scripts, etc)):
window.addEventListener('load', e => {
    // console.clear();
    console.log('********************Load event********************');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
    console.log('Loading time: ', e.timeStamp);

});
//Here's another one (which loads faster. Look the timeStamp property of the event object. That is the 'e' element.): 
document.addEventListener('DOMContentLoaded', e => {
    // console.clear();
    console.log('********************DOMContentLoaded event********************');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
    console.log('Loading time: ', e.timeStamp);
});