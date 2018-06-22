//The task 1

var elemQuery = document.querySelector("div > div > p:last-child");
console.log(elemQuery);

var elemTagName = document.getElementsByTagName("p")[1];

console.log(elemTagName);

//The task 2 
 
var elemTagName = document.getElementsByTagName("div")[2];

var elemTagNameChild = elemTagName.children[0];
elemTagNameChild.style.textTransform = "uppercase";


//The task 3 

var elemTagName = document.getElementsByTagName("p")[3];
var text = elemTagName.innerText;
var firstLetter = text.substring(0,1);
var textLow = text.substring(1,3).toLowerCase();
elemTagName.textContent = firstLetter + textLow;

//The task 4

var tagName = document.getElementsByTagName("p");

for(var i = 0; i < tagName.length; i++){
    console.log(tagName[i]);
}

//The task 5

var idName = document.getElementById("four");
var text = idName.innerText;

console.log(text);

//The task 6

var elemClass = document.getElementsByClassName("two");

for(var i = 0; i < elemClass.length; i++){
  elemClass[i].style.fontSize = "30px";
}

//The task 7

var elemName = document.getElementsByName("five")[0];
elemName.style.color = "red";

//The task 8

var elemTagName = document.getElementsByTagName("div")[4];
var newP = document.createElement("p");
newP.textContent = "Three";
elemTagName.insertBefore(newP,elemTagName.children[2]);

//The task 9

var elemTagName = document.getElementsByTagName("div")[5];
var elemTagNameChild = elemTagName.children;
 
 for(var i = 0; i < elemTagNameChild.length; i++){
   elemTagNameChild[i].style.background = "yellow";
 }