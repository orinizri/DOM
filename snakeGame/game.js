
import {snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from "./grid.js"
let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game-board")
function main (currentTime) {
    if (gameOver) {
        if (confirm('you lost, press ok to restart')) {
            window.location = '/'
        }
        return 
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
    lastRenderTime = currentTime;


    update() //  update logic, update ate food, lose game
    draw() // draw everything on the screen, correct position etc.
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}