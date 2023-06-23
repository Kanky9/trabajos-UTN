import {AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from './juego/food';
import { Snake } from './juego/snake';
import { outsideGrid } from './juego/gameboard-grid.util';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent {

  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);


  lastRenderTime = 0
  gameOver = false

  ngAfterViewInit() { //Agregar boton en el html
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
    this.snake.listenToInputs();
  }
  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }

  start(currentTime: any) {
    if (this.gameOver) {
      return console.log('Game Over');
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) {
      return;
    }
    this.lastRenderTime = currentTime;

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if (score < 10) {
      return 4;
    }
    if (score > 10 && score < 15) {
      return 5;
    }
    if (score > 15 && score < 20) {
      return 6;
    }
    return 7;
  }

}
