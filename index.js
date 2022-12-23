let homeScore = 0
let guestScore = 0

//store html element in variable
let hScore = document.querySelector('#home')
let gScore = document.querySelector('#guest')

let homeScoreEl = document.getElementById('homeScore-el')
let guestScoreEl = document.getElementById('guestScore-el')

let incrementOneHomeBtn = document.getElementById('increment1Home-btn')
let incrementTwoHomeBtn = document.getElementById('increment2Home-btn')
let incrementThreeHomeBtn = document.getElementById('increment3Home-btn')

let incrementOneGuestBtn = document.getElementById('increment1Guest-btn')
let incrementTwoGuestBtn = document.getElementById('increment2Guest-btn')
let incrementThreeGuestBtn = document.getElementById('increment3Guest-btn')

incrementOneHomeBtn.addEventListener("click", function() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
    winner()    
})
incrementTwoHomeBtn.addEventListener("click", function() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    winner() 
})
incrementThreeHomeBtn.addEventListener("click", function() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    winner() 
})
incrementOneGuestBtn.addEventListener("click", function() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
    winner() 
})
incrementTwoGuestBtn.addEventListener("click", function() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
    winner() 
})
incrementThreeGuestBtn.addEventListener("click", function() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
    winner() 
})

function reset() {
    homeScore = 0
    homeScoreEl.innerText = homeScore
    
    guestScore =0
    guestScoreEl.innerText = guestScore
    
    hScore.style.color = 'white'
    gScore.style.color = 'white'
}

function winner(){
    
    if (homeScore == guestScore){
        hScore.style.color = 'white'
        gScore.style.color = 'white'
    }else if (homeScore > guestScore){        
        hScore.style.color = 'green'
        gScore.style.color = 'white'
    }else {
        hScore.style.color = 'white'
        gScore.style.color = 'green'
    }
}


