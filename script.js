/* Console & Basics

// Q1 Print "Hello JavaScript" in the console.

console.log("Hello JavaScript")

// Q2 Print your name, age, and city using one console.log().

console.log("name:","Gautam Naugai")
console.log("age:", 21)
console.log("city:", "Burari")

// Q3 Print a warning message using console.warn().

console.warn("Be Alert!")

// Q4 Print an error message using console.error().

console.error("Error goes went wrong! Pls try again later")

// Q5 Use console.table() to display an array of 5 numbers.

console.table([19, 27, 39, 45, 85]) */

/*Variables

// Q1 Create a variable called studentName and store your name in it.

var studentName = "Gautam Naugai"

// Q2 Create a variable age and print it.

var age = 21
console.log(age)

// Q3. Create two variables and swap their values.
var variable1 = 10
var variable2 = 20
// 10
var newvariable = variable2
variable2 = variable1
variable1 = newvariable

console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

// Q4. Create a constant variable for `PI` and print it.

const PI = 3.14
console.log(PI)

// Q5. Declare a variable without assigning a value and print it.

var value1
console.log(value1)
// Q6. Create a variable `score` and increase it by 10.

var score = 10
score++

// Q7. Create three variables for first name, last name, and full name.
var firstName
var lastName
var fullName 

*/

/*Data Types

// Q1. Create variables of type string, number, boolean, null, and undefined.

var name = "Gautam Naugai"
var num = 81
var bool = true
var x = null
var y

// Q2. Check the type of different variables using `typeof`.
var name = "Gautam Naugai"
console.log(typeof(name))
var num = 81
console.log(typeof(num))
var bool = true
console.log(typeof(bool))
var x = null
console.log(typeof(x))
var y
console.log(typeof(y))

// Q3. Store your mobile number in a variable and check its type.

var mobile_no = 8373837383
console.log(typeof(mobile_no))

// Q4. Create a variable with value `null` and check its type.

var val = null
console.log(typeof(val))

// Q5. Create a bigint number and print it.

var big = 173692329648236384637827338092879326443653n
console.log(big)

*/

/* Type Conversion & Coercion

// Q1. Convert the string `"50"` into a number.

var val = "50"

val2 = Number(val)
console.log(val2)
console.log(typeof(val2))

// Q2. Convert the number `100` into a string.

var num = 100

var stringValue = String(num)
console.log(stringValue)
console.log(typeof(stringValue))

// Q3. Convert `"true"` into a boolean.

var stringBoolVal = "true"

var boolValue = Boolean(stringBoolVal)
console.log(boolValue)
console.log(typeof(boolValue))

// Q4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

console.log("5" + 2)
console.log("5" - 2)
console.log(true + 1)

// Q5. Create a variable with value `"123abc"` and convert it into a number.

var value = "123abc"
var intVal = Number(value)
console.log(intVal)
console.log(typeof(intVal))

// Q6. Use `parseInt()` on `"500px"`.
console.log(parseInt("500px"))

*/

/* Operators

// Q1. Add two numbers and print the result.

var num1 = 15
var num2 = 15

console.log(num1+num2)

// Q2. Find the remainder when 25 is divided by 4.
var a = 25
var b = 4

console.log(a%b)

// Q3. Find the square of a number using exponent operator.

var x = 10

console.log(x**2)

// Q4. Increment a variable using `++`.

var inc = 16
console.log(inc++)

// Q5. Decrement a variable using `-`.

var inc = 16
console.log(inc--)

// Q6. Use `+=` operator to increase a variable by 20.

var op = 20
op = op + 1

console.log(op)
// Q7. Compare two numbers using `>`, `<`, `>=`, `<=`.

var n1 = 10
var n2 = 7

console.log(n1>n2)
console.log(n1>=n2)
console.log(n1<n2)
console.log(n1<=n2)

// Q8. Check if two values are strictly equal using `===`.

if(10 === "10") {
    console.log("True")
} else{
    console.log("False")
}
// Q9. Compare `"10"` and `10` using both `==` and `===`.

// ===
if(10 === "10") {
    console.log("True")
} else{
    console.log("False")
}

//==
if(10 == "10") {
    console.log("True")
} else{
    console.log("False")
}

// Q10. Create two boolean variables and test `&&`, `||`, and `!`.

var bool1 = true
var bool2 = false

if(bool1 && bool2){
console.log("This is logical AND");
}else{console.log("This is not true");}
if(bool1 || bool2){
    console.log("This is logical OR");
}
if(!bool2){
    console.log("This is logical NOT");
}

*/

