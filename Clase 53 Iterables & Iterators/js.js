const iterable = new Set([1, 2, 3, 3, 5, 4, 5]);
// We access the iterator of the iterable:
const iterator = iterable[Symbol.iterator]()
console.log(iterable);
console.log(iterator);

//next() allows us to iterate over each element. 
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
};