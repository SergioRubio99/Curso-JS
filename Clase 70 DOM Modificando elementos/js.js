/*

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $aside = document.querySelector(".aside_article");



$figure.setAttribute('style', 'display:flex');
$figure.style.setProperty('flex-direction', 'column');
$figure.style.setProperty('align-items', 'center');
$figure.style.setProperty('line-height', '2.2');

$img.setAttribute('src', 'https://placeimg.com/607/200/animals');
$img.setAttribute('alt', 'Animals');

$figcaption.appendChild($figcaptionText);
$aside.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);



const $figure2 = document.createElement("figure");


$figure2.innerHTML = `
<img src="https://placeimg.com/607/200/people" alt="People">
<figcaption>People</figcaption>
`

$figure2.classList.add("card");
$aside.appendChild($figure2);

//We create a <div> tag with the seasons:

const $div = document.createElement("div");
document.body.appendChild($div);

const $seasons = ["Spring", "Summer", "Autumm", "Winter"];
const $ul = document.createElement("ul");

//Let's creat two <div> tags. One for the title, and another one for the list.

const $div_1 = document.createElement("div");
$div.appendChild($div_1);
$div_1.innerHTML = `<h3> Year seasons </h3>`;
// $div_1.appendChild($ul);

const $div_2 = document.createElement("div");
$div.appendChild($div_2);
document.write("");
// $div.innerHTML = `<h3> Year seasons </h3>`;
$div_2.appendChild($ul);

$seasons.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

//Let's give the <div> tags some styles:

$div.classList.add("div");
$div.setAttribute("style", "display:flex");
$div.style.setProperty("background-color", "#f0bd17");
$div.style.setProperty("flex-direction", "column");
$div.style.setProperty("max-width", "300px");
$div.style.setProperty("align-items", "center");
$div.style.setProperty("border", "2px solid black");
$div.style.setProperty("margin-top", "15px");
$div.style.setProperty("cursor", "pointer");

// $div_1.setAttribute("style", "display:flex");
$div_1.style.setProperty("width", "100%");
$div_1.style.setProperty("background-color", "gray");
$div_1.style.setProperty("text-align", "center");
$div_1.style.setProperty("color", "wheat");


$div_2.setAttribute("style", "display:flex");
$div_2.style.setProperty("width", "200px");

$div_2.style.setProperty("background-color", "green");
$div_2.style.setProperty("height", "100%");




//We create another <div> tag with the continents:

const $div2 = document.createElement("div");
document.body.appendChild($div2);
const $continents = ["Europe", "Africa", "Asia", "America", "Oceania"];
const $ul2 = document.createElement("ul");

const $div2_1 = document.createElement("div");
const $div2_2 = document.createElement("div");

$div2.appendChild($div2_1);
$div2.appendChild($div2_2);

$div2_1.innerHTML = `<h3>Continents of the World</h3>`
$div2_2.appendChild($ul2);
$ul2.innerHTML = "";
$continents.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

$div2.classList.add("div2");

//Let's give the <div> tags some styles:


$div2.setAttribute("style", "display:flex");
$div2.style.setProperty("background-color", "#f0bd17");
$div2.style.setProperty("flex-direction", "column");
$div2.style.setProperty("max-width", "300px");
$div2.style.setProperty("align-items", "center");
$div2.style.setProperty("border", "2px solid black");
$div2.style.setProperty("margin-top", "15px");
$div2.style.setProperty("cursor", "pointer");

// $div_1.setAttribute("style", "display:flex");
$div2_1.style.setProperty("width", "100%");
$div2_1.style.setProperty("background-color", "blue");
$div2_1.style.setProperty("text-align", "center");
$div2_1.style.setProperty("color", "wheat");
$div2_1.style.setProperty("font-size", "15px");
$div2_1.style.setProperty("color", "wheat");




$div2_2.setAttribute("style", "display:flex");
$div2_2.style.setProperty("width", "100%");
$div2_2.style.setProperty("height", "100%");

$div2_2.style.setProperty("background-color", "#ff7226");





//We create another <div> tag with the months:

const $div3 = document.createElement("div");
document.body.appendChild($div3);
const $months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



const $div3_1 = document.createElement("div");
const $div3_2 = document.createElement("div");
$div3.appendChild($div3_1);
$div3.appendChild($div3_2);


const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

$div3_1.innerHTML = `<h3>Months of the World</h3>`
$div3_2.appendChild($ul3);

$months.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

$div3_1.innerHTML = `<h3>Months of the year </h3>`;
$ul3.appendChild($fragment);
$div3_2.appendChild($ul3);

$div3.classList.add("div3");

$div3.setAttribute("style", "display:flex");
$div3.style.setProperty("background-color", "#f0bd17");
$div3.style.setProperty("flex-direction", "column");
$div3.style.setProperty("width", "300px");
// $div3.style.setProperty("align-items", "center");
$div3.style.setProperty("border", "2px solid black");
$div3.style.setProperty("margin-top", "15px");
$div3.style.setProperty("cursor", "pointer");

// $div_1.setAttribute("style", "display:flex");
$div3_1.style.setProperty("width", "100%");
$div3_1.style.setProperty("background-color", "blue");
$div3_1.style.setProperty("text-align", "center");
$div3_1.style.setProperty("color", "wheat");
$div3_1.style.setProperty("font-size", "15px");
$div3_1.style.setProperty("color", "wheat");




$div3_2.setAttribute("style", "display:flex");
$div3_2.style.setProperty("width", "100%");
$div3_2.style.setProperty("background-color", "#17a8f0");


//Let's create a <template> tag. This one isn't written into the DOM, so if you click 'Inspect element', you won't see its content. The <template> tag was meant as a reference to create future elements, like classes in object oriented programming.
const $cards = document.querySelector(".cards_article"),
    $template = document.getElementById("template_card").content,
    $fragment_ = document.createDocumentFragment(),
    cardContent = [{
            title: "Tecnología",
            img: "https://placeimg.com/607/200/tech",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/607/200/people",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/607/200/animals",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/607/200/nature",
        },
        {
            title: "Tecnología",
            img: "https://placeimg.com/607/200/tech",
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment)

*/

const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure'),
    $cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `
    <img src='https://placeimg.com/607/200/any' alt = 'Any'>
    <figcaption>Any</figcaption>
`;
$newCard.classList.add('card');
$newCard.classList.add('card_article1');



//To insert the element replacing another one:  $cards.replaceChild($newCard, $cards.children[2])

// To insert the element taking another one as reference, without replacing it: $cards.insertBefore($newCard, $cards.firstElementChild)

//To remove one element, from the nodeList: 


$cards.replaceChild($newCard, $cards.children[1]);
$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild);

document.body.appendChild($cloneCards);