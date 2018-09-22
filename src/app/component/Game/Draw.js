import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './DrawSketch';
import User from "../User/UserInfo";
import OtherUser from "../User/OtherUser";
import GameScoreInfoList from "../GameScore/GameScoreInfoList";
import "../../css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Draw extends Component {
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
			   		<P5Wrapper sketch={sketch()} />
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
    }
};

export default Draw;