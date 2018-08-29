import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './DrawSketch';
import User from "../User/UserInfo";
import OtherUser from "../User/OtherUser";
import GameScoreInfoList from "../GameScore/GameScoreInfoList";
import "../../css/Draw.css";

class Draw extends Component {

	render() {
		return (
			<div>	
			  	<div className="App-Draw">
			   		<P5Wrapper sketch={sketch} />
			  	</div>
			  	<div>
		            <User />
		            <OtherUser />
		            {/*<GameScoreInfoList />*/}
		        </div>
		    </div>
		);
	}
}

export default Draw;