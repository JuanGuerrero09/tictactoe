//Objects

const Player = (name, mark) => {
    this.name = name
    this.mark = mark
}

let gameboardArray = Array(9).fill('')
let turn = 0
let gameEnded = false
let firstPlayerTurn = true


// DOM Elements

boxes = document.querySelectorAll('.box')
restart = document.querySelector('.restart')
userOne = document.querySelector('.userOne')
userTwo = document.querySelector('.userTwo')
winner = document.querySelector('.winner')




//EventListeners

boxes.forEach(box => { box.addEventListener('click', game)  
});
restart.addEventListener('click', cleanBoard)


//Functions

function game(e){
    activePlayer()
    updateBoard(e)
    gameEnded = checkWin(gameboardArray)
    changeTurn()
    endGame()
}

function updateBoard(e) {
    let marker = firstPlayerTurn? 'X' : '0'
    markedIndex = e.target.getAttribute('value')
    if (gameboardArray[markedIndex] != '') {
        return 0
    }
    gameboardArray[markedIndex] = marker
    boxes.forEach(box => {
        let boxIndex = box.getAttribute('value')
        box.innerText = gameboardArray[boxIndex]
    })
}

function checkWin(array){
    //*ROWS
    if (array[0] == array[1] && array[0] == array[2] && array[0] != ''){
        return true
    }
    if (array[3] == array[4] && array[3] == array[5] && array[3] != ''){
        return true
    }
    if (array[6] == array[7] && array[6] == array[8] && array[6] != ''){
        return true
    }
    //*COLUMNS
    if (array[0] == array[3] && array[0] == array[6] && array[0] != ''){
        return true
    }
    if (array[1] == array[4] && array[1] == array[7] && array[1] != ''){
        return true
    }
    if (array[2] == array[5] && array[2] == array[8] && array[2] != ''){
        return true
    }
    //*DIAGONALS
    if (array[0] == array[4] && array[0] == array[8] && array[0] != ''){
        return true
    }
    if (array[2] == array[4] && array[2] == array[6] && array[2] != ''){
        return true
    }
    else{
        return false
    }
}

function endGame(){
    if (turn === 9 || gameEnded) {
        console.log('game ended')
        boxes.forEach(box => { box.removeEventListener('click', game)  
        });
        if (gameEnded){
            winner.innerText = `The winner is ${firstPlayerTurn?'Player 2': 'Player 1'}`
        }
        else{
            winner.innerText = `It's a tie`
        }
        return
    }
    console.log('game is going')
}

function changeTurn(){
    firstPlayerTurn = !firstPlayerTurn
    turn++
}


function cleanBoard(){
    gameboardArray = Array(9).fill('')
    turn = 0
    boxes.forEach(box => box.innerText = '')
    boxes.forEach(box => box.addEventListener('click', game) )
    winner.innerText = ""
}

function activePlayer(){
    userOne.classList.toggle('playerActive')
    userTwo.classList.toggle('playerActive')
}
