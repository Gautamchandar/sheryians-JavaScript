// a = 10
// console.log(a)

let a = 10
let b = 20

console.log("Before Swapping");

console.log(`a is ${a}`);
console.log(`b is ${b}`);

a = a+b 
b = a-b 
a = a-b

console.log("After Swapping");

console.log(`a is ${a}`);
console.log(`b is ${b}`);


const greet = function(name) {
    console.log("Hello, " + name);
}

greet("Aman");