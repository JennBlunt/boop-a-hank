const allSquares = document.querySelectorAll('.square')
const hank = document.querySelector('.hank')
const timeLeft = document.querySelector('#time')
const score = document.querySelector('#score')

let result = 0
let clickedPosition
let currentTime = 30
let timerId = null

function randomSquare() {
    allSquares.forEach(square => {
        square.classList.remove('hank')
    })

    let randomSquare = allSquares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('hank')

    clickedPosition = randomSquare.id
}

allSquares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == clickedPosition) {
            result++
            score.textContent = result
            clickedPosition = null
        }
    })
})

function moveHank() {
    timerId = setInterval(randomSquare, 800)
}

moveHank()

function countDown() {
    currentTime--
    timeLeft.textContent = 'Time Left: ' + currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)