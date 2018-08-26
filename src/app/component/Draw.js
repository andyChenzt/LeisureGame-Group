import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './DrawSketch';
import User from "./UserInfo";
import OtherUser from "./OtherUser";
import GameScoreInfoList from "./GameScoreInfoList";

class Draw extends Component {

	render() {
		return (
			<div>	
			  	<div className="App-Draw">
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

export default Draw;