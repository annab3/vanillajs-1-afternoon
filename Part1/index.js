let arr = [];
let xMoves = [];
let oMoves =[];
let moves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function reset() {
    for(let k = 0; k < 9; k++) {
        let board = document.getElementById(k);
        board.innerText = "";
        xMoves = [];
        oMoves = [];
        arr = [];
    }
}

function checkWinner(arrMoves) { 
       for (let i = 0; i < moves.length; i++){
           let j = 0;
           if(arrMoves.includes(moves[i][j])) {
                j++;
                if(arrMoves.includes(moves[i][j])) {
                    j++;
                    if(arrMoves.includes(moves[i][j])) {
                        alert(player.innerText + " won!");
                        reset();
                    }
                    else {
                        j = 0;
                    }
                }
                else {
                    j = 0;
                }
           }
        }
        if (arr.length === 9) {
            alert("CAT has won the game!")
            reset();
        }
        
}
        
function play (location) {
    let player = document.getElementById("player");
    let square = document.getElementById(location);
    if (square.innerText === "") {
        square.innerText = player.innerText;
    
    arr.push(player.innerText);
    
    if(player.innerText === "O") {
        oMoves.push(location);
    }
    else if(player.innerText === "X") {
        xMoves.push(location);
    }

    checkWinner(xMoves);
    checkWinner(oMoves);

    console.log(arr);

    if (player.innerText === "O") {
        player.innerText = "X";
    }
    else if (player.innerText === "X") {
        player.innerText = "O";
    }
    }
    else{
        alert("Try again");
        return
    }
}