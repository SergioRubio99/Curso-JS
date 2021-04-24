//Referencia básica: https://youtu.be/DaXuPcdKqQ4
//Explicación de Jon Mircha: 



function CuadradoCallback(value, callback) {

    setTimeout(() => {
        callback(value, value * value);

    }, 0 | Math.random() * 1000);
}

CuadradoCallback(0, (value, result) => {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    CuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        CuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            CuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                CuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    CuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log('Fin del Callback');
                        console.log('Fin del Callback Hell !!!!! 😈🤖🤘');
                        console.log('http://callbackhell.com')

                    });
                });

            });

        });

    });

});


function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(`Error, el valor "${value}" ingresado  no es un número`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });

        }, 0 | Math.random() * 1000);
    })

}


cuadradoPromise(0)
    .then((obj) => {
        // console.log(obj);
        console.log("Inicio Promise");
        console.log(`Promise; ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })

.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
})


.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
})


.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
})

.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
})



.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(6);
})

.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(7);
})

.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(8);
})

.then((obj) => {
    console.log(`Promise; ${obj.value}, ${obj.result}`);
    return cuadradoPromise(9);
})

.then((obj) => {
    console.log(`End of the promise`);
    console.log(obj);

})


.catch(err => console.error(err));