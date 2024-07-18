// document.getElementById("title").innerHTML = "Tarmeez Channel"
let content = document.getElementById("title").innerHTML 

document.getElementsByTagName("input")[0].setAttribute("value", content) 
console.log(content)

document.getElementById("title").style.backgroundColor = 'red'
document.getElementById("title").style.boxShadow = "0px 5px 5px rgba(0,0,0,0.5)"
