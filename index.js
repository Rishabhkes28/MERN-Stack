const boxes =document.querySelectorAll(".box");
const gameInfo =document.querySelectorAll(".game-info");
const newGame =document.querySelectorAll(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
    [0,1,2],
    [4,5,6],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

//let's create a function to initialise the game
function initGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    //Update UI that each boxes is expty and all are clickables
    boxes.forEach(box, index) => {
        // each box is empty
        box.innerText = "";
        boxes[index].Style.pointerEvents ="all";
        //one more thing is missing, initialise box with CSS properties again
    };

    //UI Render
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer ="0";
    }
        else{
            currentPlayer ="X";
        }
    //UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`     
    }
    
    // this function checks the game is over or not

    function checkGameOver() {
        let answer = "";
        winningPosition.forEach(position) => {
            //all 3 boxes are non empty and exactly same in value
            if (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]]) !== ""
                && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]]) {

                
             //check if winner is X
             if(gameGrid[position[0]] === "X")
               answer = "X";
            else{
                answer = "Y";
            }
            
            //disable pointer events
            boxes.forEach((box)) => {
            box.forEach.pointerEvents ="none";
            }
            

            //now we know who is winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
                }
            }
        }
    }


function handleClick{
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].computedStyleMap.pointerEvents ="none";
        //swap karo turn ko
        swapTurn();
        //Check if anyone wins the game or not
        checkGameOver();
    }
}

boxes.forEach(box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
};

newGameBtn.addEventListener("click", initGame); 