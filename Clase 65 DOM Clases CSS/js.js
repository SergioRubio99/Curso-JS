const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList.contains("rotate"))
$card.classList.add("JSclass");
console.log($card.classList.contains("JSclass"));
console.log($card.className);
$card.classList.remove("JSclass");
console.log($card.className)
$card.classList.toggle("JSclass");
console.log($card.className);
$card.classList.toggle("JSclass");
console.log($card.className);

//Toggle adds the class if it was not added before. In the opposite case, it removes the class.

$card.classList.replace("card", "example_class");
console.log($card.className);
$card.classList.add("card");

setTimeout(function() { $card.classList.add("black_n_white") }, 1700);

//You can add several classes with the same method. Just use comas.