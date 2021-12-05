let gameBoard = document.querySelector("#game-board")
console.log(gameBoard)

let matrix = []
// 0 empty
// 1 brown
// 2 grey
// 3 green
// 4 white

function startMatrix() {
    let matrix = [];
    for (let i = 0; i < 21; i++) {
        matrix.push([])
        for (let j = 0; j < 21; j++) {
            matrix[i][j] = 0;
            if (i === 19) {
                matrix[i][j] = 1;
            }
            if (i === 2 && j > 1 && j < 3) {
                matrix[i][j] = 2;
            }
        }
    }
    return matrix;
}
function createDivs(matrix) {
    for (let i = 1; i < 21; i++) {
        for (let j = 1; j < 21; j++) {
            if (matrix[i - 1][j - 1] == 1) {
                gameBoard.innerHTML += `<div id="${i}-${j}" class="ground"></div>`
            }
            else if (matrix[i - 1][j - 1] == 2) {
                gameBoard.innerHTML += `<div id="${i}-${j}" class="grass"></div>`
            }
            else if (matrix[i - 1][j - 1] == 0) {
                gameBoard.innerHTML += `<div id="${i}-${j}" class="sky"></div>`
            }
        }
    }
    console.log(matrix)
}
console.log(createDivs(startMatrix()))
