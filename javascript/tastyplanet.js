//! ctrl+shift+i 
//! delete these comments when done 
//! if you have changed names of variables here that are used in js/css/html files don't forget to change there as well 
//! dont leave too much empty lines. 
//! press ctrl+f on keyboard and type //! to find all comments in this file 
//! delete console.logs when finished
//! well done! 
//! good luck!

//! try to use const
let grid= document.getElementById("grid-container").addEventListener("click",go());
let fish= document.getElementsById("fish1").addEventListener("click",go());


window.onload=function (){
   alert("hi");
}
function start(){

let x=Math.floor(math.random()*19+1);
let y= Math.floor(math.random()*19+1);
    fish.style.setProperty("top", x+"px");
    fish.style.setProperty("left",y+"px");
    console.log(x, y);
    alert(x, y);
}
start();
function go(){
    let shark =document.getElementById("shark");
    shark.style.height+=5;
    shark.style.width+=5;
     x= Math.floor(math.random()*19+1);
     y= Math.floor(math.random()*19+1);
     set(x,y);
}  

function set (x, y){
    fish.style.setProperty("top", x+"px");
    fish.style.setProperty("left",y +"px");
}