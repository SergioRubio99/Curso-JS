const $cards = document.querySelector(".cards2");
console.log($cards);
console.log($cards.childNodes);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);


//To select the first/last Node child:
console.log($cards.firstChild);
console.log($cards.lastChild);
//To select the first/last element child:
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);


console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

//To print the closest ancestor with a specified tag:
console.log($cards.closest("div"));
console.log($cards.closest("body"));

//The closest section tag to cards third child. 
console.log($cards.children[3].closest("section"));