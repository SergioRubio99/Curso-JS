const set = new Set([1, 2, 3, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);

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

console.log(set2);
console.log(set2.size);
console.log("Recorriendo set");
for (item of set) {
    console.log(item);
}

console.log("Recorriendo set2")
set2.forEach(item => console.log(item));


//Para tratar un set como array debemos convertirlo a array. Por ejemplo, si queremos llamar a un elemento particular del array con console.log(set2[0]);

const arr_set2 = Array.from(set2)
console.log(arr_set2[0])

set.delete("HOla");
console.log(set.has("hola"))
console.log(set);

set2.clear();
console.log(set2)