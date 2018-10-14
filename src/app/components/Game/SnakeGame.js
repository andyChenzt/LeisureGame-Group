import p5 from 'p5';

export var snakeScale = 10;
export var score = 0;

// set up for snake game
export function Snake(p) {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.dir = p.RIGHT_ARROW;
	this.total = 0;
	this.tail = [];

	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.total; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}
		
		this.tail[this.total-1] = p.createVector(this.x, this.y);

		this.x = this.x + this.xSpeed * snakeScale;
		this.y = this.y + this.ySpeed * snakeScale;

	}

	this.show = function() {
		p.fill(255);
		for (var i = 0; i < this.tail.length; i++) {
			p.rect(this.tail[i].x, this.tail[i].y, snakeScale, snakeScale);
		}
		p.rect(this.x, this.y, snakeScale, snakeScale);

	}

	this.direction = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.eat = function(food) {
		var dist = p.dist(this.x, this.y, food.x, food.y);
		if (dist < 1) {
			this.total++;
			score++;
			console.log(score);
			return true;
		} else {
			return false;
		}
	}

	this.dead = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var dis = p.dist(this.x, this.y, pos.x, pos.y);
			if (dis < 1 ) {
				this.total = 0;
				this.tail = [];
			}
		}
		if (score >= 10) {
			score -= 10;
		} else {
			score = 0;
		}
	}

	this.moveOnOtherSide = function(dir) {
		if (dir === p.UP_ARROW) {
			this.direction(0, -1);		
		} else if (p.keyCode === p.DOWN_ARROW) {
			this.direction(0, 1);
		} else if (p.keyCode === p.LEFT_ARROW) {
			this.direction(-1, 0);
		} else if (p.keyCode === p.RIGHT_ARROW) {
			this.direction(1, 0);
		}
	}
}

export function Food(p) {
	console.log("new food")
	var food;
	var column = p.floor(p.width / snakeScale);
	var rows = p.floor(p.height / snakeScale);
	food = p.createVector(p.floor(p.random(p.width)), p.floor(p.random(p.height)));
	console.log(food.x, food.y);
	// food.mult(snakeScale)
	return food
}
