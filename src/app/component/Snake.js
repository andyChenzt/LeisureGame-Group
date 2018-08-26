import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './SnakeSketch';
import ReactDOM from 'react-dom';
import { score } from './SnakeGame';
import User from "./UserInfo";
import OtherUser from "./OtherUser";
import GameScoreInfoList from "./GameScoreInfoList";

class Snake extends Component {
  render() {
    return (
    	<div>
		  	<div className="App-Draw">
		  		score = {score}
		    	<P5Wrapper sketch={sketch} />
		  	</div>
		  	<div className="App-test">
	            <User />
	            <OtherUser />
	            <GameScoreInfoList />
	        </div>
		</div>  	
    );
  }
}

export default Snake;

