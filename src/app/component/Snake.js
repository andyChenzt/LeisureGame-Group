import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './SnakeSketch';
import ReactDOM from 'react-dom';
import { score } from './SnakeGame';

class Snake extends Component {
  render() {
    return (
      <div>
      	score = {score}
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default Snake;

