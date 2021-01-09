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
function botMove{
    let bot_move = Math.floor(Math.random()*(7+1));
    checkMove(botMove);
}

function checkHorizontal() {

}

makeBoard(board);
/*if if its the player turn & they click on a column then 
check the most bottom slot 
for availibilty. 
color change on the most bottom availible slot for the column  */