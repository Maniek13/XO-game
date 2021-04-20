var player = 1;
var wyniki = [0,0,0,0,0,0,0,0,0];


function game(){
    let board = document.getElementById("game_board");

    for(var i = 0; i<9; ++i){
    let field = document.createElement("button");
    field.classList.add("fields");
    field.id = i;
    field.disabled = true;
    field.onclick = status;
    board.appendChild(field);
    }
}
    
function start_game(){
    player = 1;
    wyniki = [0,0,0,0,0,0,0,0,0];

    let board = document.getElementById("game_board");

    for(var i = 0; i<board.childNodes.length; ++i){
        board.childNodes[i].disabled = false;
        board.childNodes[i].innerText = "-";
        document.getElementById("score_board").innerText = "Player 1 (circle), click to make field to yours";
    }   
}

function status(){
    let id = this.id;
    let field = document.getElementById(id);

    if(player == 1){
        field.innerText = "o";
        wyniki[id] = 1;
        player += 1;
        document.getElementById("score_board").innerText = "Player 2 (ex), click to make field to yours";
    }
    else{
        field.innerText = "x";
        wyniki[id] = 2;
        player -= 1;
        document.getElementById("score_board").innerText = "Player 1 (circle), click to make field to yours";
    }
    field.disabled = true;
    wygrana();
}

function wygrana(){
    if((wyniki[0] == wyniki[1] && wyniki[1] == wyniki[2] && wyniki[2] !== 0) || (wyniki[3] == wyniki[4] && wyniki[4] == wyniki[5] && wyniki[5] !== 0) || (wyniki[6] == wyniki[7] && wyniki[7] == wyniki[8] && wyniki[8] !== 0) ||
    (wyniki[0] == wyniki[3] && wyniki[3] == wyniki[6] && wyniki[6] !== 0) || (wyniki[1] == wyniki[4] && wyniki[4] == wyniki[7] && wyniki[7] !== 0) || (wyniki[2] == wyniki[5] && wyniki[5] == wyniki[8] && wyniki[8] !== 0) ||
    (wyniki[0] == wyniki[4] && wyniki[4] == wyniki[8] && wyniki[8] !== 0) || (wyniki[2] == wyniki[4] && wyniki[4] == wyniki[6] && wyniki[6] !== 0)){

        if(player == 1){
            player = 2;
        }
        else{
            player = 1;
        }

        document.getElementById("score_board").innerText = "Congratulations. Winer is player nr.: " + player;

        let board = document.getElementById("game_board");

        for(var i = 0; i<board.childNodes.length; ++i){
            board.childNodes[i].disabled = true;
        }
    }
    else if(!wyniki.includes(0)){
        document.getElementById("score_board").innerText = "Draw";
    } 
}

