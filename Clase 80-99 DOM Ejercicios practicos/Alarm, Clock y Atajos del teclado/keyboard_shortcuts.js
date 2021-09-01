const d = document;
let x = 0,
    y = 0;

export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // //ctrl key, alt key, etc, check if its that specific key.
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.key);
    // console.log(e);

    if (e.key === 'a' && e.altKey) { alert('Has lanzado una alerta con el teclado') }
}

//Take care of the capital letters.


export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    console.log(limitsBall, limitsStage);

    console.log(e.keyCode);
    console.log(e.key)

    // const move = (direction) => {}
    //we add e.preventDefault() to avoid moving the scrollbar
    switch (e.keyCode) {
        //Left
        case 37:
            // move('left');
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault()
                x--
            };
            break;
        case 38:
            // move('up');
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault()
                y--
            };

            break;
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault()
                x++
            };
            // move('right');
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault()
                y++
            };

            // move('down');
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*20}px, ${y*20}px)`;
}