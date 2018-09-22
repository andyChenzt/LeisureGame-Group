import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';


function sketch(p) {
	var socket;

	p.setup = function() {
		p.createCanvas(840, 480)

		p.background(51);

		socket = io('http://localhost:3001');
    	socket.on('connect', function (data) {
        	// console.log(data)

    	})
    	socket.on('newMove', function (data) {
        	// console.log(data.x + ", " + data.y)
        	p.newDraw(data)
    	})
	}

	p.draw = function() {
		p.noStroke();
		p.fill(255);
	 	if (p.mouseIsPressed) {
	    	p.ellipse(p.mouseX, p.mouseY, 20, 20);
	  	}
	}

	p.mouseDragged = function() {
		
		var mousePosition = {
			x: p.mouseX,
			y: p.mouseY
		}
		console.log(mousePosition)
		socket.emit('mouseMove', mousePosition);
	}

	p.newDraw = function (data) {
		p.noStroke();
		p.fill(255,0,0);
	 	p.ellipse(data.x, data.y, 20, 20);
	  	
	}

}


export default sketch