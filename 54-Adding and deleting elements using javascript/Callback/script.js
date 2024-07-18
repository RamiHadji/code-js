// document.getElementById("ul").innerHTML += "<li>Yarob</li>"

let liEllement = document.createElement("li")
let textContent = document.createTextNode("Yarob")
liEllement.appendChild(textContent)
document.getElementById("ul").appendChild(liEllement)
console.log(textContent)


let khleadNode = document.getElementById("Khaled-id")
document.getElementById("ul").removeChild(khleadNode)
console.log(liEllement)