const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals'),
    $cards = document.querySelector('.cards'),
    $figure2 = document.createElement('figure');

$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$figcaption.appendChild($figcaptionText);
$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add('card');
$figure2.innerHTML = `
<img src='https://placeimg.com/200/200/people' alt='People'>
<figcaption>People</figcaption>
`;
$figure2.classList.add('card');
$cards.appendChild($figure2);

const seasons = ['Spring', 'Summer', 'Autumm', 'Winter'],
    $ul = document.createElement('ul');
document.write('<h3>Seasons of the Year</h3>');
document.body.appendChild($ul);

seasons.forEach(el => {
    const $li = document.createElement('li')
    $li.textContent = el;
    $ul.appendChild($li);
})

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    $ul2 = document.createElement('ul');

document.write('<h3>Continents of the World</h3>');
document.body.appendChild($ul2);
// $ul2.innerHTML = '';
continents.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

//Due to performance reasons, it's convenient to make use of fragments to insert elements into the DOM:

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$ul3 = document.createElement('ul');
$fragment = document.createDocumentFragment();

months.forEach(el => {
    const $li = document.createElement('li');
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write('<h3>Months of the Year</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);