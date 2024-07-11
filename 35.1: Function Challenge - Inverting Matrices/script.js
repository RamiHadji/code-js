function reverseArray(array = [20, 10, 30, 50]) {
    var outputArray = [];
    for (var element of array) {
        outputArray.unshift(element);
    }
     return outputArray
}

var myArray = [9, 1, 5, 7, `hello,`, true]
console.log(myArray)
console.log("The reverse is : " +reverseArray(myArray))

var myArray2 = [10, 20, 30, 40, 50]
console.log("The second reverse is : " + reverseArray(myArray2))