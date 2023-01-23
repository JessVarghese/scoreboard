let scoreHome = 0
let scoreGuest = 0

let homeCount = document.getElementById("score1-text")
let guestCount = document.getElementById("score2-text")



function addHome1() {
    scoreHome +=1
    homeCount.textContent = scoreHome

}

function addHome2() {
    scoreHome +=2
    homeCount.textContent = scoreHome

}

function addHome3() {
    scoreHome +=3
    homeCount.textContent = scoreHome

}

function addGuest1() {
    scoreGuest += 1
    guestCount.textContent = scoreGuest
}

function addGuest2() {
    scoreGuest += 2
    guestCount.textContent = scoreGuest
}

function addGuest3() {
    scoreGuest += 3
    guestCount.textContent = scoreGuest
}
function addGuest1() {
    scoreGuest += 1
    guestCount.textContent = scoreGuest
}


function newGame() {
    homeCount.textContent = 0
    guestCount.textContent = 0
    
}