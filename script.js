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

