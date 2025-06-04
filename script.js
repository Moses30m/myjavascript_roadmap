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



//Remember: the key is an object(apples),not a string("apples");
// example. fruitts.get("apples"); will return undefine;


//Map.groupBy = use for objesct according to string values returned from a callback function

//extra practice

const brothers = new Map([["larry", 400], ["adams",300], ["probity", 500]]);

console.log(brothers.size)

let ccc = 0;

for(let bbb of brothers.values()){
    console.log(ccc += bbb)
}
console.log(brothers.keys());
console.log(brothers.values());
console.log(brothers.set("larry", 7000))
console.log(brothers instanceof Map)

//typeOf Operator = this operator returns the data tyype of a javascript variable;

let name = "moses";
console.log(typeof name)//this returns string.

//note: null is a primitvie value. However, typeof returns "object".

//Trying to regonize an array using typeof will return an object rather use the following;
const myArray = ["moses","peter","adams"];
console.log(Array.isArray(myArray))//true

//instanceof = this returns true if an object is an instance of a specified object type.

console.log(myArray instanceof Array)//true

//undefined; Any variables can be emptied, by setting the value to undefined.
let car = "benz";
car = undefined;
console.log(car)// undefined

//null: null means nothing in js. You can empty an object by setting it to null;

let person = {name:"moses", age:23};
person = null;

console.log(person)//null

//you can also empty an object by setting it undefined

//null and undefined are equal in value but differnt in type.

console.log(new Date().toString)
