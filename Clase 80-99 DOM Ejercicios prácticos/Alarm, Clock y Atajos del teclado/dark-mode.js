let d = document;

export function darkMode() {

    let $clock = d.querySelector('.clock');
    let $ball = d.querySelector('.article-dark-ball');
    let $countdown = d.querySelector('.countdown');
    let $dark_section4 = d.querySelector('.dark-section-4');
    let $html = d.querySelector('html')

    $clock.classList.toggle('dark-mode-darker');
    $ball.classList.toggle('dark-mode-dark');
    $countdown.classList.toggle('dark-mode-dark');
    $dark_section4.classList.toggle('dark-mode-darker')
    $html.classList.toggle('dark-mode-darker')

}