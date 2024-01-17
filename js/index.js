import { num } from "https://yourownsquare.github.io/numjs/num.js"; 

let squarebox = document.querySelector('.new');

let dimensions =[5,10,15,20,25,30,35,40,45,50,55,60,65]
function width(){ 
let ele = Math.floor(Math.random()*dimensions.length);
var length = dimensions[ele];

return length};



let boxwidth = 0;
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
return color
}

for(let i=0; i<num; i++){
    boxwidth = width();
    let color = getRandomColor();
    squarebox.innerHTML+= '<span style="height: '+boxwidth+'px; width: '+boxwidth+'px; background-color: '+color+'; " class="squares box"></span>'

}

