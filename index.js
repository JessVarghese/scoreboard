let scoreHome = 0
let scoreGuest = 0

let homeCount = document.getElementById("score1-text")
let guestCount = document.getElementById("score2-text")



function addHome() {
    scoreHome +=1
    homeCount.textContent = scoreHome

}


function addGuest() {
    scoreGuest += 1
    guestCount.textContent = scoreGuest
}


function newGame() {
    homeCount.textContent = 0
    guestCount.textContent = 0
    
}