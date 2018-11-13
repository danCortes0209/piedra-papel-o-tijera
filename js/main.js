//obtiene los botones, mas un arreglo con las posibles decisiones 
const rockButton = document.getElementById("button-rock"),
    paperButton = document.getElementById("button-paper"),
    scissorButton = document.getElementById("button-scissor"),
    gameResultsContainer = document.getElementById("game-results"),
    playableThings = ["Piedra","Papel","Tijera"];
let decisionRes = "Empate :/";

//llena el contenedor con la decision del juego
const displayDesicion = (userChoice, computerChoice, result, container) => {
    return container.innerHTML = `<b>Elegiste: <span class="${userChoice.toLowerCase}">${userChoice}</span><br> La PC eligió: <span class="${computerChoice.toLowerCase}">${computerChoice}</span><br> ${result}`
}
//Obtiene una de las posibles decisiones en base al arreglo, usando un numero aleatorio que no sobrepase la cantidad de indices del arreglo
const getPCChoice = (choiceArray) => {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Obtiene una decision en base a las elecciones del usuario y de la maquina
const getDecision = (userChoice, computerChoice, decisionResult, displayResult, container) => {
    //modifica el mensaje en base a las opciones
    if(userChoice === computerChoice) {
        decisionResult = "Empate :/";
    } else {
        if (userChoice === "Piedra" && computerChoice === "Tijera" ) {
            decisionResult = "Ganaste :D";
        } else if (userChoice === "Papel" && computerChoice === "Piedra" ) {
            decisionResult = "Ganaste :D";
        } else if (userChoice === "Tijera" && computerChoice === "Papel" ) {
            decisionResult = "Ganaste :D";
        } else if (userChoice === "Tijera" && computerChoice === "Piedra" ) {
            decisionResult = "Perdiste :c";
        } else if (userChoice === "Papel" && computerChoice === "Tijera" ) {
            decisionResult = "Perdiste :c";
        } else if (userChoice === "Piedra" && computerChoice === "Papel" ) {
            decisionResult = "Perdiste :c";
        }
    }
    return displayResult(userChoice, computerChoice, decisionResult, container)
}

//al darle click a los botones, ejecuta todas las demas funciones dentro de si.
const getButton = (computerChoice, choiceArray, getDecision, displayRes, container, decisionResult, ...buttonsHtml) => {
    buttonsHtml.forEach(buttonHtml => {
        buttonHtml.addEventListener("click", function(){
            return getDecision(buttonHtml.innerText, computerChoice(choiceArray), decisionResult, displayRes, container);
        });
    })
}

//elecuta la funcion
getButton(getPCChoice, playableThings, getDecision, displayDesicion, gameResultsContainer, decisionRes, rockButton, paperButton, scissorButton);