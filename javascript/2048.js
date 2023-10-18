const HTML_BOARD = document.getElementById("board");
const USERS = JSON.parse(localStorage.getItem("users"))
currentUser = JSON.parse(localStorage.getItem("currentUser"));
let hitRecord = false;

let board = createBoard();
updateHtmlBoard(board);

function reset(HTML_BOARD) {
    HTML_BOARD.style.flexDirection = "row";
    HTML_BOARD.focus();
    board = createBoard();
    updateHtmlBoard(board);
}
document.getElementById("reset").addEventListener("click", () => { reset(HTML_BOARD) });
document.getElementById("board").addEventListener("click", () => { document.body.style.overflow = "Hidden"; HTML_BOARD.focus(); })
document.getElementById("board").addEventListener("keydown", (event) => {
    HTML_BOARD.focus();
    switch (event.key) {
        case "ArrowUp":
            // Arrow up: scan from top to bottom, left to right
            // in this case, the next tile is at BOARD[row+1][col]

            for (let row = 0; row < board.length; row++) {
                for (let col = 0; col < board[row].length; col++) {
                    for (let i = row + 1; i < board.length; i++) {

                        //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                        let nextR = row + 1;

                        while (nextR < board.length && nextR > 0 && board[nextR][col] === 0) {
                            for (let i = nextR; i < board.length - 1; i++) {
                                board[i][col] = board[i + 1][col];
                            }
                            board[board.length - 1][col] = 0
                            nextR++;
                        }
                        //if it is a 0 but not last one, move all up
                        if (row < board.length - 1 && board[row][col] === 0) {
                            for (let i = row; i < board.length - 1; i++) {//same "for" as in the "while" above, just starting at current instead of next
                                board[i][col] = board[i + 1][col] || 0;
                            }
                            board[board.length - 1][col] = 0
                            //if there is no 0 in this current one, find out if merge needed with the next one
                        } else if (row < board.length - 1 && board[row][col] === board[row + 1][col]) {
                            board[row][col] += board[row + 1][col];
                            board[row + 1][col] = 0;
                            addToScore(board[row][col]);
                        }
                    }
                }
            }
            break;
        case "ArrowDown":
            // Arrow down: scan from bottom to top, left to right
            // in this case, the next tile is at BOARD[row-1][col]
            for (let row = board.length - 1; row >= 0; row--) {
                for (let col = 0; col < board[row].length; col++) {
                    for (let i = row - 1; i >= 0; i--) {

                        //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                        let nextR = row - 1;
                        while (nextR < board.length && nextR > 0 && board[nextR][col] === 0) {
                            for (let i = nextR; i >= 1; i--) {
                                board[i][col] = board[i - 1][col];
                            }
                            board[0][col] = 0;
                            nextR--;
                        }
                        //if it is a 0 but not last one, move all down
                        if (row > 0 && board[row][col] === 0) {
                            for (let i = row; i >= 1; i--) {
                                board[i][col] = board[i - 1][col] || 0;
                            }
                            board[0][col] = 0;

                            //if there is no 0 in this current one, find out if merge needed with the next one
                        } else if (row > 0 && board[row][col] === board[row - 1][col]) {
                            board[row][col] += board[row - 1][col];
                            board[row - 1][col] = 0;
                            addToScore(board[row][col]);
                        }
                    }
                }
            }
            break;
        case "ArrowLeft":
            // Arrow left: scan from top to bottom, left to right
            // in this case, the next tile is at BOARD[row][col+1]
            for (let row = 0; row < board.length; row++) {
                for (let col = 0; col < board[row].length; col++) {
                    for (let i = col + 1; i < board[row].length; i++) {

                        //eliminate all next 0s if the next one is 0 - brings the next number close if exists

                        let nextC = col + 1;
                        while (nextC < board.length && nextC > 0 && board[row][nextC] === 0) {
                            for (let i = nextC; i < board[row].length - 1; i++) {
                                board[row][i] = board[row][i + 1];
                            }
                            board[row][board[row].length - 1] = 0
                            nextC++;
                        }

                        //if it is a 0 but not last one, move all left
                        if (col < board[row].length - 1 && board[row][col] === 0) {
                            for (let i = col; i < board[row].length - 1; i++) {
                                board[row][i] = board[row][i + 1];
                            }
                            board[row][board[row].length - 1] = 0
                            //if there is no 0 in this current one, find out if merge needed with the next one
                        } else if (col < board[row].length - 1 && board[row][col] === board[row][col + 1]) {
                            board[row][col] += board[row][col + 1];
                            board[row][col + 1] = 0;
                            addToScore(board[row][col]);
                        }
                    }
                }
            }
            break;
        case "ArrowRight":
            // Arrow right: scan from top to bottom, right to left
            // in this case, the next tile is at BOARD[row][col-1]

            for (let row = 0; row < board.length; row++) {
                for (let col = board[row].length - 1; col >= 0; col--) {
                    for (let i = col - 1; i >= 0; i--) {
                        //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                        let nextC = col - 1;
                        while (nextC < board.length && nextC > 0 && board[row][nextC] === 0) {
                            for (let i = nextC; i >= 1; i--) {
                                board[row][i] = board[row][i - 1];
                            }
                            board[row][0] = 0;
                            nextC--;
                        }
                        //if it is a 0 but not last one, move all right
                        if (col > 0 && board[row][col] === 0) {
                            for (let i = col; i >= 1; i--) {
                                board[row][i] = board[row][i - 1];
                            }
                            board[row][0] = 0;

                            //if there is no 0 in this current one, find out if merge needed with the next one
                        } else if (col > 0 && board[row][col] === board[row][col - 1]) {
                            board[row][col] += board[row][col - 1];
                            board[row][col - 1] = 0;
                            addToScore(board[row][col]);
                        }
                    }
                }
            }
            break;
        default:
    }
    updateHtmlBoard(board);
    add2randomly(board);
});

