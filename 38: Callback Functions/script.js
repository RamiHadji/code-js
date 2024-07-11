function test(){
    console.log("hi")

}
var x = test
x()

var y = function(x,y,t,r,h){
  console.log("hi from y function")
}
y()

console.log(y.length)

function callAnotherFunction(functionToCall){
    console.log("getting ready to call another function");
    functionToCall();
}
callAnotherFunction(y);

callAnotherFunction(function(){
    console.log("hello")
})

setTimeout(function (){
    console.log("hello world")
} , 3000)

var arr = [20, 30, 40, 90]

arr.forEach(function(element){

    console.log(element * 20)
})