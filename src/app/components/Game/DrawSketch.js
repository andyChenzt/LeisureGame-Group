import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {socket, roomname} from '../../containers/Draw';


function sketch(p) {
	// setup the draw sketch in p5.js 
	p.setup = function() {
		p.createCanvas(1100, 600);
		p.background(51);
		socket.emit("testSok", "from imported sok");
    	socket.on('connect', (data) => {
    	})
    	socket.on('newMove', (data) => {
        	p.newDraw(data)
    	})
	}

	p.draw = () => {
		p.noStroke();
		p.fill(255);
	 	if (p.mouseIsPressed) {
	    	p.ellipse(p.mouseX, p.mouseY, 20, 20);
	  	}
	}

	p.mouseDragged = () => {
		
		var mousePosition = {
			x: p.mouseX,
			y: p.mouseY
		}
		socket.emit('mouseMove', mousePosition);
	}

	p.newDraw = (data) => {
		p.noStroke();
		p.fill(255,0,0);
	 	p.ellipse(data.x, data.y, 20, 20);
	  	
	}

}


export default sketch