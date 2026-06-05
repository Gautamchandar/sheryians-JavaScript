// phase 5

// JavaScript is single thread programming language because all the code is run on sync nature.

// AJAX  - Asynchronous JavaScript and XML
// Asynchronous JavaScript and XML. It is a web development technique used to send and receive data from a server in the background without refreshing the entire web page. While the "X" stands for XML, modern applications almost exclusively exchange data using JSON due to its smaller size and native compatibility with JavaScript.

/* Work beside browser
Browser 
                                        Web API
                                  --------------------      
                                  |                   |
                                Window                |
 -------------                    |  - Console        |
 | Js Engine |                    |  - DOM API        |
 | ----------|                    |  - Location       |
                                  |  - History API    |
                                  |  - Fetch API      |
                                  |  - setTimeout     |
                                  |  - Local Storage  |
                                  |  - URL            |
                                  ---------------------

*/

let response = fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(response)

// three state of promise 
// -pending
// -resolved
// -rejected

// as compared to call back queue the most important priorities is for microtask queue because included in Promises, mutuation observer queues 

// first all the micro task question will be run becoz these are VIP and call back queue are in waiting list 

// setTimeout(function x(){
//     console.log("Hi, Mamitha")
// },2000) // ye 2s bad chalega

// setInterval(function x(){
//     console.log("Hello, Mamitha")
// },1000) // ye har 1s bad chalega jo hota he setInterval 


// let inte = setInterval(function x(){
//     console.log("Running")
// }, 1000)

// setTimeout(function(){
//     clearInterval(inte)
// }, 5000)

// Promise - Creation

function orderFood(){

    let myOrder = new Promise(function(resolve, reject){
        console.log("Order is on the way....")

        let orderStatus = true

        setTimeout(function(){
            if(orderStatus){
                console.log("Delievery Person has been come")
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })

    myOrder.then(function(){
        console.log("Now make a payment")

        return new Promise(function(res, rej){
            let paymentStatus = false
            setTimeout(function(){
                if(paymentStatus){
                    console.log("Payment Done! Thank you ✅")
                    res()
                }
                else{
                    console.log("Payment Cancelled")
                    rej()
                }
            }, 5000)
        })
    }).then(function(){
        console.log("Ye woah hooo! Let's Party")
    })
    .catch(function(){
        console.log("Order Cancelled! Please Check on website")
    })
    .finally(function(){
        console.log("Please rating on website about Food! Thank you ❤️")
    })
}

orderFood()
