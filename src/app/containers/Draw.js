import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../components/Game/DrawSketch';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import "../css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Draw extends Component {
	componentWillMount = () => {
        console.log("will mount", this.props.isLogin);
        if(!this.props.isLogin) {
            this.props.history.push('/');
        }
    }

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

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
    }
};

export default connect(mapStateToProps)(Draw);