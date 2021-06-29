console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
//To get the concrete attribute:
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang', 'es-ES');
console.log(document.documentElement.lang);

//To separate HTML variables from the rest, we use the dollar symbol. It is useful to storage them in const: 
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom);

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
console.log($linkDom.hasAttribute("href"));
$linkDom.setAttribute("href", "https://www.archlinux.org/packages/");
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));


//Data-attributes:

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description)
console.log($linkDom.dataset.favorite_food)
$linkDom.setAttribute("data-description", "DOM")
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "This was written in VSCode"
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-id"));
$linkDom.removeAttribute("data-id");
console.log($linkDom.hasAttribute("data-id"));