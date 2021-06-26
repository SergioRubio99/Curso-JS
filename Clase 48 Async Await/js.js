function squarePromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número.`);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
};

async function asyncDeclaredFunction() {
    //This allows us to dispense with the Promise chain:
    try {
        console.log('Start of the async function');
        //we use await to indicate that the object should be declare after the Promise finishes executing (remember the timeout).
        let obj = await squarePromise(0);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(1);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(2);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise("3");
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(4);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(5);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
    } catch (err) {
        console.log(err)
    }

}

asyncDeclaredFunction();

//when dealing with expressed functions, we need to specify async first: 

const asyncExpressedFunct = async() => {
    //This allows us to dispense with the Promise chain:
    try {
        console.log('Start of the async function');
        //we use await to indicate that the object should be declare after the Promise finishes executing (remember the timeout).
        let obj = await squarePromise(6);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(7);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(8);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise("9");
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        obj = await squarePromise(10);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.log(err)
    }

}

asyncExpressedFunct();