//Factory Functions Refactor

//Objects

const Player = (name, mark) => {
    this.name = name
    this.mark = mark
}

const createGame = () => {
    let gameboardArray = Array(9).fill('')
    let roundCounter = 0
    let gameEnded = false
    let playerActive = 'X'

    const getPlayerActive = () => playerActive

    const getBoard = () => gameboardArray
    
    const makeMove = ((e) =>{
        markedIndex = e.target.getAttribute('value')
        if (gameboardArray[markedIndex] != '') {
            return 0
        }
        gameboardArray[markedIndex] = playerActive
        boxes.forEach(box => {
            let boxIndex = box.getAttribute('value')
            box.innerText = gameboardArray[boxIndex]
        })
        gameEnded = checkWin(gameboardArray)
        endGame(roundCounter, gameEnded)
        changeTurn()
    })
    
    const changeTurn = (() => {
        userOne.classList.toggle('playerActive')
        userTwo.classList.toggle('playerActive')
        playerActive = playerActive=='X'?'O':'X'
        roundCounter++
    })

    const checkWin = (gameboardArray) => {
        if (gameboardArray[0] == gameboardArray[1] && gameboardArray[0] == gameboardArray[2] && gameboardArray[0] != ''){
            gameEnded = true
            return true
        }
        if (gameboardArray[3] == gameboardArray[4] && gameboardArray[3] == gameboardArray[5] && gameboardArray[3] != ''){
            gameEnded = true
            return true
        }
        if (gameboardArray[6] == gameboardArray[7] && gameboardArray[6] == gameboardArray[8] && gameboardArray[6] != ''){
            gameEnded = true
            return true
        }
        //*COLUMNS
        if (gameboardArray[0] == gameboardArray[3] && gameboardArray[0] == gameboardArray[6] && gameboardArray[0] != ''){
            gameEnded = true
            return true
        }
        if (gameboardArray[1] == gameboardArray[4] && gameboardArray[1] == gameboardArray[7] && gameboardArray[1] != ''){
            gameEnded = true
            return true
        }
        if (gameboardArray[2] == gameboardArray[5] && gameboardArray[2] == gameboardArray[8] && gameboardArray[2] != ''){
            gameEnded = true
            return true
        }
        //*DIAGONALS
        if (gameboardArray[0] == gameboardArray[4] && gameboardArray[0] == gameboardArray[8] && gameboardArray[0] != ''){
            gameEnded = true
            return true
        }
        if (gameboardArray[2] == gameboardArray[4] && gameboardArray[2] == gameboardArray[6] && gameboardArray[2] != ''){
            gameEnded = true
            return true
        }
        else{
            return false
        }
    }
    
    const endGame = (roundCounter, checkWin) => {
        if (roundCounter === 9 || checkWin) {
        console.log('game ended')
            boxes.forEach(box => { box.removeEventListener('click', game.makeMove)  
            });
            if (gameEnded){
                winner.innerText = `The winner is ${playerActive=='X'?'Player One':'Player Two'}`
            }
            else{
                winner.innerText = `It's a tie`
            }
            return
        }
        console.log('game is going')
    }
    const cleanBoard = () => {
        gameboardArray = Array(9).fill('')
        roundCounter = 0
        gameEnded = false
        playerActive = 'X'
        boxes.forEach(box => box.innerText = '')
        boxes.forEach(box => box.addEventListener('click', game.makeMove) )
        winner.innerText = ""
    }

    return{
        getPlayerActive,
        getBoard,
        cleanBoard,
        makeMove
    }

}



// DOM Elements

boxes = document.querySelectorAll('.box')
restart = document.querySelector('.restart')
userOne = document.querySelector('.userOne')
userTwo = document.querySelector('.userTwo')
winner = document.querySelector('.winner')

const game = createGame()


//EventListeners

boxes.forEach(box => { box.addEventListener('click', game.makeMove)  
});
restart.addEventListener('click', game.cleanBoard)
