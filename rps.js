let FirstPlayerScore = 0
let SecondPlayerScore = 0

let totalplaying = 1

let WinnerAnnouncer = "play on"
let rockval = 1
let Firstimg = `<img src="./images/rock_1.png" alt="image">`
let Secondimg =  `<img src="./images/rock_2.png" alt="image">`
let Thirdimg =  `<img src="./images/rock_3.png" alt="image">`

let Secondplayimg =  `<img src="./images/rock_1.png" alt="image">`



const PlayerOneScore = document.getElementById("firstscore")
const PlayerTwoScore = document.getElementById("secondscore")
const RockButton = document.getElementById("rockbutton")
const PaperButton = document.getElementById("paperbutton")
const ScissorsButton = document.getElementById("scissorsbutton")
const Winner = document.getElementById("anouncewinner")
const firstpic = document.getElementById("Firstimg")
const secondpic = document.getElementById("Secondplayimg")


const changer = ()=>{
    return Math.floor(Math.random() * 3 + 1);
}

const ChangeRPS = (changePic)=>{
    return `<img src="./images/rock_${changePic}.png" alt="Dice value ${changePic}">`
}

// player1info
PlayerOneScore.innerText = FirstPlayerScore
firstpic.innerHTML = Firstimg

// player2info
PlayerTwoScore.innerText = SecondPlayerScore
secondpic.innerHTML = Secondplayimg

Winner.innerText = WinnerAnnouncer

// changing of the pictures by clicking

RockButton.addEventListener("click",()=>{
    if (firstpic.innerHTML = Firstimg){
        let spins = changer()
        secondpic.innerHTML = ChangeRPS(spins)
        if  (firstpic === Firstimg || spins === 1 ){
            // PlayerOneScore.innerText = 5
            // PlayerTwoScore.innerText = 5
            Winner.innerText = "it is a tie !!"
        }
        if  ( firstpic === Firstimg || spins === 2){
            Winner.innerText = "YOU WIN !!"
        }
        if  ( firstpic === Firstimg || spins === 3){
            Winner.innerText = "COMPUTER WINS !!"
        }
       
    }
        
})

PaperButton.addEventListener("click",()=>{
    if (firstpic.innerHTML = Thirdimg ){
        let spins = changer()
        secondpic.innerHTML = ChangeRPS(spins)
        if  (firstpic ===  Secondimg || spins === 3 ){
            // PlayerOneScore.innerText = 5
            // PlayerTwoScore.innerText = 5
            Winner.innerText = "it is a tie !!"
        }
        if  ( firstpic === Firstimg || spins === 1){
            Winner.innerText = "YOU WIN !!"
        }
        if  ( firstpic === Firstimg || spins === 2){
            Winner.innerText = "COMPUTER WINS  !!"
        }
       
    }
        
})

ScissorsButton.addEventListener("click",()=>{
    if (firstpic.innerHTML = Secondimg ){
        let spins = changer()
        secondpic.innerHTML = ChangeRPS(spins)
        if  (firstpic ===  Secondimg || spins === 2 ){
            // PlayerOneScore.innerText = 5
            // PlayerTwoScore.innerText = 5
            Winner.innerText = "it is a tie !!"
        }
        if  ( firstpic === Firstimg || spins === 1){
            Winner.innerText = "COMPUTER WINS !!"
        }
        if  ( firstpic === Firstimg || spins === 3){
            Winner.innerText = "YOU WIN  !!"
        }
       
    }
        
})
