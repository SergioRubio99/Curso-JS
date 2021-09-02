// Types of errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const valor = null;

try {
    valor();
} catch (err) {
    console.error('Error del catch: ' + err)
    console.error(err.name, ' |||||| ', err.message)

}
console.log('We continue running the code.')

//The code above catches a classic javascript error.


const string = () => 666

try {
    if (string() === 666) throw new Error("Step out, demon! 😈")
} catch (error) {
    console.error(error.name, ' |||||| ', error.message)
}

console.log('We execute the second run');

//The code shown above catches a human javascript error.

const cat = { name: 'Jackson', race: 'black' };

function checkCat() {
    try {
        if (!cat.race) throw new SyntaxError("Property 'race' needed")
            //try '!ato.race' for instance.
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Incomplete info:  ", error);
        } else {
            throw error;
        }
    }
}

// We run the function, and if there's an error related to the object, it'll be catched. That's not the case if a function related error pops up. For instance, if "!ato.rza" is written instead of "!cat.race". Here we solve this: 

try {

    checkCat()

} catch (error) {
    console.error('Function related error: ', error.message);
}

// Now we'll see how to use 'finally', with a JSON:

let answer = '{"name": "Juan", "job": "dev", "tools": ["Javascript", "React"]}'

function checkAnswer() {
    const start = Date.now();

    try {
        //Check JSON (if the JSON file has any typing error), we will receive the classical SyntaxError: Unexpected token n in JSON at position x.
        answer = JSON.parse(answer);

        // Custom errors:
        if (!answer.name || !answer.job || !answer.tools)
            throw new SyntaxError('We need the name property, the tools property and the job property.');
        //Try typing 'jobb' instead of 'job' in the JSON, to trigger the error.
        if (!answer.tools.includes('React'))
            throw new RangeError('We need to use React');
        // To check the following if, comment the two lines above. 
        if (!answer.tools[0] != false) {
            throw new SyntaxError("The array of tools can't be empty");
        }
        // If it passes the tests, we will return a true statement: 

        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    } finally {
        console.info(Date.now() - start + " milliseconds")

        // return 22;
        // If there's a return into a finally, will be executed before any other one, no matter where it is placed. Finally is always executed, without considering if it finds a catch before or not.
    }
}


console.log(checkAnswer());

// Task: Given a variable named, try reversing the string and then print the reversed string to the console. 
// If the try clause has an error, print the error message to the console. 
// Finally, print the typeof of the variable to the console.

const variable = "string";

function toReverse(string) {
    const start = Date.now();

    try {
        if (string === undefined) throw new TypeError("Your input is undefined");
    } catch (e) {
        return console.error(e.name + ': ' + e.message);
    }
    try {
        if (typeof string != "string") throw new TypeError("Your input must be a string");
    } catch (e) {
        return console.error(e.name + ': ' + e.message);
    }


    arr = [];

    try {
        for (i = 0; i < string.length; i++) {
            arr.push(string.charAt(i));
        }
        const reversedStr = arr.reverse().toString();
        console.log(reversedStr);
    } catch (e) {
        return console.error(`Error: ${e.name}. ${e.message}`);
    } finally {
        console.error(`It took ${Date.now() - start} seconds`)
    }
}

toReverse('string');

// Corrección:

const chars = "1234";

try {
    let reversed = chars.split('').reverse().join();
    console.log('Reversed string', reversed);
} catch (error) {
    console.error('Error', error.message);
} finally {
    console.info('Type of var', typeof string)
}