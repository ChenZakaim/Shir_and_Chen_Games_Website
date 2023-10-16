
let dotone= document.getElementById("dotone").addEventListener("click",go());
let x =Math.floor(math.random()*19+1);
let y= Math.floor(math.random()*19+1);
window.onload=function(){
    dotone.style.setProperty("grid-column-start", ""+x);
    dotone.style.setProperty("grid-row-start",""+ y);
}
function go(){
    shark=dotone[x,y];
    shark.style.height+=5;
    shark.style.width+=5;
     x= Math.floor(math.random()*19+1);
     y= Math.floor(math.random()*19+1);
}  
