const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"))
    //Hyphened attributes must be written using lowerCamelCase, like in the following example:
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.style.color);
console.log(window.getComputedStyle);

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("font-family", "sans-serif");
$linkDOM.style.setProperty("display", "block");
// $linkDOM.style.display = "block";
$linkDOM.style.width = "50%";
$linkDOM.style.setProperty("text-align", "center");
// $linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto"; 
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.height = "50px"
$linkDOM.style.setProperty("display", "flex");
$linkDOM.style.setProperty("align-items", "center");
$linkDOM.style.justifyContent = "center";

//Here we see how the style changes have taken effect.
console.log($linkDOM.getAttribute("style"));

//Reminder: getComputedStyle will give you all the styles the browser applies to the element, including those that you didn't specified (browser defaults): 
console.log(getComputedStyle($linkDOM))


//CSS variables:

const $html = document.documentElement;
const $body = document.body;


let varGrayColor = getComputedStyle($html).getPropertyValue("--gray-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log($html, $body, varGrayColor, varYellowColor);
$body.style.backgroundColor = varGrayColor;
$body.style.color = varYellowColor;
$html.style.setProperty("background-color", "blue");

varGrayColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varGrayColor);