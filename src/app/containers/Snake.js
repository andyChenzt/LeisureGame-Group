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
        if(!this.props.isLogin) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        {/*<User />*/}
                        {/*<OtherUser />*/}

                    </div>

                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <br/>
                        {/*score = {score}*/}
                        <P5Wrapper sketch={sketch} />
                    </div>

                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">

                    </div>
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

export default connect(mapStateToProps)(Snake);

