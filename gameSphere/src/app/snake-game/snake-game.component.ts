import { Component, HostListener, OnInit } from '@angular/core';

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {
  canvasWidth: number = 600;
  canvasHeight: number = 500;
  squareSize: number = 20;
  snake: Position[] = [];
  food: Position = { x: 0, y: 0 };
  direction: Direction = Direction.Right;
  score: number = 0;
  highScore: number = 0;
  gameOver: boolean = false;
  gameInterval: any;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.snake = [];
    this.direction = Direction.Right;
    this.score = 0;
    this.gameOver = false;
    this.spawnFood();
    this.snake.push({ x: 0, y: 0 });
    this.gameInterval = setInterval(() => {
      this.move();
    }, 100);
  }

  move() {
    if (this.gameOver) {
      clearInterval(this.gameInterval);
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      return;
    }

    const head = this.getHeadPosition();
    let newHead: Position;
    switch (this.direction) {
      case Direction.Up:
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case Direction.Down:
        newHead = { x: head.x, y: head.y + 1 };
        break;
      case Direction.Left:
        newHead = { x: head.x - 1, y: head.y };
        break;
      case Direction.Right:
        newHead = { x: head.x + 1, y: head.y };
        break;
    }

    if (this.checkCollision(newHead) || this.checkBoundaryCollision(newHead)) {
      this.gameOver = true;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      return;
    }

    this.snake.unshift(newHead);

    if (this.checkFoodCollision(newHead)) {
      this.score++;
      this.spawnFood();
    } else {
      this.snake.pop();
    }
  }

  getHeadPosition(): Position {
    return this.snake[0];
  }

  checkCollision(position: Position): boolean {
    return this.snake.some((part) => part.x === position.x && part.y === position.y);
  }

  checkBoundaryCollision(position: Position): boolean {
    return (
      position.x < 0 ||
      position.x >= this.canvasWidth / this.squareSize ||
      position.y < 0 ||
      position.y >= this.canvasHeight / this.squareSize
    );
  }

  checkFoodCollision(position: Position): boolean {
    return position.x === this.food.x && position.y === this.food.y;
  }

  spawnFood() {
    this.food.x = Math.floor(Math.random() * (this.canvasWidth / this.squareSize));
    this.food.y = Math.floor(Math.random() * (this.canvasHeight / this.squareSize));
  }

  startGameWithButton() {
    if (this.gameOver) {
      this.startGame();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        if (this.direction !== Direction.Down)
          this.direction = Direction.Up;
        break;
      case 'ArrowDown':
        if (this.direction !== Direction.Up)
          this.direction = Direction.Down;
        break;
      case 'ArrowLeft':
        if (this.direction !== Direction.Right)
          this.direction = Direction.Left;
        break;
      case 'ArrowRight':
        if (this.direction !== Direction.Left)
          this.direction = Direction.Right;
        break;
    }
  }
}
