import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import ReactDOM from 'react-dom';
import sketch from '../components/Game/SnakeSketch';
import { score } from '../components/Game/SnakeGame';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import "../../../public/css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import {  } from '../../actions/userActions';

class Snake extends Component {
    componentWillMount = () => {
        // if(!this.props.isLogin) {
        //     this.props.history.push('/');
        // }
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <User />
                        <OtherUser />

                    </div>

                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <P5Wrapper sketch={sketch} />
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                    </div>
                </div>
            </div>
        	// <div>
    		//   	<div className="App-Draw">
    		//   		score = {score}
    		//     	<P5Wrapper sketch={sketch} />
    		//   	</div>
            //     <div>
            //         <User />
            //         <OtherUser />
            //         {/*<GameScoreInfoList />*/}
            //     </div>
    		// </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
    }
};

export default connect(mapStateToProps)(Snake);

