let board = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
];

function makeBoard(board) {
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 6; x++) {
            let a = board[i][x];
            console.log(a);
        }

    }
}

function playerTurn() {
    document.getElementById("slot0-0").style.backgroundColor = "red";
}