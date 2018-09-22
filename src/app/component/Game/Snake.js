import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './SnakeSketch';
import ReactDOM from 'react-dom';
import { score } from './SnakeGame';
import User from "../User/UserInfo";
import OtherUser from "../User/OtherUser";
import GameScoreInfoList from "../GameScore/GameScoreInfoList";
import "../../css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import {  } from '../../actions/userActions';

class Snake extends Component {
    componentWillMount = () => {
        console.log("will mount");
        if(!this.props.isLogin) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
        	<div>
    		  	<div className="App-Draw">
    		  		score = {score}
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

export default Snake;

