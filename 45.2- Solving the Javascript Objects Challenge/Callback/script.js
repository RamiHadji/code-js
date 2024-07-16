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
for (st of students){
     let content = `<tr>
                     <td> ${st.firstName} 
                     </td>
                     <td> ${st.age} 
                     </td>
                     <td> ${st.year} 
                     </td>
                    </tr>`
     document.getElementById('students').innerHTML += content
}
console.log(students[0].firstName)