// window.alert()
// window.confirm('Confirmación');
// window.prompt('Alert con input')
// Every window method can be written without 'window'.


const $btnOpen = document.getElementById('open_window'),
    $btnClose = document.getElementById('close_window'),
    $btnPrint = document.getElementById('print_window');

let x;
$btnOpen.addEventListener('click', e => {
    // window.open('https://wiki.archlinux.org/')
    x = window.open('https://wiki.archlinux.org/')
    console.log(e)
});


$btnClose.addEventListener('click', e => {
    // window.close();
    //To be able to close a window like this, we must storage the window.open method we used to open it into a variable. Then, we execute the close() method on that variable:
    x.close();

    //Otherwise, the browser won't let us close any window that wasn't previously opened by the script.
});


$btnPrint.addEventListener('click', e => {
    window.print();
});

//You can combine this method with styles that will apply only when the user wants to print the website.