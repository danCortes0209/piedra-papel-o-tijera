console.log("holis");

const rockButton = document.getElementById("button-rock"),
    paperButton = document.getElementById("button-paper"),
    scissorButton = document.getElementById("button-scissor"),
    playableThings = ["Piedra","Papel","Tijera"];

const getPCChoice = (choiceArray) => {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

const getDecision = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return console.log("empate") 
    } else {
        if (userChoice === "Piedra" && computerChoice === "Tijera" ) {
            return console.log("ganaste");
        } else if (userChoice === "Papel" && computerChoice === "Piedra" ) {
            return console.log("ganaste");
        } else if (userChoice === "Tijera" && computerChoice === "Papel" ) {
            return console.log("ganaste");
        }
    }
}

const getButton = (computerChoice, choiceArray, comparision, ...buttonsHtml) => {
    buttonsHtml.forEach(buttonHtml => {
        buttonHtml.addEventListener("click", function(){
            return comparision(buttonHtml.innerText, computerChoice(choiceArray));
        });
    })
}




getButton(getPCChoice, playableThings, getDecision, rockButton, paperButton, scissorButton);