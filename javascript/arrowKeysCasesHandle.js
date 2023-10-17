function moveTiles(direction) {
    for (let row = 0; row < BOARD.length; row++) {
        for (let col = 0; col < BOARD[row].length; col++) {
            if (BOARD[row][col] === 0) {
                continue;
            }

            let newRow = row;
            let newCol = col;

            switch (direction) {
                case "up":
                    newRow = findNewPosition(row, col, -1, 0);
                    break;
                case "down":
                    newRow = findNewPosition(row, col, 1, 0);
                    break;
                case "left":
                    newCol = findNewPosition(row, col, 0, -1);
                    break;
                case "right":
                    newCol = findNewPosition(row, col, 0, 1);
                    break;
            }

            if (newRow !== row || newCol !== col) {
                if (BOARD[newRow][newCol] === 0) {
                    BOARD[newRow][newCol] = BOARD[row][col];
                    BOARD[row][col] = 0;
                } else if (BOARD[newRow][newCol] === BOARD[row][col]) {
                    BOARD[newRow][newCol] *= 2;
                    BOARD[row][col] = 0;
                    addToScore(BOARD[newRow][newCol]);
                }
            }
        }
    }
}

function findNewPosition(row, col, dx, dy) {
    while (row + dy >= 0 && row + dy < BOARD.length && col + dx >= 0 && col + dx < BOARD[row].length) {
        if (BOARD[row + dy][col + dx] === 0) {
            row += dy;
            col += dx;
        } else {
            break;
        }
    }
    return row;
}