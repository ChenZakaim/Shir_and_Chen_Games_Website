
const BOARD = createBoard();
updateHtmlBoard(BOARD);

document.getElementById("board").addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            // Arrow up: scan from top to bottom, left to right
            // in this case, the next tile is at BOARD[row+1][col]

            for (let row = 0; row < BOARD.length; row++) {
                for (let col = 0; col < BOARD[row].length; col++) {
                    //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                    while (BOARD[row + 1][col] === 0) {
                        for (let i = row + 1; i < BOARD.length - 1; i++) {
                            BOARD[i][col] = BOARD[i + 1][col];
                        }
                        BOARD[BOARD.length - 1][col] = 0
                    }
                    //if it is a 0 but not last one, move all up
                    if (row < BOARD.length - 1 && BOARD[row][col] === 0) {
                        for (let i = row; i < BOARD.length - 1; i++) {//same "for" as in the "while" above, just starting at current instead of next
                            BOARD[i][col] = BOARD[i + 1][col] || 0;
                        }
                        BOARD[BOARD.length - 1][col] = 0
                        //if there is no 0 in this current one, find out if merge needed with the next one
                    } else if (row < BOARD.length - 1 && BOARD[row][col] === BOARD[row + 1][col]) {
                        BOARD[row][col] += BOARD[row + 1][col];
                        BOARD[row + 1][col] = 0;
                        addToScore(BOARD[row][col]);
                    }
                }
            }
            break;
        case "ArrowDown":
            // Arrow down: scan from bottom to top, left to right
            // in this case, the next tile is at BOARD[row-1][col]
            for (let row = BOARD.length - 1; row >= 0; row--) {
                for (let col = 0; col < BOARD[row].length; col++) {

                    for (let i = row - 1; i >= 0; i--) {
                        //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                        while (BOARD[row - 1][col] === 0) {
                            for (let i = row - 1; i >= 1; i--) {
                                BOARD[i][col] = BOARD[i - 1][col];
                            }
                            BOARD[0][col] = 0;
                        }
                        //if it is a 0 but not last one, move all down
                        if (row > 0 && BOARD[row][col] === 0) {
                            for (let i = row; i >= 1; i--) {
                                BOARD[i][col] = BOARD[i - 1][col] || 0;
                            }
                            BOARD[0][col] = 0;

                            //if there is no 0 in this current one, find out if merge needed with the next one
                        } else if (row > 0 && BOARD[row][col] === BOARD[row - 1][col]) {
                            BOARD[row][col] += BOARD[row - 1][col];
                            BOARD[row - 1][col] = 0;
                            addToScore(BOARD[row][col]);
                        }
                    }
                }
            }
            break;
        case "ArrowLeft":
            // Arrow left: scan from top to bottom, left to right
            // in this case, the next tile is at BOARD[row][col+1]
            for (let row = 0; row < BOARD.length; row++) {
                for (let col = 0; col < BOARD[row].length; col++) {
                    //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                    while (BOARD[row][col + 1] === 0) {
                        for (let i = col + 1; i < BOARD[row].length - 1; i++) {
                            BOARD[row][i] = BOARD[row][i + 1];
                        }
                        BOARD[row][BOARD[row].length - 1] = 0
                    }
                    //if it is a 0 but not last one, move all left
                    if (col < BOARD[row].length - 1 && BOARD[row][col] === 0) {
                        for (let i = col; i < BOARD[row].length - 1; i++) {
                            BOARD[row][i] = BOARD[row][i + 1];
                        }
                        BOARD[row][BOARD[row].length - 1] = 0
                        //if there is no 0 in this current one, find out if merge needed with the next one
                    } else if (col < BOARD[row].length - 1 && BOARD[row][col] === BOARD[row][col + 1]) {
                        BOARD[row][col] += BOARD[row][col + 1];
                        BOARD[row][col + 1] = 0;
                        addToScore(BOARD[row][col]);
                    }
                }
            }
            break;
        case "ArrowRight":
            // Arrow right: scan from top to bottom, right to left
            // in this case, the next tile is at BOARD[row][col-1]

            for (let row = 0; row < BOARD.length; row++) {
                for (let col = BOARD[row].length - 1; col >= 0; col--) {
                    //eliminate all next 0s if the next one is 0 - brings the next number close if exists
                    while (BOARD[row][col - 1] === 0) {
                        if (col > 0 && BOARD[row][col] === 0) {
                            console.log('BOARD[row][col]: ', BOARD[row][col]);
                            for (let i = col - 1; i >= 1; i--) {
                                BOARD[row][i] = BOARD[row][i - 1];
                            }
                            BOARD[row][0] = 0;
                        }
                    }
                    //if it is a 0 but not last one, move all right
                    if (col > 0 && BOARD[row][col] === 0) {
                        for (let i = col; i >= 1; i--) {
                            BOARD[row][i] = BOARD[row][i - 1];
                        }
                        BOARD[row][0] = 0;

                        //if there is no 0 in this current one, find out if merge needed with the next one
                    } else if (col > 0 && BOARD[row][col] === BOARD[row][col - 1]) {
                        BOARD[row][col] += BOARD[row][col - 1];
                        BOARD[row][col - 1] = 0;
                        addToScore(BOARD[row][col]);
                    }
                }
            }
            break;
        default:
    }
    updateHtmlBoard(BOARD);
});


function createBoard() {
    const board =
        [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
    for (let t = 0; t <= 1; t++) {
        let r, c;
        do {
            r = Math.floor(Math.random() * 4);
            c = Math.floor(Math.random() * 4);
        } while (board[r][c] !== 0);
        board[r][c] = 2;

    }
    console.log('board: ', board);
    return board;
}


function updateHtmlBoard(arrBoard) {
    const HTML_BOARD = document.getElementById("board");
    console.dir(HTML_BOARD);

    let isEmpty = (HTML_BOARD.firstChild === null);
    let tile;
    for (let row = 0; row < arrBoard.length; row++) {
        for (let col = 0; col < arrBoard[row].length; col++) {
            console.log('isEmpty: ', isEmpty);
            if (isEmpty) {
                tile = document.createElement("div");
                console.log('tile: ', tile);
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
    const HTML_SCORE_SPAN = document.getElementById("score");
    let score = parseInt(localStorage.getItem("scoreLastGame2048")) || 0;
    let bestScore = parseInt(localStorage.getItem("bestScore2048")) || 0;

    score += num;
    HTML_SCORE_SPAN.textContent = score;

    if (!isNaN(score)) {
        localStorage.setItem("scoreLastGame2048", score);
    }

    if (!isNaN(bestScore) && score > bestScore) {
        localStorage.setItem("bestScore2048", score);
    }
}


