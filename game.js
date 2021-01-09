let board = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
];
let playerMove = true;
let wins = 0;
let losses = 0;
let ties = 0;

function makeBoard(board) {
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 6; x++) {
            document.getElementById(`slot${i}-${x}`).style.backgroundColor = "white";
        }

    }
}

function checkHorizontal() {
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] == board[i][j + 1]) && (board[i][j] == board[i][j + 2]) && (board[i][j] == board[i][j + 3])) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "red") {
                    console.log("Player Wins")
                    wins += 1;
                    alert("Player Wins")
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "blue") {
                    console.log("AI Wins")
                    losses += 1;
                    alert("AI Wins")
                    return true;
                }
            }
        }
    }
}

function checkVertical() {
    for (let j = 6; j > 0; j--) {
        for (let i = 0; i < 3; i++) {
            if ((board[i][j] == board[i][j + 1]) && (board[i][j] == board[i][j + 2]) && (board[i][j] == board[i][j + 3])) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    console.log("Player Wins")
                    wins += 1;
                    alert("Player Wins")
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                    losses += 1;
                    alert("AI Wins")
                    return true;
                }
            }
        }
    }
}

function checkDiagonalRight() {
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] == board[i-1][j+1]) && (board[i][j] == board[i-2][j+2]) && (board[i][j] == board[i-3][j+3])) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    alert("Player Wins")
                    wins += 1;
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                    alert("AI Wins")
                    losses += 1;
                    return true;
                }
            }
        }
    }
}

function checkDiagonalLeft() {
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] == board[i-1][j-1]) && (board[i][j] == board[i-2][j-2]) && (board[i][j] == board[i-3][j-3])) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    wins += 1;
                    console.log("Player Wins")
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "blue") {
                    console.log("AI Wins")
                    losses += 1;
                    console.log("AI Wins")
                    return true;
                }
            }
        }
    }
}
function checkMove(y) {
    for (let x = 6; x >= 0; x--) {
        if (document.getElementById(`slot${x}-${y}`).style.backgroundColor == "white") {
            if (playerMove === true) {
                document.getElementById(`slot${x}-${y}`).style.backgroundColor = "red";
                // checkVertical();
                playerMove = false;
                board[x][y] = "red"
                break;
            } else {
                document.getElementById(`slot${x}-${y}`).style.backgroundColor = "blue";
                playerMove = true;
                board[x][y] = "blue"
                break;
            }

        }
    }

}

function reset(){
    makeBoard(board);
    playerMove = true;
}

function botMove(){
    let bot_move = Math.floor(Math.random()*(7+1));
    checkMove(bot_move);
}

function move(select){
        checkMove(select);
}

makeBoard(board);
/*if if its the player turn & they click on a column then 
check the most bottom slot 
for availibilty. 
color change on the most bottom availible slot for the column  */