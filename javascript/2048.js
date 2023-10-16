let board;
let rows=4;
let columns=4;
let score=0 ;
window.onload()=function(){
  game();
}
function game(){
    board=[[0, 0, 0, 0]
    [0, 0, 0, 0]
    [0, 0, 0, 0]
    [0, 0, 0, 0]]
}
    for(let r=0;r<rows;r++){
        for(let c=0;  c<columns;c++){
           let title = document.createElement("div");
           title.id=board[r].toString()+board[c].toString();
           let num =board[r]+board[c];
           updateBoard(title, num);
           document.getElementById("board").append(title);
        }
        }
function updateBoard(title,num){
    title.innerText="";
    title.classList.value="";
    title.classList.add("title")
         if(num<=4096){
            title.classList.add("x"+num.toString())
         }else {
            title.classList.add("x8192")
         }
        }
let i=document.getElementsByClassName("title");

function filterZero(row){
    return row.filter(num=> num !=0);
}
function slide(){

    for(let i=0; i<row.length;i++){[
        if(row[i]==row[I++])
        {
            row[i]*=2;
            row[i+1]=0;
            score+=row[i]
        }
    }
    row=filterZero(row);
    while(row.length<columns){row.push(0)}
}
i.addEventListener("keyup", function(event){
    switch (event.keyCode)
    {
        case 37: 
        for(let r0=0; r<rows; r++){
            let row =board[r];
            row=slide(row)
            board[r]=row;

                }
            }
        }

        break;
    }
    case 38: 
    break;
    case 39: 
    break;
    case 40: 
    break;
})

