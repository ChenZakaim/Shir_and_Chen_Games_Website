
let board = createBoard();
updateHtmlBoard(board);

document.getElementById("board").addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            //arrow up: scan from top to buttom, left to roght
            for (let row = 0; row < arrBoard.length; row++) {
                for (let col = 0; col < arrBoard[row].length; col++) {
                    if (board[row][col] === 0) {
                        for (let i = row + 1; i < board.length; i++) {
                            board[i-1][col] = board[i][col];
                        }
                    }
                    else if (board[row][col] === board[row + 1][col]){
                        board[row][col] += board[row + 1][col];
                        board[row + 1][col] = 0;
                        addToScore(board[row][col]);
                    }                 
                }
            }
updateHtmlBoard(board);








            break;
        case "ArrowDown":
            break;
        case "ArrowLeft":
            break;
        case "ArrowRight":
            break;
    }
    updateHtmlBoard(arrBoard);
});

function createBoard() {
    const board =
        [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
    for (let t = 0; t <= 1; t++) {
        let r = Math.floor(Math.random() * 4);
        let c = Math.floor(Math.random() * 4);
        board[r][c] = 2;
    }
    console.log('board: ', board);
    return board;
}


function updateHtmlBoard(arrBoard) {
    let htmlBoard = document.getElementById("board");

    let isEmpty = !htmlBoard.hasChildNodes()
    for (let row = 0; row < arrBoard.length; row++) {
        for (let col = 0; col < arrBoard[row].length; col++) {
            console.log('isEmpty: ', isEmpty);
            if (isEmpty) {
                let tile = document.createElement("div");
                tile.id = "" + row + col;
                htmlBoard.append(tile);
            }
            else {
                let tile = document.getElementById(""+row+col);    
            }
            tile.className = "tile x" + arrBoard[row][col];
            tile.textContent = arrBoard[row][col];
        }
    }
}

function addToScore(num) {
    const htmlScore = getElementById("score");
    let score = parseInt(JSON.parse(localStorage.getItem("scoreLastGame2048"))) || 0;
    let bestScore = parseInt(JSON.parse(localStorage.getItem("bestScore2048"))) || 0;

    score += num;
    htmlScore.textContent = score;

    if (score > bestScore) {
        localStorage.setItem("bestScoreGame2048", score);
    }
    localStorage.setItem("scoreLastGame2048", score);
}

