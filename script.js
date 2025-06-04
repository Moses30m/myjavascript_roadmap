//set tutorial
console.log("hello world")
let fruit = new Set(["mango", "orange","pawpaw"])
fruit.add("grapes")
let jjj = fruit.entries()
jjj.forEach(display);

function display(x){
    console.log(x)
}

console.log(fruit.values())


//map tutorial
//A  map holds key-value pairs where the keys can be any datatype. A map remembers the original insertion order of the keys.


const mapp = new Map([
    ["mango",200],["orange", 300],["pawpaw", 100]
])

mapp.set("mango", 989)

console.log(mapp.values())//this will display all the values. if it is set to mapp.keys, it wil display all the keys
//get();

console.log(mapp.get("mango"))//this will get the key in a particular Map;


//MAP METHOD
//Map.size = this is use to get the lenth of map

console.log(mapp.size);

//Map.delete = this is use to delete an element in a map

mapp.delete("mango") // this will remove mango, but note it has to be places before you call your map;

//Map.clear = removes all the element.


//Map.has = re true if a key exist.
console.log(mapp.has("orange")) // this returns true because orange is available in the map 

//Map.forEach() = thi is use to invoke a callback for each key/value pair in a map.

const newMap = new Map([["peter", 24],["moses",21],["adams",18]]);
newMap.forEach((value, keys) =>{
    console.log(value,keys)
})

/*
we have other method such as  Map.entries() Map.keys(), Map.values() 
we can use the value method to sum the values in a map 
*/

let count = 0;;

for(const x of newMap.values()){
    document.writeln(count += x)
}


//OBJECT AS KEY.

//Being able to use objects as keys is an important Map feature.

const apples = {name: "Apples"};
const banana = {name: "Banana"};

const fruitts = new Map();
fruitts.set(apples, 300);
fruitts.set(banana, 400);;// you can create an object the using that object keys as the key of your map

let total = 0;

for(let y of fruitts.values()){
    console.log(total += y)
}











