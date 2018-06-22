//var a = document.getElementsByTagName("a")[0];
//a.addEventListener("click", function(event){
//	event.preventDefault();
//});
//console.log(event);

//подсвечивание 
//var input = document.getElementsByTagName("input")[0];
//input.addEventListener("focus", function(event){
//	input.style.backgroundColor = "lightgreen";
//	console.log("blur");
//});

//потеря фокуса

//var input = document.getElementsByTagName("input")[0];
//input.addEventListener("blur", function(event){
//	input.style.backgroundColor = "lightgreen";
//	console.log("blur");
//});

//изменение контейнера

//var input = document.getElementsByTagName("input")[0];
//input.addEventListener("change", function(event){
//	input.style.backgroundColor = "lightblue";
//});

//событие click
//var input = document.getElementsByTagName("input")[0];
//input.addEventListener("click", function(event){
//	input.style.backgroundColor = "yellow";
//});

//получение фокуса
/* var input = document.getElementsByTagName("input")[0];
input.addEventListener("mousedown", function(event){
  input.style.backgroundColor = "red";
  console.log("Md");
}); */
/* var input = document.getElementsByTagName("input")[0];
input.addEventListener("mouseup", function(event){
  input.style.backgroundColor = "green";
  console.log("Mu");
}); */
///* var input = document.getElementsByTagName("input")[0];
//input.addEventListener("mouseover", function(event){
//  input.style.backgroundColor = "black";
//  console.log("Mo");
//}); */
//var input = document.getElementsByTagName("input")[0];
//input.addEventListener("mouseout", function(event){
//	input.style.backgroundColor = "white";
//	console.log("Mout");
//});

var font = 10;
var button = document.getElementsByTagName ("button")[0];
var p = document.getElementsByTagName("p")[0];

button.addEventListener("click", click);
function click (event){
	p.Style.fontSize = font+"px";
	font++;
	
}