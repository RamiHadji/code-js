// var students = [ 
//      ["Khaled", "Omar", "Mohammed", "Sami"], 
//      ["KhaledR", "OmarB", "MohammedF", "SamiD"], 
//      [15, 16, 17, 16], 
//      ["2000", "2001", "2002", "2003"] 
 
// ]

// console.log("the name is: " + students[0][0])
// console.log("the age is: " + students[1][0])
// console.log("the date is: " + students[2][0])

let student = {
     firstName: "Khaled", 
     lastNane: "Omar",
     age: 15,
     year: "2000",

     printFullName: function(){
          console.log(this.firstName + ' ' + this.lastNane)
     }
}
student.grade = 'A+'
console.log(student.grade)
function printFullName(st){
     console.log(st.firstName + " " + st.lastNane);
}
printFullName(student)
//console.log(student.age)

let students = [
     {
          firstName: "Khaled", 
          lastNane: "Omar",
          age: 15,
          year: "2000",
     
          printFullName: function(){
               console.log(this.firstName + ' ' + this.lastNane)
          }  
     },
     {
          firstName: "Ahmed", 
     lastNane: "Omar",
     age: 15,
     year: "2010",

     printFullName: function(){
          console.log(this.firstName + ' ' + this.lastNane)
     }
     },
     {
          firstName: "Belal", 
     lastNane: "Omar",
     age: 15,
     year: "2008",

     printFullName: function(){
          console.log(this.firstName + ' ' + this.lastNane)
     }
     }
]
console.log(students[0].firstName)