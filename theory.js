// Phase 4

/*
Browser API provide the 1. DOM 
                        2. locations 
                        3. local storage 
                        4. setInterval and SetTimeout
                        5. History API 
                        5. Fetch API
*/

/*
'use strict' // isko lagane se js thoda strict me kam krega

let heelo = function () {
    console.log(this)
}
heelo() // undefined output

let crush = {
    crushName: "Mamitha Baijju",
    myName: "Gautam Naugai",
    loveTest: "78%",
    sayHi: function () {
        console.log(this)
    }
}
crush.sayHi()
// agar ham object ke andar yese function likenge tho output wahi ayega jo uss object ke andar he sayHi: function(){console.log(this)} and if arrow function ka use krenge tho window object dega output me

// Node Js - is javascript run time enviroment 

var obj = {
    firstName: "Mamitha",
    lastName: "Gautam",
    fullName: function () {
        console.log(`${this.firstName}, you are my favourite for ${this.lastName}`)
        this.firstName = "Mamitha Gautam" // ham yese value ko update bhi kr sakte he
    }
}

obj.fullName()
console.log(obj)


// arrow function me this ka koi lexical scope nhi hota agar ham arrow function ke andar this lagaenge tho wo window pe indirect krega and  ham yese niche 👇 jaise krenge tho ham arrow function ko object se access kr sakte he 

var ob = {
    first: "Mamitha",
    last: "Gautam",
    crush: function () {
        var closeToHeart = () => {
            console.log(this)
        }
        closeToHeart()
    }
}
ob.crush()
*/

/*
// function sharing 1. Call
//                  2. Apply 
//                  3. Bind 

// call - matlab yek object me this pass kiya he tho ham use dusre object me bhi pass kr sakte he ye krta he call 

// var user1 = {
//     fullName: "Mamitha Baijju",
//     age: 24,
//     sayGreet: function(city, state){
//         console.log(`Hi, ${this.fullName} Love you ❤️, ${city} ${state}`)
//     }
// }

// var user2 = {
//     fullName: "Gautam Naugai",
//     age:21
// }
// var user3 = {
//     fullName: "Tanishtha Sharma",
//     age:21
// }

// user1.sayGreet.call(user1, 'Kochi', 'Kerala')
// user2.sayGreet.call(user2, 'Almora', 'Uttrakhand')
// user3.sayGreet.call(user3, 'Model Town', 'Delhi')


// var user1 = {
//     fullName: "Mamitha Baijju",
//     age: 24,
// }

// var user2 = {
//     fullName: "Gautam Naugai",
//     age:21
// }
// var user3 = {
//     fullName: "Tanishtha Sharma",
//     age:21
// }

// var sayGreet = function(){
//         console.log(`Hi, ${this.fullName} Love you ❤️`)
//     }

// sayGreet.call(user1)


// apply - same call method jaisa hi he but argumnet me value array me deni hoti jaise niche dekho

var user1 = {
    fullName: "Mamitha Baijju",
    age: 24,
    sayGreet: function(city, state){
        console.log(`Hi, ${this.fullName} Love you ❤️, ${city} ${state}`)
    }
}

var user2 = {
    fullName: "Gautam Naugai",
    age:21
}
var user3 = {
    fullName: "Tanishtha Sharma",
    age:21
}
var user4 = {
    fullName: "Devesh Nawani",
    age:21
}

user1.sayGreet.apply(user1, ['Kochi', 'KR'])
user1.sayGreet.apply(user2, ['Almora', 'UK'])
user1.sayGreet.apply(user3, ['Model Town', 'DL'])

// jab ham bind use krte he hame use return krwana hota bina uske output nhi aata
var output = user1.sayGreet.bind(user4, 'Nathupura', 'DL')
output()

*/

