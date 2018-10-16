import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import p5 from 'p5';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {socket, roomname} from '../../containers/Draw';


function sketch(p) {
	// set up the sketch for watch user
	p.setup = () => {
		p.createCanvas(1100, 600);
		p.background(51);
		socket.emit("testSok", "from imported sok");
		
    	socket.on('connect', function (data) {
    	})

    	socket.on('newMove', function (data) {
        	p.newDraw(data)
    	})
	}
	
	p.newDraw = function (data) {
		p.noStroke();
		p.fill(255,0,0);
	 	p.ellipse(data.x, data.y, 20, 20);
	  	
	}

}


export default sketch