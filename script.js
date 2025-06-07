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


//Destructuring Assignment syntax;
//the destructuring assignment syntax unpack object properties into variables;

const pyp = {firstName:"moses",lastName:"amuta"}
let {firstName, lastName} = pyp 
console.log(lastName + " " + firstName)//amuta moses


//we can also set new properties to potentially missing properties in an object

//unpacking a string

let username = "moses";
let [a1,a2,a3,a4,a5] = username;

console.log(a1)//returns m
//this can also unpack an array;

//skipping arrray values : we can skip array values using two or more commas

let country = ["nigeria","ghana","uganda"];
let [c1,,c3] = country;
console.log(c1, c3)//nigeria uganda. This will skip ghana. you can do this will many array

//Array position values: we can pick up values from specific index locations of an array.

/*
from the above example you can also use the following code;
let {[0]c1,[1]:c2} = fruits.
*/

//the Rest Property: You can end a destructuring syntax with a rest property. This syntax will store all remaining values into a new array;

const numbers = [10,20,30,40,50,60];
const [a,b, ...rest] = numbers

console.log(a)//10
console.log(b)//20;
console.log(rest)//30,40,50,60

//Destructuring a Map. 
/*
const fruits = new Map([
    ["apples",29],
    ["mango",60],
    ["oranges",70]
])
let text = "";
for(const[key,value] of fruits){
    text += key + " is " + vlaue
}
    */

//Js Regular expressions: a sequence of characters that forms a search pattern,  the search pattern can be used for text search and text replace operations.
//regular expression can be a single character or a more complicated pattern. /pattern/modifiers;
/*
/w3schools/i is a regular expression.
w3schools from the above example is a pattern(to be used in a search).
i is a modifier(modifies the search to be case-insensitive);
*/
// regular expression are mostly used in search() and replace();

//example search()

let text  = "welcome to school";
let n = text.search(/school/i)
console.log(n)//11. Because schools starts at index of 11

//example for replace()

let ttt = "welcome to lafia";
let t = ttt.replace(/lafia/i, "benue");
console.log(t)//welcome to benue.

/*
regular expression modifier:
    i : persome case insentive matching
    g : do a global search
*/
let textt = "visit fulafia"
let result = textt.match(/fuLAfia/i)
console.log(result)//returns fulafia

            //REGULAR EXPRESSION PATTERNS;
//[abc] do a global search for any of the character withing the bracket
let gba = textt.match(/[i]/g);
console.log(gba)//prints out i, i, i. from our example text.
//[0-9] find any of the digits between the brackets;
let rgg = "1,2,3,4,5,6,7,8,9";
let rg = rgg.match(/[1-3]/g);
console.log(rg)//1,2,3;

//(x|y) Find any of the alternative seperated with |;
let aaa = "re, green, red, green, gren, gr, blue, yellow";
let aa = aaa.match(/(blue|green)/g);
console.log(aa)//green, green, blue


//Metacharacter: this are characters with a special meaning;
// \d use for finding a digit
let aba = "Give 100%";
console.log(aba.match(/\d/g))//1,0,0. Searches for all digits;

// \s find a whitespace character
let gag = "Is this all there is?";
console.log(gag.match(/\s/g))//"", "","","";

// \b Find a match at the begining of a word 
let lal =  "HELLO, LOOK AT YOU";;
console.log(lal.match(/\bLO/))//LO is found at indext 7;


// QUANTIFIER: this defines quantity;
//n+ : matches any string that contains at least one n;
let yyy = "Hellooo World, Hello w3Schools";
console.log(yyy.match(/o+/g))// ooo, o, o, oo.

//n* : matches any string that contains zero or more occurences of n
console.log(yyy.match(/lo*/g))//l , looo, l, l, lo, l

//n? matches any string that contains zero or one occurrences of n
let zaa = "1,100,or 1000";
console.log(zaa.match(/10?/g))//1, 10 , 10;

//using test() : In JavaScript, the regExp object is a regular expression object with predefined properties and methods
let mom = "The best things in life are free";
let patter = /e/;
console.log(patter.test(mom))//true because there is "e" in the following sentence;
//we can also use /e/.test("The best things in life are free")
n
//Using exec() : this searches for string in a specified pattern, and returns the found text as an object
// /e/.exec("The best things in life are free")// the second index 2



//Javascript errors
//try : statement defines a code block to run(to try);
//catch : statemnt defines a code block to handle any error;
//finally statemnt defines a code block to run regardless of the  result.
// throw statement defines a custom error.

try{
    consall.lag("hello")//error
}
catch(err){
    console.log(err)//this will display error but won't affect your code
}
/*
you can display ur own message by
catch(){
console.log("there was an erro")}
*/
finally{
    console.log("welcome")//displays this message regardless of if there is an error or not
}
//throw statement allows you to create a custom erro. Technically you can throw an exception. it can be in Number, a Boolean or an Object.
let grade;
try{
    if(grade == "" || grade == null) throw "empty string"//displays this if the input is empty
    if(isNaN(grade)) throw "not a number"//displays this if the input is not a number
    else{
        console.log(grade)
    }
}
catch(err){
    console.log(err)
}

//ERROR OBJECT
// Javascript has a built in error object that provides error information when an erro occurs. The error object provides two useful properties: name and message
//Error object Properties
//name : sets or returns an error name.
//message : Sets or returns an erro message(a string);

//Error Name values: the are six different values can be returned by the error name property.
//EvalError : An error has occurred in the eval() function. But this is no longer used in newer version of javascript.

//RangeError : is thrown if you use a number that is outside the range of legal values
let num = 1;
try{
    num.toPrecision(500)
}
catch(err){
    console.log(err.name)//RangeError
}

//ReferenceError : is thrown if you use(reference)a variable that has not been declared.
let afa = 6;
try {
    afa = y + 1
}
catch(err){
    console.log(err.name)//ReferenceError
}

//SyntaxError : is thrown if you try to evaluate code with a syntax error.
try{
    eval("alert('hello)")
}
catch(err){
    console.log(err.name)//SyntaxError
}

//TypeError : is thrown if an operand or argument is imcompatible with the type expected by an operator or function
let tyt = 1;
try{
    tyt.toUpperCase()
}
catch(errr){
    console.log(errr.name)
}

//URIError is thrown if you use illegal characters in URI function.
try{
    decodeURI("%%%")
}
catch(err){
    console.log(err.name)//URIError
}