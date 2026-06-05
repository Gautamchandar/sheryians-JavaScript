// Basics of Object
/*let user = {
    fullName: "Tanishtha Sharma",
    age: 21,
    profession: "Data Analyst & Graphic Designer",
    isMarried: false,
    isworking: true
}*/

/*CRUD 

Read
console.log(user.fullName)

agar mujhe obj1 me add krna he (naye element ko create karna) 
user.city = "Model Town"
console.log(user)
console.log(user.city)

purane ko update krna he object me 
user.isworking = false
console.log(user)

object user kisi key value ko "DELETE" karna he tho yese hoga

delete user.isworking
console.log(user)

*/


/* Agar merko iss upar wala user obj ki keys nikalni he tho

console.log(Object.keys(user))

 Agar merko iss upar wala user obj ki values nikalni he tho

console.log(Object.values(user))

 Agar merko iss upar wala user obj ki entries(pair) nikalni he tho

console.log(Object.entries(user))  */

/* Agar merko object ke andar array and object pass krna he tho yese karenge

let user = {
    name: "Anushka Sharma",
    age: 38,
    live: "London",
    skills: ["Actor", "Supporter", "Team Lead"],
    husband:{
        name: "Virat Kohli",
        age: 37,
        skills:["Dancing", "Fielding", "Batter"],
    }
}

console.log(user)
console.log(user.name)
console.log(user.skills)
console.log(user.husband)
console.log(user.husband.name)
console.log(user.husband.skills)
console.log(user.husband.skills[1])

console.log((user.age - user.husband.age) + user.husband.skills[0])

*/

/* obj ke andar aab function banate he 
 object ke andar banne wale function ko method kahete he 
let car = {
    car_name: "BMW M2",
    color: "Neon",
    functioning: function(){
        console.log("Sport Car")
        return 1
    }
}

console.log(car.functioning()) */

const user = {
    name: "Mamitha",
    age: 24
}

// user.name = "Mamita Baijju"
// console.log(user);

// agar merko ise rokna ki bad me value change kr raha mamitha -> mamita baiju uske 2 methods he 1. Seal 2. Freeze

/* 1. Object.seal - koi bhi key value pairs add bhi nhi kar sakta object me aur na hi delete bhi bs update kr sakta he object me 

Object.seal(user)

no! creation with Seal

user.state = "Kerala"
console.log(user);

yes! updation with Seal

user.name = "Mamita Baijju"

no! delete with Seal

delete user.age
console.log(user);

without seal all are working
*/


/* 2. Object.freeze me ham key value pairs object me jo na hi update kr sakte na hi delete and na create bhi nhi kr sakte 

Object.freeze(user)

no updation
user.name = "Mamitha Gautam"
console.log(user)

no creation
user.city = "Hydreabad"
console.log(user)

no deletion
delete user.age
console.log(user)

Read only 
console.log(user)

*/

/* distructuring 

 let arr = [10, 20, 30, 40]

let [a,,b] = arr
let [b] = arr

console.log(b)

let BestNames = ["Tanishtha", "Radhika", "Pari", "Mini", "Kanika", "Bhavisha", "Lalita", "Shraddha"]

let [...a, b] = BestNames //Uncaught SyntaxError: Rest element must be last element

let [a, ...b, c] = BestNames  //Uncaught SyntaxError: Rest element must be last element

let [a, b, ...c] = BestNames  // best one 

agar ham left side use krte he (...) tho wo rest operator ke liye use hoga and if we will use right side so they will work as spread operator

console.log(a, b, c)

*/

/* ab me object me yaise destructure karte he 

let userObj = {
    fullName: "Priyanka Chopra",
    age: 43,
    Occupation: "Actress, Film Producer",
    Spouse: "Nick Jonas"
}

let {fullName, age, ...c} = userObj
console.log(fullName, age, c)

*/

/* shallow copy - value change lakin obj ke obj ka address same hoga tho actual bhi wahi hogi jo diya hamne update me
let orginal = {
    name: "Virat Anushka",
    age: 38,
    brand: {
        name: "One8",
        owner: "Virat Kolhi"
    },

}

let ob1 = { ...orginal }
ob1.name = "Virat"
console.log(ob1)
// console.log(ob)

ob1.brand.name = "One(1)8"
console.log(ob1)
// console.log(orginal)

// deep copy

let str = JSON.stringify(orginal)
let str1 = JSON.parse(str)

// we can write this in one line and easy way
// let str1 = JSON.parse(JSON.stringify(orginal))

console.log(str1);
*/

let word = "Hello";
for (let char of word) {
    console.log(char);
}