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
let ties = 1;
let whites = 42;

function makeBoard(board) {
    for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 6; x++) {
            document.getElementById(`slot${i}-${x}`).style.backgroundColor = "white";
            board[i][x] = "white";
        }

    }
}

function reset() {
    makeBoard(board);
    playerMove = true;
}

function tie(){
    if(whites==0){
        document.getElementById("tie").innerHTML = "Ties: " + ties;
        ties+=1;
        alert("Its a Tie!");
        reset()
    }
}
function checkHorizontal() {
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] === "red") && (board[i][j + 1] === "red") && (board[i][j + 2] === "red") && (board[i][j + 3] === "red")) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    console.log("Player Wins")
                    wins += 1;
                    alert("Player Wins")
                    reset()
                    document.getElementById("win").innerHTML = "Wins: " + wins;
                    // return true;
                    console.log('this was a horizontal win')
                }

            } else if ((board[i][j] === "blue") && (board[i][j + 1] === "blue") && (board[i][j + 2] === "blue") && (board[i][j + 3] === "blue")) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                    console.log("AI Wins")
                    losses += 1;
                    alert("AI Wins")
                    reset()
                    document.getElementById("lose").innerHTML = "Losses: " + losses;
                    // return true;
                    console.log('this was a horizontal win')
                }
            }
        }
    }
}

function checkVertical() {
    for (let i = 6; i > 3; i--) {
        for (let j = 0; j < 6; j++) {
            if ((board[i][j] === "red") && (board[i - 1][j] === "red") && (board[i - 2][j] === "red") && (board[i - 3][j] === "red")) {
                // if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    console.log("Player Wins")
                    wins += 1;
                    alert("Player Wins")
                    reset()
                    document.getElementById("win").innerHTML = "Wins: " + wins;
                    console.log('this was a vertical win')
                    // return true;
                // }
            } else if ((board[i][j] === "blue") && (board[i - 1][j] === "blue") && (board[i - 2][j] === "blue") && (board[i - 3][j] === "blue")) {
                // if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                    losses += 1;
                    alert("AI Wins")
                    reset()
                    document.getElementById("lose").innerHTML = "Losses: " + losses;
                    console.log('this was a vertical win')
                    // return true;
                // }
            }
        }
    }
}



function checkDiagonalRight() {
    for (let i = 6; i > 3; i--) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] == "red") && (board[i - 1][j + 1] == "red") && (board[i - 2][j + 2] == "red") && (board[i - 3][j + 3] == "red")) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    wins += 1;
                    alert("Player Wins")
                    reset()
                    document.getElementById("win").innerHTML = "Wins: " + wins;
                    // return true;
                    console.log('this was a diagonal right win')
                }
            } else if ((board[i][j] == "blue") && (board[i - 1][j + 1] == "blue") && (board[i - 2][j + 2] == "blue") && (board[i - 3][j + 3] == "blue")) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                    losses += 1;
                    alert("AI Wins")
                    reset()
                    document.getElementById("lose").innerHTML = "Losses: " + losses;
                    // return true;
                    console.log('this was a diagonal right win')
                }
            }
        }
    }
}

function checkDiagonalLeft() {
    for (let i = 6; i > 3; i--) {
        for (let j = 5; j >= 3; j--) {
            if ((board[i][j] == "red") && (board[i - 1][j - 1] == "red") && (board[i - 2][j - 2] == "red") && (board[i - 3][j - 3] == "red")) {
                if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "red") {
                    wins += 1;
                    alert("Player Wins")
                    reset()
                    document.getElementById("win").innerHTML = "Wins: " + wins;
                    // return true;
                    console.log('this was a diagonal left win')
                }
                } else if ((board[i][j] == "blue") && (board[i - 1][j - 1] == "blue") && (board[i - 2][j - 2] == "blue") && (board[i - 3][j - 3] == "blue")) {
                    if (document.getElementById(`slot${i}-${j}`).style.backgroundColor === "blue") {
                        losses += 1;
                        alert("AI Wins")
                        reset()
                        document.getElementById("lose").innerHTML = "Losses: " + losses;
                        console.log('this was a diagonal left win')
                        // return true;
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
                board[x][y] = "red";
                whites-=1;
                break;
            } else {
                document.getElementById(`slot${x}-${y}`).style.backgroundColor = "blue";
                playerMove = true;
                board[x][y] = "blue";
                whites-=1;
                break;
            }

        }
    }

}
// makeBoard(board);


function botMove() {
    let bot_move = Math.floor(Math.random() * 6);
    let condition = true;
    while(condition){
            if(board[0][bot_move]=="white"){
                checkMove(bot_move);
                condition=false; 
                }
            else{
                bot_move = Math.floor(Math.random() * 6);
                 
        }
    }
    
}

function move(select) {
    checkMove(select);
    botMove();
    tie();
    checkHorizontal();
    checkVertical();
    checkDiagonalRight();
    checkDiagonalLeft();
    

}

makeBoard(board);
/*if if its the player turn & they click on a column then 
check the most bottom slot 
for availibilty. 
color change on the most bottom availible slot for the column  */