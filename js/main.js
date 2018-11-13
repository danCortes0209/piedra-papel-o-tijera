//obtiene los botones, mas un arreglo con las posibles decisiones 
const rockButton = document.getElementById("button-rock"),
    paperButton = document.getElementById("button-paper"),
    scissorButton = document.getElementById("button-scissor"),
    gameResultsContainer = document.getElementById("game-results"),
    userScoreContainer = document.getElementById("user-score"),
    pcScoreContainer = document.getElementById("pc-score"),
    playableThings = ["Piedra","Papel","Tijera"];

let decisionRes = "Empate :/",
    userScore = 0, 
    pcScore = 0;

//Mostrar score en la tabla de puntuaciones
const displayScore = (userScore, pcScore, userScoreContainer, pcScoreContainer) => {
    return (
        userScoreContainer.innerText = userScore,
        pcScoreContainer.innerText = pcScore
    );
}

//llena el contenedor con la decision del juego
const displayDesicion = (userChoice, computerChoice, result, decisionContainer) => {
    return decisionContainer.innerHTML = `<b>Elegiste: <span class="${userChoice.toLowerCase()}">${userChoice}</span><br> La PC eligió: <span class="${computerChoice.toLowerCase()}">${computerChoice}</span><br> ${result}`
}
//Obtiene una de las posibles decisiones en base al arreglo, usando un numero aleatorio que no sobrepase la cantidad de indices del arreglo
const getPCChoice = (choiceArray) => {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Obtiene una decision en base a las elecciones del usuario y de la maquina
const getDecision = (userChoice, computerChoice, decisionResult, displayResult, decisionContainer, displayScore, userScore, pcScore, userScoreContainer, pcScoreContainer) => {
    //modifica el mensaje en base a las opciones
    if(userChoice === computerChoice) {
        decisionResult = "Empate :/";
    } else {
        if (userChoice === "Piedra" && computerChoice === "Tijera" ) {
            decisionResult = "Ganaste :D";
            userScore += 1;
        } else if (userChoice === "Papel" && computerChoice === "Piedra" ) {
            decisionResult = "Ganaste :D";
            userScore += 1;
        } else if (userChoice === "Tijera" && computerChoice === "Papel" ) {
            decisionResult = "Ganaste :D";
            userScore += 1;
        } else if (userChoice === "Tijera" && computerChoice === "Piedra" ) {
            decisionResult = "Perdiste :c";
            pcScore += 1;
        } else if (userChoice === "Papel" && computerChoice === "Tijera" ) {
            decisionResult = "Perdiste :c";
            pcScore += 1;
        } else if (userChoice === "Piedra" && computerChoice === "Papel" ) {
            decisionResult = "Perdiste :c";
            pcScore += 1;
        }
    }
    return (
        displayResult(userChoice, computerChoice, decisionResult, decisionContainer),
        displayScore(userScore, pcScore, userScoreContainer, pcScoreContainer)
    )
}

//al darle click a los botones, ejecuta todas las demas funciones dentro de si.
const getButton = (computerChoice, choiceArray, getDecision, displayRes, displayScore, decisionContainer, decisionResult, userScore, pcScore, userScoreContainer, pcScoreContainer, ...buttonsHtml) => {
    buttonsHtml.forEach(buttonHtml => {
        buttonHtml.addEventListener("click", function(){
            return getDecision(buttonHtml.innerText, computerChoice(choiceArray), decisionResult, displayRes, decisionContainer, displayScore, userScore, pcScore, userScoreContainer, pcScoreContainer);
        });
    })
}

//elecuta la funcion
getButton(getPCChoice, playableThings, getDecision, displayDesicion, displayScore, gameResultsContainer, decisionRes, userScore, pcScore, userScoreContainer, pcScoreContainer, rockButton, paperButton, scissorButton);