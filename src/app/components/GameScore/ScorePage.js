import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import "../../../../public/css/App.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Score extends Component {
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
                    <h1>  GameScoreInfo in this page (also cloud in Home page) </h1>
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

export default Score;

