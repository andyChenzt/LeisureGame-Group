import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
import ReactDOM from 'react-dom';
import { Snake, snakeScale, Food } from './SnakeGame';
import io from 'socket.io-client';

function sketch(p) {
    var snake;
    var food;
    var socket;

	p.setup = function () {
		p.createCanvas(1100, 600);
		snake = new Snake(p);
		p.frameRate(10);
		
		food = p.foodLocation();

	}

	p.draw = function() {
		p.background(51);
		snake.update();
		snake.show();
		snake.dead();
		if (snake.eat(food)) {
			food = p.foodLocation();
		}

		p.fill(255, 0, 100);
		p.rect(food.x, food.y, snakeScale, snakeScale);
	}

	p.keyPressed = function() {
		if (p.keyCode === p.UP_ARROW) {
			if (snake.dir != p.DOWN_ARROW) {
				snake.direction(0, -1);
				snake.dir = p.UP_ARROW;
			}
		} else if (p.keyCode === p.DOWN_ARROW) {
			if (snake.dir != p.UP_ARROW) {
				snake.direction(0, 1);
				snake.dir = p.DOWN_ARROW;
			}
		} else if (p.keyCode === p.LEFT_ARROW) {
			if (snake.dir != p.RIGHT_ARROW) {
				snake.direction(-1, 0);
				snake.dir = p.LEFT_ARROW;
			}
		} else if (p.keyCode === p.RIGHT_ARROW) {
			if (snake.dir != p.LEFT_ARROW) {
				snake.direction(1, 0);
				snake.dir = p.RIGHT_ARROW;
			}
		}
	}

	p.foodLocation = function() {
		console.log("location called")
		console.log(snakeScale);
		var columns = p.floor(p.width / snakeScale)
		var rows = p.floor(p.height / snakeScale)
		console.log(columns, rows)
		food = p.createVector(p.floor(p.random(columns)), p.floor(p.random(rows)))
		console.log(food)
		food.mult(snakeScale)
		return food
	}

}


export default sketch