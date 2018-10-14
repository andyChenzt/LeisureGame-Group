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
import { login, saveUserInfo } from '../actions/userActions'


class Snake extends Component {

    componentWillMount = () => {
        // check the token 
        const token = localStorage.getItem('token');
        if(!token) {
            this.props.history.push('/');
        } else {
            const user = localStorage.getItem('user');
            const id = localStorage.getItem('id');
            console.log(JSON.parse(user));
            this.props.saveUserInfo(JSON.parse(user), id, token);
            this.props.doLogin();
        }
        
    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">

                    </div>

                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <br/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) }, 
        saveUserInfo: (userInfo, id) => { dispatch(saveUserInfo(userInfo, id)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Snake);

