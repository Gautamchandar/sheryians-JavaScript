// Create an array of 5 favorite movies and print all values.

// **Hint:** Use indexing

// let favMovies = ['Premalu', 'Soorvanshyam', 'Dada', 'Dhurandhar', 'MS Dhoni']

// console.log(favMovies[0])

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// **Hint:** Mixed data types + nested indexing

// let mixValues = [87, 'Tanishtha', true, [10, 20, 30]]

// console.log(mixValues[3])

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

// let arr = [10, 20, 30, 40, 50]
// console.log("first element",arr[0])
// console.log("last element", arr[arr.length-1])

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable

// let arr = [10, 20, 30, 40, 50]

// console.log(arr)
// let temp = 0

// temp = arr[1]
// arr[1] = arr[arr.length-2]
// arr[arr.length-2] = temp

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// Create a 2D array and print all first elements of inner arrays.

// **Hint:** Double indexing

// let twoDArray = [
//     [10, 20, 30],
//     [40, 50, 60]
// ]

// console.log(twoDArray[0][0])
// console.log(twoDArray[0][1])
// console.log(twoDArray[0][2])
// console.log(twoDArray[1][0])
// console.log(twoDArray[1][1])
// console.log(twoDArray[1][2])

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index

// let threeDArray = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ]

// let sum = threeDArray[0][0] + threeDArray[1][1]+ threeDArray[2][2]

// console.log(sum)

// Find total elements in an array without counting manually.

// **Hint:** Use `.length`

// let totalElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(totalElement.length)

// Create a function that checks whether array length is even or odd.

// **Hint:** Use modulus operator

// let arr = [10, 20, 30]
// let len = arr.length

// function check() {
//         if (len % 2 == 0) {
//             return "Array length is even"
//         } else {
//             return "Array length is odd"
//         }
// }
// console.log(check())

// Add 3 new elements at the end of array.

// **Hint:** Use `push()`

// let elem = [1, 2, 5]
// elem.push(8)
// elem.push(9)
// elem.push(7)

// console.log(elem)

// Remove last element and print removed value.

// **Hint:** Store `pop()` result

// let arr = [10, 20, 30, 40, 50]

// console.log(arr)

// arr.pop()

// console.log(arr)

// Keep removing elements until array becomes empty.

// **Hint:** Use `while` loop

// let arr = [10, 20, 30]
//    console.log(arr)
// while (arr.length) {
//    arr.pop()
//    console.log(arr)
// }
// console.log(arr)

// Add one username at beginning of array.

// **Hint:** Use `unshift()`

// let array = [66, true, [78, 6, 3], {"fullName": "Gautam Naugai"}]

// array.unshift("I am Username")

// console.log(array)


// Array part 2

// let prices = [100, 250, 399, 499];

// prices.forEach(function (val) {
//     console.log(`₹${val}`)
// })

// let students = [
//     { name: "Anubhav", marks: 85 },
//     { name: "Rahul", marks: 42 },
//     { name: "Aman", marks: 90 },
// ];

// students.forEach(function (elem) {
//     if (elem.marks >= 50) console.log(`${elem.name} - Pass`)
//     else console.log(`${elem.name} - Fail`)
// })

// let names = ["anubhav", "rahul", "aman"];

// let upp = names.map((e)=>{
//     return e.toUpperCase()
// })

// console.log(upp)

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let newProduct = products.map((elem, idx)=>{
//     let price = elem.price
//     let discountPrice = price - (price * 10 / 100)
//     return {
//         "name": elem.name,
//         "price": elem.price,
//         "discountPrice": price - (price * 10 / 100)
//     }
// })

// console.log(newProduct)

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenNum = nums.filter(function (elem) {
//     return elem % 2 == 0
// })

// console.log(evenNum)

// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];

// let activeUser = users.filter(function(elem){
//     if(elem.active){
//         return {
//             "name": elem.name,
//             "active":elem.active
//         }
//     }
// })

// console.log(activeUser)

// let nums = [10,20,30,40];

// let total = nums.reduce(function(acc, val){
//     return acc + val
// },0)

// console.log(total)

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let count = fruits.reduce(function (acc, val) {
//     acc[val] = (acc[val] || 0) + 1

//     return acc
// },{})

// console.log(count)

// let arr = [5, 12, 8, 20, 3];

// let result = arr.reduce(function (acc, val) {
//     if (val > acc) return val 
//     return acc
// })

// console.log(result);

// let arr = [5, 12, 8, 20, 3, 1];

// let result = arr.reduce(function(acc, val){
//     if (val < acc) return val
//     return acc
// })

// console.log(result)

// let arr = ["I", "Love", "JS"];

// let mergeWords = arr.reduce(function(acc, val){
//     return acc + " " + val
// })

// console.log(mergeWords)

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce(function(acc, val){
//     if(val % 2 == 0){
//         return acc + val
//     }
//     return acc
// }, 0)

// console.log(result)

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce(function(acc, val){
//     if(val % 2 != 0){
//         return acc + val
//     }
//     return acc
// }, 0)

// console.log(result)

// let arr = [1, 2, 3, 4, 5, 6, 9, 7, 10, 12, 16];

// let count = 0

// let res = arr.reduce(function(acc, val){
//     if(val % 2 == 0){
//         return count = count+1
//     }
//     return acc
// }, 0)

// console.log(res)

// let arr = ["a", "b", "a", "c", "b", "a"];

// let countLetters = arr.reduce((acc, val)=>{
//     acc[val] = (acc[val] || 0) + 1

//     return acc
// }, {})

// console.log(countLetters)

// let arr = [[1, 2], [3, 4], [5, 6]]; 

// let flatten = arr.reduce((acc, val)=>{
//     return acc.concat(val)

// })

// console.log(flatten)

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Mouse", price: 1000 }
// ];

// let finalProductTotalPrice = products.reduce((acc, val) => {
//   console.log("val =", val);
//   return val;
// });

// let finalProductTotalPrice = products.reduce((acc, val) => {
//   return acc + val.price
// }, 0)

// console.log(finalProductTotalPrice)

// let nums = [20, 35, 60, 80];

// let greater = nums.find((elem) => {
//   return elem > 50
// })

// console.log(greater)

// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];

// let admin = users.find((elem)=>{
//   return elem.username === "admin"
// })

// console.log(admin);

// let nums = [10, 40, 90, 50];

// let find = nums.findIndex((elem)=>{
//   return elem == 90
// })

// console.log(find);

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];

// let fail = students.findIndex((elem)=>{
//   if(elem.marks < 40) return elem
// })

// console.log(fail);

// let nums = [10, 20, -5, 40];

// let negetive = nums.some((elem)=>{
//   return elem < 0
// })

// console.log(negetive);

let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];

let stock = products.some((elem)=>{
  return elem.stock === 0
})

console.log(stock);
