export const PI = Math.PI;
export const user = "Tony";

export default function hi(hi) {
    console.log(`Hola Módulos +ES6`)
}
//There can't be two elements exported by default. To use the default export, you need to set the variable first, unlike the common type of export.

export class greeting {
    constructor() {
        console.log("Hola Clases +ES6")
    }


}