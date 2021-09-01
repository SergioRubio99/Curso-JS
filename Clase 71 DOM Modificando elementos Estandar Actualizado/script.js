/*

.insertAdjacent...
    .insertAdjancentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)


Posiciones: 
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend (hermano siguiente)


*/

const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure');

$newCard.innerHTML = `

<img src='https://placeimg.com/607/200/animals' alt='Animals'>
<figcaption>Animals</figcaption>

`
$newCard.classList.add('card');
$newCard.setAttribute('style', "flex-basis: 200px; overflow:hidden;");

// $newCard.classList.add('card');

//Let's insert the element just before one specific node:
$cards.insertAdjacentElement('beforebegin', $newCard);

//To insert it as first child into the cards div:
$cards.insertAdjacentElement('afterbegin', $newCard);


//As last child into the cards div:
$cards.insertAdjacentElement('beforeend', $newCard);


let $contentCard = `

<img src='https://placeimg.com/607/200/animals' alt='Animals'>
<figcaption>Animals</figcaption>

`

$newCard.insertAdjacentHTML('beforebegin', $contentCard);
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'New ')
$cards.insertAdjacentElement('afterbegin', $newCard);

//Methods to set the order of the element: 

// $cards.prepend($newCard)
// $cards.before($newCard)
// $cards.append($newCard) last place
// $cards.after($newCard) brother