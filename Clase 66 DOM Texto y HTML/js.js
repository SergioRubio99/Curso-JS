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


// innetText & inner HTML put the new text into the ID/Class selected.
$whatIsDOM.innerHTML = text;

$whatIsDOM.innerText = text;

$whatIsDOM.textContent = text;

// outerHTML deletes the father content and puts the new text straight into the DOM.
$whatIsDOM.outerHTML = text;