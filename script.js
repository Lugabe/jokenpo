const stone = document.querySelector(".stone").value
const paper = document.querySelector(".paper").value
const scissors = document.querySelector(".scissors").value
const myPoints = document.querySelector(".my-points")
const alexaPoints = document.querySelector(".alexa-points")
const result = document.querySelector(".result")
const buttons = document.querySelector("button").value
const imgDerrota = document.querySelector(".derrota")
const imgVitoria = document.querySelector(".vitoria")

let pointsAlexa = 0
let pointsHuman = 0

const playButtons = (humanChoice) => {
    let alexaPlay = randomChoice()

    if (pointsAlexa === 15) {
        result.innerHTML = "Alexa Venceu!!"
        pointsHuman = 0
        pointsAlexa = 0
        imgDerrota.src = ("./assets/perdemos.gif")
    }
    if (pointsHuman === 15) {
        result.innerHTML = "Você Venceu a Alexa!"
        pointsAlexa = 0
        pointsHuman = 0
        imgVitoria.src = ("./assets/ganhei.gif")
    }

    if (alexaPlay === stone && humanChoice === 'scissors') {
        alexaPoints.innerHTML = pointsAlexa++
        result.innerHTML = "Você perdeu!"
    }

    if (alexaPlay === stone && humanChoice === 'paper') {
        myPoints.innerHTML = pointsHuman++
        result.innerHTML = "Você Ganhou!"
    }

    if (alexaPlay === stone && humanChoice === 'stone') {
        result.innerHTML = "Empatou Pedra e Pedra!"
    }

    if (alexaPlay === scissors && humanChoice === 'stone') {
        myPoints.innerHTML = pointsHuman++
        result.innerHTML = "Você Ganhou!"
    }

    if (alexaPlay === scissors && humanChoice === 'paper') {
        alexaPoints.innerHTML = pointsAlexa++
        result.innerHTML = "Você perdeu!"
    }

    if (alexaPlay === scissors && humanChoice === 'scissors') {
        result.innerHTML = "Empatou Tesoura e Tesoura!"
    }

    if (alexaPlay === paper && humanChoice === 'stone') {
        alexaPoints.innerHTML = pointsAlexa++
        result.innerHTML = "Você perdeu!"
    }
    if (alexaPlay === paper && humanChoice === 'paper') {
        result.innerHTML = 'Empatou Papel e Papel!'
    }

    if (alexaPlay === paper && humanChoice === 'scissors') {
        myPoints.innerHTML = pointsHuman++
        result.innerHTML = "Você Ganhou!"
    }

}

const randomChoice = () => {
    let random = [stone, paper, scissors]
    let choice = random[Math.floor((Math.random() * random.length))]
    return choice
}

