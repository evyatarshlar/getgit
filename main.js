'use strict'
var ballSize = 100

function onBallClick(){
    ballSize = ballSize + getRandomInt(20,60) 
    if (ballSize > 400) ballSize = 100
    var elBall = document.querySelector('.ball')
    elBall.style.width = ballSize+ 'px'
    elBall.style.height = ballSize+ 'px'
    elBall.innerHTML = ballSize
}