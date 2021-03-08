"use strict"; 

window.addEventListener("DOMContentLoaded", init); 

let splittext;

function init(){
   
let sentence = document.querySelector("#cooltext");

console.log(sentence);
    
   
splittext = sentence.textContent.split(""); 
console.log(splittext); 

sentence.textContent = "";
    
splittext.forEach((letter, index) => {
const span = document.createElement("span");

span.classList.add("text-animation"); 
span.style.setProperty("--letter", index);

if (letter === " "){
span.innerHTML = "&nbsp";
}
else {
span.textContent = letter; 
}

sentence.append(span); 
}); 

}   

    //for (let i=0; i < sentence.length; i++){
    //const delay = 0.1 * i; 
    //document.querySelector("letter").style.setProperty("--delay", delay + "s");
     
