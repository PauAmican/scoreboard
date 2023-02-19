let homePoints = document.getElementById("homeScore")
let guestPoints = document.getElementById("guestScore")
let scoreHome = 0
let scoreGuest = 0

function hm1(){
    scoreHome +=1
    homePoints.textContent = scoreHome
}

function hm2(){
    scoreHome +=2
    homePoints.textContent = scoreHome
}

function hm3(){
    scoreHome +=3
    homePoints.textContent = scoreHome
}

function add1(){
    scoreGuest +=1
    guestPoints.textContent = scoreGuest
}

function add2(){
    scoreGuest +=2
    guestPoints.textContent = scoreGuest
}

function add3(){
    scoreGuest +=3
    guestPoints.textContent = scoreGuest
}