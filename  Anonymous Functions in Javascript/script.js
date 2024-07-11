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
