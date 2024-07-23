// document.getElementById('text').innerHTML = 'hello Tarmeez'
// $('#text').html('welcome to tarmeez')


// document.getElementById('text').addEventListener("click", function(){
//   this.innerHTML = "hello Tarmeez"
// })

$("#text").click(function() {
  $(this).html("Welcome to Tarmeez channel");
});
$('#text').on('dblclick', function(){
  $(this).html("Welcome to Tarmeez channel 2");
})