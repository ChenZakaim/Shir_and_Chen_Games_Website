const scoreElement =document.querySelector(".score")
const playBoard = document.querySelector(".playboard");
const highScoreElement = document.querySelector(".highscore");
let gameOver =false;
let foodX, foodY;
let snakeX=5, snakeY=10;
let velocityX=0, velocityY=0;
let snakeBody=[];
let setIntervalid;
let score=0;
//getting high score from loal storage 
let highScore =localStorage.getItem("highscore")||0;
highScoreElement.innerHTML = `High Score: ${highScore}`;
JSON.parse(localStorage.getItem("highScore"));
const handleGameOver = ()=>{
    //clearing the timer and reloading the page when game over :)
    clearInterval(setIntervalid);
    gameletOver();
   
  
}

//a function to change the position of the food :)
const changeFoodPosition = () => {
    //a random value for foodX and foodY from 1 to 30 :)
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() *30) + 1;
}
//check what key u press on and change ths direction :)
const changeDirection = e => {
    if (e.key === "ArrowUp" && velocityY !=1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } 
    else if (e.key === "ArrowLeft" && velocityX !=1){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.key === "ArrowRight" && velocityX!= -1) {
        velocityX = 1;
        velocityY = 0;
    }
    initGame();

}

// creating a html tag that contains the food and declare its position :)
const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkUp = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    //checking if the snake eats the food :)
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);//pushing food position to snake body array :)
        score++;// score increase by 1 ;)
        highScore = score >= highScore ? score:highScore ; 
        localStorage.setItem("highscore", highScore)
        scoreElement.innerHTML = `Score: ${score}`;
        highScoreElement.innerHTML = `High Score: ${highScore}`;
    
    }
    
    for (let i=snakeBody.length-1 ; i>0;i--){
        //shifting forward the values of the elements in the snake body by one :)
        snakeBody[i]=snakeBody[i-1]
    }

    snakeBody[0]=[snakeX, snakeY]//sets the first element of the snake's body to the current snake position 
    //updating thesnake's head position based on the current velocity :)
    snakeX+=velocityX;
    snakeY+=velocityY;
    if(snakeX<=0 || snakeX>30 || snakeY<=0 || snakeY>30 ){
        gameOver= true;
    }
    //checking if the snake's head hit his body 
    for (let i =0; i< snakeBody.length;i++){
        //adding a div to each part of the snake's body :) 
        htmlMarkUp += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if(i !==0 && snakeBody[0][1]===snakeBody[i][1] &&snakeBody[0][0]===snakeBody[i][0] ){
            gameOver=true;
        }
    }
    
    playBoard.innerHTML = htmlMarkUp;
}
changeFoodPosition();
setIntervalid=setInterval(initGame,125);
document.addEventListener("keydown", changeDirection);
function reset(){
    clearInterval(setIntervalid);
    location.reload();
    changeFoodPosition();
}
const gameletOver=()=> {
    playBoard.innerHTML = "";
    // playBoard.style.flexDirection = "column";
    playBoard.appendChild(document.createElement("h2"));
    playBoard.firstChild.textContent = "Game over:(";
    playBoard.appendChild(document.createElement("img"));
    playBoard.lastChild.src = "https://media.giphy.com/media/W2EUn7PiV08FH8poky/giphy.gif";
    playBoard.lastChild.id = "gamegif";

    playBoard.appendChild(document.createElement("div"));
    playBoard.lastChild.textContent = "start again";
    playBoard.lastChild.className = "game-button reset";
    playBoard.lastChild.addEventListener("click", () => { location.reload(); });

}