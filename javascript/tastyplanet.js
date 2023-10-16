
let grid= document.getElementById("grid-container").addEventListener("click",go());
let dotone= document.getElementById("dotone").addEventListener("click",go());
let x=Math.floor(math.random()*19+1);
let y= Math.floor(math.random()*19+1);
window.onload=function(x,y){
    dotone.style.setProperty("grid-column-start", ""+x);
    dotone.style.setProperty("grid-row-start",""+ y);
}

function go(){
    let i =document.getElementById("shark");
    i.style.height+=5px;
    i.style.width+=5px;
     x= Math.floor(math.random()*19+1);
     y= Math.floor(math.random()*19+1);
     set(x,y);
}  

function set (x, y){
    dotone.style.setProperty("grid-column-start", ""+x);
    dotone.style.setProperty("grid-row-start",""+ y);
}