const d = document,
    w = window;
export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll', e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        console.log(w.pageYOffset, d.documentElement.scrollTop);

        //Esto nos ayuda a trackear el movimiento de la scrollbar.

        (scrollTop > 50) ? $scrollBtn.classList.remove('hidden'): $scrollBtn.classList.add('hidden');

    })

    d.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: 'smooth',
                top: 0,
                left: 0
            })
        }
    })
}