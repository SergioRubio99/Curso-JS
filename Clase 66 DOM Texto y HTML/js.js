const $whatIsDOM = document.getElementById("lorem_ipsum");

let text = `
<p>

El Modelo de Objeto de Documento (<b><i>DOM - Document Object Model </i></b>) es una API para documentos HTML y XML.
</p>
<p>
Éste provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores. </mark>
</p>
`;


// innetText & inner HTML replaces the text into the ID/Class selected.
// $whatIsDOM.innerText = text;


$whatIsDOM.innerHTML = text;
$whatIsDOM.textContent = text;

// outerHTML deletes the father element and puts the new text straight into the DOM. It would have put the 3 <p> into the selected <p> if we hadn't used this method. 

$whatIsDOM.outerHTML = text;