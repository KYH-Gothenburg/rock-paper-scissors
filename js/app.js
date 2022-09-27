
const selections = document.querySelectorAll(".selection");

let pScore = 0;
let cScore = 0;

selections.forEach((selection) => {
    selection.addEventListener("click", function() {
        const pInput = parseInt(this.value);
        
        const cInput = Math.floor(Math.random() * 3);

        updateMoveImgs(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWin()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function updateMoveImgs(pInput, cInput) {
    document.getElementById("p-move").src = `./img/${pInput}.svg`;
    document.getElementById("c-move").src = `./img/${cInput}.svg`;
}

function compareInputs(pInput, cInput) {
    if(pInput === cInput) { 
        document.getElementById("result-text").innerHTML = "It is a tie!";
        return;
    }

    if((pInput + 1) % 3 === cInput) {
        document.getElementById("result-text").innerHTML = "Computer win!";
        cScore++;
    }
    else {
        document.getElementById("result-text").innerHTML = "You win!";
        pScore++;
    }
}

function updateScore() {
    document.getElementById("p-score").innerHTML = pScore;
    document.getElementById("c-score").innerHTML = cScore;
}


function checkWin() {
    if(pScore === 5 || cScore === 5) {
        const winner = pScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game. Better luck next time";
        document.getElementById("result-text").innerHTML = winner;
        return true;
    }
    return false;
}