// Strings
// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// 2. Find the square root of 81.
// 3. Find the maximum number from `10, 20, 5, 99`.
// 4. Generate a random number between 1 and 10.
// 5. Convert `"99.99"` into an integer.
// 6. Check whether `25` is an integer or not.
// 7. Use `toFixed(2)` on `3.141592`.

/* Conditionals

// Q1. Check whether a number is positive or negative.
var num = 10
if (num > 0) {
    console.log("Number is positive")
} else {
    console.log("Number is negetive")
}
// Q2. Check whether a number is even or odd.
num1 = 3
if (num1 % 2 == 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}
// Q3. Check whether a person is eligible to vote.
var age = 10
if (age >= 18) {
    console.log("You can vote")
} else {
    console.log("Sorry! You can't vote")
}
// Q4. Find the largest among two numbers.
var firstNumber = 10
var secondNumber = 20

if (firstNumber > secondNumber) {
    console.log(firstNumber, "is Greater")
} else {
    console.log(secondNumber, "is Greater")
}
// Q5. Find the largest among three numbers.
var numOne = 11
var numTwo = 62
var numThree = 13

if (numOne > numTwo) {
    console.log(numOne, "is Greater")
} else if (numTwo > numThree) {
    console.log(numTwo, "is Greater")
} else {
    console.log(numThree, "is Greater")
}
// Q6. Check whether a year is a leap year.

var year = 2027
if (year % 4 == 0) {
    console.log(year, "is leap year")
} else {
    console.log(year, "is not leap year")
}

// 7. Check whether a number is divisible by both 3 and 5.
var number = 15
if (number % 3 == 0 && number % 5 == 0) {
    console.log("Number is completely divisible by 3 and 5")
} else {
    console.log("Not completely divisible")
}
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

var marks = 87
if (marks > 90) { console.log("A") }
else if (marks > 75) { console.log("B") }
else if (marks > 50) { console.log("C") }
else { console.log("Fail") }

// Q7. Check whether a character is a vowel or consonant.


// 2. Create a calculator using `switch` statement.

var first = Number(prompt("Enter first Number"))
var second = Number(prompt("Enter second Number"))
var operator = prompt("Enter the operator")


switch(operator){
    case '+':
        console.log(first + second)
        break
    case '-':
        console.log(first - second)
        break
    case '*':
        console.log(first * second)
        break
    case '/':
        console.log(first / second)
        break
    case '%':
        console.log(first % second)
        break
    default:
        console.log("Not Valid operator")
}


// 3. Print the day name based on a number (1–7).

var day =  4
switch(day){
    case 1:
        console.log("Monday")
        break
   case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thrusday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Day")
}
// 4. Check whether a username is `"admin"` and password is `"1234"`.

var username = prompt("Enter the username")
var password = Number(prompt("Enter the password"))

if(username == "admin" && password == 1234){
    console.log("Successful Login")
} else{
    console.log("Pls try again some time!")
}

*/
let val = "hello";
let b = Number(val);  
console.log(b)

console.log( 3 + "5"); 

let s = "Hello, World!";

console.log(s.split(""));         // ["Hello", "World!"]



let n = 3.14159;

console.log(n.toFixed(2));     // "3.14" (returns string!)
console.log(Number("42"));     // 42
console.log(Number("42abc"));  // NaN
console.log(parseInt("42px")); // 42 (parses what it can)
console.log(parseFloat("3.14kg")); // 3.14
console.log(isNaN("hello"));   // true
console.log(Number.isInteger(5));   // true
console.log(Number.isInteger(5.5)); // false