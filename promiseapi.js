// let response = fetch('https://fakestoreapi.com/products')

// response.then(function(data){
//     console.log("Data aa gaya he ✅")
//     return data.json()

// })
// .then(function(myjson){
//     console.log(myjson)
// })
// .catch(function(){
//     console.log("Data nhi aaya ❌")
// })

// u can above example u can simple way let's see 

// async function datalana(){

//     let response = await fetch('https://fakestoreapi.com/products')

//     let data  = await response.json()

//     data.forEach(function(elem){
//         console.log(elem)
//     })

// }
// datalana()

// then and catch hamara promise ko handle krne ke liye hota he 
// try catch hamara await and async ke liye hota he

async function datalana() {

    try {
        let response = await fetch('https://fakestoreapi.com/products')

        let data = await response.json()

        data.forEach(function (elem) {
            console.log(elem.title)
        })
    } catch (error) {
        console.log("Data Not Found")
    }


}
datalana()


// Practice Now
