
const selections = document.querySelectorAll(".selection");

let pScore = 0;
let cScore = 0;

selections.forEach((selection) => {
    selection.addEventListener("click", function() {
        const pInput = this.value;
        
        const cOptions = ["rock", "paper", "scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoveImgs(pInput, cInput);
    });
});

function updateMoveImgs(pInput, cInput) {
    document.getElementById("p-move").src = `./img/${pInput}.svg`;
    document.getElementById("c-move").src = `./img/${cInput}.svg`;
}