/*
// Prototypes

var college = {
    collegeName: "IIT Delhi",
    students: 5000,
    foundingYear: 1961,
    saySlogan: function(){
        return "We are Great, IIT always great"
    }
}

var branch = {
    name: 'CSE',
    Rating: "NIRF A++",
    students: 500,
    subjects: ['TOC', 'SD', 'CD']
}

var user = {
    name: "Gautam Naugai",
    age: 21,
    marks: 98
}

user.__proto__ = branch
branch.__proto__ = college

// console.log(user); // ise bolte he prototypal chaining 
console.log(user.collegeName);
console.log(user.saySlogan()); 

// dekho jaise pahele user apne me dekhega jo chaiye mere andar included h agar nhi h tho branch wale me jayega usme dekhega usme included h agar nhi tho parent pe jayega jo college name se he then ise ham bolenge prototype inheritance

// methods 
// console.log("Methods of Prototype")
// console.log(Object.prototype)
// console.log(Function.prototype)
// console.log(Array.prototype)

*/

// Function Constructor

// Contructor banane ke liye ham variable ka name Pascal case me lete he like - GoodMorning

// contructor yese banasakte he niche dekho 

// function MamithaBaijju(){
//     this.name = 'Mamitha Baijju',
//     this.birthPlace = 'Kidangoor, Kottayam district, Kerala, India',
//     this.age = 24
// }

// // ab yese bana he contructor
// let mb = new MamithaBaijju()
// console.log(mb)

// ham parameter and argument ke through bhi pass kr sakte he 
// // ye niche he constructor function 
// function Actress(username, birth, age){
//     this.name = username,
//     this.birthPlace = birth,
//     this.age = age,
//     this.getActorName = function(){
//         console.log("Actor Name: ", this.name)
//         console.log("Birth Place: ", this.birthPlace)
//         console.log("Age: ", this.age)
//     }
// }

// // ab yese bana he instance/ object
// let mb = new Actress('Mamitha Baijju', 'Kidangoor, Kottayam district, Kerala, India', 24)
// let gn = new Actress('Gautam', 'Almora, Uttrakhand', 21)

// mb.getActorName()
// gn.getActorName()


// upar jo diya jab es 5 tha tab ham yese use krte the now es6 ham classes ka concept aaya 

// class NoteBook{
//     constructor(fname, col, bg){
//         this.fname = fname
//         this.col = col
//         this.bg = bg
//         this.notebook = function(){
//             return `My notebook name is ${this.fname} and the colour is ${this.col} and bg is ${this.bg}`;
//         }
//     }
// }

// let nb = new NoteBook('IIPA', 'Blue', 'White')
// console.log(nb)
// console.log(nb.notebook())

function Company(companyname, networth, location, isrunning){
    this.companyname = companyname
    this.networth = networth
    this.location = location
    this.isrunning = isrunning
}

let companyrunning = function(){
    if(this.isrunning){console.log(`${this.companyname} ${this.networth} ${this.location}`)}
    else{console.log("Company Closed")}
}
Company.prototype.companyrunning = companyrunning

let comp1 = new Company('Tech Squadz', '1.1cr', 'Bangalore', true)
let comp2 = new Company('Microsoft', '10cr', 'Noida', true)
let comp3 = new Company('Google', '20cr', 'Gurugram', true)
let comp4 = new Company('Max', '1cr', 'New York', false)

comp2.companyrunning()
// console.log(comp1)
// console.log(comp2)
// console.log(comp3)
// console.log(comp4)

// Ye he Classical Inheritance
// 👇
class Car {
    constructor(carname, carcolor, feature, years) {
        this.carname = carname 
        this.carcolor = carcolor
        this.feature = feature
        this.years = years
    }
    greet(){
        console.log("Congratulations Sir")
    }
}

class Car2 extends Car {
    // agar merko car wale contructor he uske element yaha lane he tho ham iska use krenge
    constructor(carname, carcolor, feature, years){
        super(carname, carcolor, feature, years)
        // agar merko yek naya element bananan he phir this.namedenge element ka
        this.fourweeler = 4
    }
    bestModel(){
        console.log("Yes")
    }
    greet(){
        console.log("Congrats")
    }
}

let model = new Car('Tata Harrier', 'Grey Black', 'Automatic', 15)
// model.greet()
let model1 = new Car2('Tata Altroz', 'Grey Black', 'Manual', 15)
model1.bestModel()
model1.greet() // ye method overriding hua kyuki hamne car wale class me greet ka andar vlue alag hamne use change kr di car2 me 