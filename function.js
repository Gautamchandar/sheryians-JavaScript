// //function declaration
// function hello() {
//     console.log("Hello")
// }
// hello()
// //function declaration
// function details(name, age) {
//     console.log(`My name is ${name} and age is ${age}`)
// }
// details("Gautam", 21)

// //function expression
// var a = function () {
//     console.log("This is a")
// }
// a()

// //fat arrow function
// var a1 = () => {
//     console.log("This is a1")
// }
// a1()

// // IIFE - Immidiately Invoked Function Expression 

// // (function(){
// //     console.log("This is an iife")
// // })()

// let num = 16
// let num2 = Math.sqrt(num)
// if(num2 == Math.pow(num,2)){
//     console.log(`Perfect square of ${num}`)
// } else{
//     console.log("Not perfect square")
// }

// let s = Math.sqrt(25)
// console.log(s)

// function greet(user = "Sir"){ //default parameter
//     console.log("Welcome,", user)
// }

// greet("Gautam")
// greet("Tanishtha")
// greet()


// function hello(){
//     console.log("I am hero")
// }

// function main(cb){
//     console.log("I am main")
//     cb()
// }

// main(hello)


// function road(){
//     console.log("I am stand on the road")
//     console.log("Now Finally i understood Callbacks")
// }

// function highway(cb){
//     console.log("I am stand on the NHAI Highway")
//     cb()
// }

// highway(road)

function parent(){
    console.log("I am parent..")

    function child(){
        console.log("I am child..")
        // return
    }
    return child
}
parent()()