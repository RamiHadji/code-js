 var arr = [10, 20, 30, 40, 50]
// var myArray = []
// for (element of arr){
//     myArray.push(element * 10)
// }
// console.log(myArray)

// let myArray= arr.map(function(element){
// return element * 10
// })
// console.log(myArray)

// let myArray = arr.filter(function(element){

//     // if (element > 35){
//     //     return true
//     // }
//     //     return false
   
//    return element > 35
// })
// console.log(myArray)

let total = arr.reduce(function(prevValue, currentvalue){
     return prevValue + currentvalue

})
console.log(total)