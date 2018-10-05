import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {socket, roomname} from '../../containers/Draw';


function sketch(p) {
	// var socket;
	console.log("sketch sok: ", socket);
	console.log("roomname: ",roomname);

	p.setup = function() {
		p.createCanvas(1100, 600);
		p.background(51);
		socket.emit("testSok", "from imported sok");
		// var input = p.createInput();
		// console.log("sketch sok: ", sok);
		// this.socket = io.connect('http://localhost:3001/drawingGameSocket');
    	socket.on('connect', function (data) {
        	// console.log(data)
        	console.log("sketch connect" + socket);
    	})
    	socket.on('newMove', function (data) {
        	// console.log(data.x + ", " + data.y)
        	p.newDraw(data)
    	})
	}

	// p.draw = function() {
	// 	p.noStroke();
	// 	p.fill(255);
	//  	if (p.mouseIsPressed) {
	//     	p.ellipse(p.mouseX, p.mouseY, 20, 20);
	//   	}
	// }

	// p.mouseDragged = function() {
		
	// 	var mousePosition = {
	// 		x: p.mouseX,
	// 		y: p.mouseY
	// 	}
	// 	console.log(mousePosition)
	// 	socket.emit('mouseMove', mousePosition);
	// }

	p.newDraw = function (data) {
		p.noStroke();
		p.fill(255,0,0);
	 	p.ellipse(data.x, data.y, 20, 20);
	  	
	}

}


export default sketch