//Objects

const Player = (name, mark) => {
    this.name = name
    this.mark = mark
    Active

}

let gameboardArray = ['', '', '', '', '', '', '', '', '']
let turn = 0

const gameboard = (() => {
    const array = ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O']

    const checkWin = ''


}

)

// DOM Elements

boxes = document.querySelectorAll('.box')



//EventListeners

boxes.forEach(box => { box.addEventListener('click', updateBoard)  
});


//Functions
let firstPlayerTurn = true

function updateBoard(e) {
    let marker = firstPlayerTurn? 'X' : '0'
    gameboardArray[e.target.getAttribute('value')] = marker
    boxes.forEach(box => {
        let index = box.getAttribute('value')
        box.innerText = gameboardArray[index]
    })
    firstPlayerTurn = !firstPlayerTurn
}

function markBoard(){
    return ''
}

function cleanBoard(){
    return ''
}
