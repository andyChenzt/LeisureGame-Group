import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './DrawSketch';

class Draw extends Component {

	render() {
		return (
		  <div>
		    <P5Wrapper sketch={sketch} />
		  </div>
		);
		}
	}

export default Draw;