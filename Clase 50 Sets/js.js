const set = new Set([1, 2, 3, 3, 3, 4, 5, true, false, false, {}, {}, "hello", "Hello"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
//Set() is useful to add elements to an array-like object ensuring that if the element to add is in the Set already, it won't be added.
console.log(set2);
console.log(set2.size);
console.log("Walking the set");
for (item of set) {
    console.log(item);
}
console.log("Walking the set2")
set2.forEach(item => console.log(item));


//To treat the Set like an array, first we must convert it to array. For instance, if we want to call a particular element with console.log(set2[0]);

const arr_set2 = Array.from(set2)
console.log(arr_set2[0])

set.delete("HOla");
console.log(set.has("hola"));
console.log(set);

set2.clear();
console.log(set2);