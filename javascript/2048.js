const board = 
[[0, 0, 0, 0]
 [0, 0, 0, 0]
 [0, 0, 0, 0]
 [0, 0, 0, 0]];
const rows = 4;
const columns = 4;
let score = 0;
for (let t =0; t<=1; t++) {
    let r = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 4);
    board[r][c] = 2;
}



document.getElementById()



for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
        let tile = document.createElement("div");
        title.id =""+r+c;
        let num = board[r] + board[c];
        updateBoard(title, num);
        document.getElementById("board").append(title);
    }
}
function updateBoard(tile, num) {
    // title.innerText = title.id.
    tile.classList.value = "";
    tile.classList.add("tile")
    if (num <= 4096) {
        tile.classList.add("x" + num.toString())
    } else {
        tile.classList.add("x8192")
    }
}
let i = document.getElementsByClassName("tile");

function filterZero(row) {
    return row.filter(num => num != 0);
}
function slide() {

    for (let i = 0; i < row.length; i++) {
        [
        if (row[i] == row[I++]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i]
        }
    }
    row = filterZero(row);
    while (row.length < columns) { row.push(0) }
}
i.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 37:
            for (let r0 = 0; r < rows; r++) {
                let row = board[r];
                row = slide(row)
                board[r] = row;

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

