import { darkMode } from './dark-mode.js';
import { shortcuts } from './keyboard_shortcuts.js';
import { moveBall } from './keyboard_shortcuts.js';
import scrollTopButton from './scroll.js';


const d = document;
//The keydown event jumps over and over while the key is pressed. The keyup event jumps when the key is released.  
d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
})
scrollTopButton('.scroll-top-btn')


d.addEventListener("click", e => {
    if (e.target === d.querySelector('.dark-mode-btn'))
        darkMode('.dark-mode-btn');
});

// d.addEventListener("keyup", e => {
//     shortcuts(e);
// })