function createBoard() {
    currentUser.scoreLastGame2048 = 0;
    HTML_BOARD.innerHTML = "";
    localStorage.setItem("currentUser", currentUser);
    addToScore(0);
    const board =
        [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
    for (let t = 0; t <= 1; t++) {
        let r, c;
        r = Math.floor(Math.random() * 4);
        c = Math.floor(Math.random() * 4);
        board[r][c] = 2;

    }
    return board;
}

function updateHtmlBoard(arrBoard) {

    let isEmpty = (HTML_BOARD.firstChild === null);
    let tile;
    for (let row = 0; row < arrBoard.length; row++) {
        for (let col = 0; col < arrBoard[row].length; col++) {
            if (isEmpty) {
                tile = document.createElement("div");
                tile.id = "" + row + col;
                HTML_BOARD.append(tile);
            }
            else {
                tile = document.getElementById("" + row + col);
            }
            tile.className = "tile x" + arrBoard[row][col];
            tile.textContent = arrBoard[row][col];

        }
    }
}

function addToScore(num) {
    const HTML_SCORE_DIV = document.getElementById("score");
    const HTML_BEST_SCORE_DIV = document.getElementById("best-score");

    let score = currentUser.scoreLastGame2048 || 0;
    let bestScore = currentUser.bestScoreGame2048 || 0;

    score += num;
    currentUser.scoreLastGame2048 = score;

    if (!isNaN(bestScore) && !isNaN(score) && score >= bestScore) {
        currentUser.bestScoreGame2048 = score;
        bestScore = score;
        hitRecord = true;
    }
    if (!isNaN(score)) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        USERS[currentUser.userNum] = currentUser;
        localStorage.setItem("users", JSON.stringify(USERS));
    }

    HTML_SCORE_DIV.textContent = "Score: \n" + score;
    HTML_BEST_SCORE_DIV.textContent = "Best Score: \n" + bestScore;

}
function add2randomly(board) {
    num = Math.floor(Math.random() * 4);
    num2 = Math.floor(Math.random() * 4);
    if (board[num][num2] === 0) {
        board[num][num2] = 2;
    }
    else {
        if (document.getElementsByClassName("x0").length === 0) {
            gameOver();
        }
        else {
            let arrNum = -1;//! delete if not used
            let index = -1;
            for (const arr of board) {
                if (index !== -1) {
                    break;

                }
                index = arr.indexOf(0);
            }
        }
    }
}


function gameOver() {
    HTML_BOARD.innerHTML = "";
    HTML_BOARD.style.flexDirection = "column";
    HTML_BOARD.appendChild(document.createElement("h2"));
    HTML_BOARD.firstChild.textContent = "Game over:(";
    HTML_BOARD.appendChild(document.createElement("img"));

    if (hitRecord) {
        HTML_BOARD.lastChild.src = "https://media.giphy.com/media/SvctpQCJmlG9ccyZMh/giphy.gif";
        HTML_BOARD.firstChild.innerHTML += "<h2>new record!<h2/>"
    }
    else {
        HTML_BOARD.lastChild.src = "https://media.giphy.com/media/W2EUn7PiV08FH8poky/giphy.gif";
    }

    HTML_BOARD.lastChild.id = "game-over-gif";

    HTML_BOARD.appendChild(document.createElement("div"));
    HTML_BOARD.lastChild.textContent = "start again";
    HTML_BOARD.lastChild.className = "game-button reset";
    HTML_BOARD.lastChild.addEventListener("click", () => { reset(HTML_BOARD); });

}
