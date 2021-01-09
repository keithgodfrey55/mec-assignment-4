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
            console.log(document.getElementById(`slot${i}-${x}`));
        }

    }
}

function checkMove(y) {
    console.log('inside function');
    for (let x = 6; x >= 0; x--) {
        console.log('inside loop');
        if (document.getElementById(`slot${x}-${y}`).style.backgroundColor == "white") {
            console.log('inside if');
            if (playerMove === true) {
                document.getElementById(`slot${x}-${y}`).style.backgroundColor = "red";
                console.log(x);
                playerMove = false;
                board[x][y] = "red"
                break;
            } else {
                document.getElementById(`slot${x}-${y}`).style.backgroundColor = "blue";
                console.log(x);
                playerMove = true;
                board[x][y] = "blue"
                break;
            }

        }
    }

}
<<<<<<< HEAD
function botMove(){
    let bot_move = Math.floor(Math.random()*(7+1));
    checkMove(botMove);
}
=======
>>>>>>> JS updated

function checkHorizontal() {
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] == board[i][j + 1]) && (board[i][j] == board[i][j + 2]) && (board[i][j] == board[i][j + 3])) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "red") {
                    console.log("Player Wins")
                    wins += 1;
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "blue") {
                    console.log("AI Wins")
                    losses += 1;
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
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "red") {
                    console.log("Player Wins")
                    wins += 1;
                    return true;
                } else if (document.getElementById(`slot${i}-${j}`).style.backgroundColor = "blue") {
                    console.log("AI Wins")
                    losses += 1;
                    return true;
                }
            }
        }
    }
}

makeBoard(board);
/*if if its the player turn & they click on a column then 
check the most bottom slot 
for availibilty. 
color change on the most bottom availible slot for the column  */