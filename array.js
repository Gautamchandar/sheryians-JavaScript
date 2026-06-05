// // // var a = [10, 20, 30, 40, 50, 'Hello']
// // // // console.log(a) // [10, 20, 30, 40, 50]
// // // // console.log(a[8]) // undefined

// // // // console.log(a.length) // Total element inside array

// // // console.log(a.length - 1) // last index ka number kya he 
// // // console.log(a[a.length-1]) // last index ka element pta chalega uspe kon betha he 

// // var b = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// // b.push(101) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101]
// // // push last me element add krta he 
// // console.log(b)

// // b.pop() // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// // b.pop() // [10, 20, 30, 40, 50, 60, 70, 80, 90]
// // // pop last se element remove krta he 

// // console.log(b)

// // b.unshift(5) // [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
// // // unshift first me element add krta he 

// // console.log(b)

// // b.shift() // [10, 20, 30, 40, 50, 60, 70, 80, 90]
// // b.shift() // [20, 30, 40, 50, 60, 70, 80, 90]
// // b.shift() // [30, 40, 50, 60, 70, 80, 90]
// // b.shift() // [40, 50, 60, 70, 80, 90]
// // // shift first se element remove krta he 

// // console.log(b)

// // var c = [11, 22, 33, 44, 55]
// // // c.splice(StartingIndex, DeleteCount)
// // // c.splice(StartingIndex, DeleteCount, newElement)
// // c.splice(1, 0, 99)
// // console.log(c)

// // // creating array 
// // var arr = new Array(5)
// // console.log(arr)

// // var matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]
// // console.log(matrix.length)
// // console.log(matrix[0][1] + matrix[2][1] + matrix.length) // 2 + 8 + 3 = 13

// // var r = [100, 200, 300, 400]
// // console.log(r.reverse()) // ye reverse kr dega array ka

// // var s_single = [1, 9, 6, 4, 2]
// // console.log(s_single.sort()) // ye sort krega acending order me

// // // but jab double digit me hoga tho only single first number ka hoga like 12 ka he tho only one wala sort krega only first wala 

// // var sort_double_digit = [73, 10, 53, 100, 12, 9, 60]
// // console.log(sort_double_digit.sort())

// // // problem solve hoga sort ka
// // var problem_sort_double_digit = [73, 10, 53, 100, 12, 9, 60]
// // console.log(problem_sort_double_digit.sort((a, b)=> (a-b)))

// var array = [10, 20, 30, 40, 50]

// // for (let index = 0; index < array.length; index++) {
// //     console.log(array[index])
// // }

// // another is for of loops of direct reach value

// for (value of array) {
//     console.log(value)
// }

// var newarr = []

// for (let index = 0; index <= 100; index++) {
//     if (index % 2 == 0) {
//         newarr.push(index)
//     }
// }
// console.log(newarr)

// // Mutating matlab - jo orginal array me change kare
// var m = [10, 20, 30, 40, 50]
// m.push(88)
// console.log(m)

// // Non-Mutating matlab - jo orginal array me change na kare

// var x = [100, 200, 300, 400, 500, 600, 700, 800, 900] // like 1 index pe jayega and (1,2) matlab 200 kyuki 100=1 and 200 = 2
// // console.log(x.slice(1, 2))
// console.log(x.slice(2, 6)) // 300  to 600 tk
// console.log(x.slice(2, 4)) // [300, 400]
// // console.log(x)

// // ab concat he arrays ko concat krta he and aur yek naya aaray provide krta h 
// let arr1 = [10, 20, 30, 40]
// let arr2 = [50, 60, 70, 80]

// let concat_array = arr1.concat(arr2)
// console.log(concat_array);

// // includes krta ye he ki wo mera element array ke andar he ya nhi

// let arr3 = [87, 63, 55, 100, 98]
// let arr4 = arr3.includes(100)
// console.log(arr4)

// // indexOf ye pta krta he ki wo value ki index kya he agar koi random value doge array ke andar nhi he tho ("-1") dega

// var i = [10, 20, 30, 40]
// var final_i = i.indexOf(40)
// console.log(final_i)

// // join kya krega - array ko string base pe bana dega

// var ab = ["Tanishtha", "Best friend is", "Gautam"]
// var final_ab = ab.join(" ")
// console.log(final_ab)

// Refrence behaviour of array

// for each use hoga iteration ke liye
// map use hoga transform karne ke liye 
// filter use hoga filter karne ke liye
// reduce use hoga puri acculmulate value yek banane ke liye (reduce)

// forEach - High order function (HOF)

// let arr = ["Gautam", "Tanishtha", 90, true, "Best Friends"]
// arr.forEach(function (elem, idx) { // in foreach we can pass 2 value in parameter first place is for element and second place is for index . This is permanent if u wud give idx first so they will give element value not index value. every place is permanent
//     console.log(elem, idx)
// })

// map - transform
// var names = ["Gautam", "Tanishtha", "Devesh", "Garv", "Himesh"]

// console.log(name)

// var fullName = name.map(function(elem){
//     return elem.substring(0, 3)
// })

// console.log(fullName)

// var marks = [56, 22, 90, 51, 88, 93, 15]

// var shortlistMarks = marks.filter(function (elem) {
//     return elem > 75
// })

// console.log(shortlistMarks)

// var filterName = names.filter((elem)=>{
//     return elem.includes('a')
// })

// console.log(filterName)

//reduce  - sabko yek banayega

var arr = [10, 20, 30, 40]

// var finalArray = arr.reduce(function (acc, val) {
//     console.log(acc, val)
//     return acc + 2
// }, 0)

// console.log(finalArray)

// var finalArray = arr.reduce(function (acc, val) {
//     console.log(acc, val)
//     return acc * val
// }, 2)

// console.log(finalArray)

// let x = [32, 98, 67, 350, 20, 12]

// let y = x.reduce(function (acc, val) {
//     if (val > acc) {
//         return val
//     } else {
//         return acc
//     }
// }, 0)

// console.log(y)

// let heros = ["Superman", "Batman", "Spiderman", "Ironman"]
// let heros = [76, 42, 89, 32, 10]

/* findIndex - isko krne pe merko wo jo first dega uska index
let findFinally = heros.findIndex(function(elem){*/

/* find - isko krne pe merko only first value hi show krega
let findFinally = heros.find(function(elem){ */

/* some kya krta jaise find me wo value de raha tha element ki lakin some bs "True and False" me dega answer 
let findFinally = heros.some(function(elem){ */

//every kya karega - every sab me element check krta ki like ye mene below me example lia h isse completely divide ho he  agar per he element yek element se completely divivde ho raha he tho true agar yek se bhi completely divide nhi hua tho false return kr dega
// let findFinally = heros.every(function(elem){
//     return elem % 2 == 0
// })

// console.log(findFinally)

 