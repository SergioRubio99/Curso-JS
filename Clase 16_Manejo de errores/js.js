// try {
//     console.log("We add here the code to evaluate");
//     console.log("Second try message");
//     variableInexistente;
// } catch (error) {
//     console.log("Catch captures any error emerged in Try")
//     console.log(error);
// } finally {
//     console.log("The Finally block will execute after a Try Catch block, whether it throws an error or not");
// }


try {
    let num = 4;
    if (isNaN(num)) throw new Error("The inputted character is not a number, try again.");
    console.log(num * num);
} catch (error) {
    console.warn(error.message);
} finally {
    console.log("Finally message")
}

//The Error object supports the following two properties: name and message. To display the full Error object, we can write console.warn(error), and to display one of those two properties, we can write console.warn(error.name) or console.warn(error.message).