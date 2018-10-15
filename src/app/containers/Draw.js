import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import drawSketch from '../components/Game/DrawSketch';
import guessSketch from '../components/Game/GuessSketch';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import "../../../public/css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import { startGame, setPlayer1, setPlayer2, getQuestion, deleteQuestion ,setWaiting, setPlaying } from '../actions/gameActions';
import { login, saveUserInfo } from '../actions/userActions';


export var socket = io('/drawingGameSocket'); 
export const roomname = "room name";

class DrawCon extends Component {
    constructor() {
        super();
        this.state = {
            board: null
        };
    }

	componentWillMount = () => {
        // check token first, 
        const token = localStorage.getItem('token');
        if(!token) {
            this.props.history.push('/');
        } else {
            const user = localStorage.getItem('user');
            const id = localStorage.getItem('id');
            this.props.saveUserInfo(JSON.parse(user), id, token);
            this.props.doLogin();
        }
    }

    componentDidMount = () => {
        this.socketConnect();
        // call server for a room
        socket.emit('findRoom');
    }

    componentWillUnmount = () => {
        socket.disconnect();
    }

    // initial socket for game, 
    // and listen to all the room and socket action
    socketConnect = () => {
        socket.on('connect', () => {
        });

        socket.on('getRoom', (roomName) => {
            this.roomname = roomname;

            // join the room
            socket.emit('joinRoom',roomName);

            // set isPlayer1 
            this.props.setPlayer1();

        });

        socket.on('findRoom', (roomName) => {
            this.roomname = roomname;
            // join the room
            socket.emit('joinRoom',roomName);
            // set Player2
            this.props.setPlayer2();
        });

        socket.on('pending', (data) => {
            socket.emit('testRoom', "testRoom");
        });

        socket.on('getPlayer', (msg) => {
        });

        socket.on('waitDrawing', (msg) => {
        });

        socket.on('readyToWatch', (msg) => {
            this.props.startGame();
        });

        socket.on('s', (msg) => {
        });

        socket.on('findPlayer', () => {

        })

        socket.on('getQuestion', (msg) => {
            // change the title to the question
            this.props.getQuestion(msg);
        })

        socket.on('exit', (msg) => {
            this.props.setWaiting();
        })


    }

    // handle refresh button for refresh the socket 
    handleRefresh = (e) => {
        e.preventDefault();
        location.reload();
    }

    // start game
    handleStart = (e) => {
        if(this.props.hasQuestion) {
            e.preventDefault();
            socket.emit('startGame',"player1 startDrawing");
            this.props.setPlaying();
            this.props.startGame();
            this.props.deleteQuestion();
            this.state.board = this.props.isPlayer1 ? <P5Wrapper sketch={drawSketch} /> : <P5Wrapper sketch={guessSketch} />;
        }
        
    }

    // for clean the sketch 
    handleClean = (e) => {
        e.preventDefault();
        const newBoard = this.props.isPlayer1 ? <P5Wrapper sketch={drawSketch} /> : <P5Wrapper sketch={guessSketch} />;
        this.setState(
            { board: newBoard }
        );
    }

    // handle back button to go out of the playing room
    handleBack = (e) => {
        e.preventDefault();
        this.props.setWaiting();
        socket.emit('exit', "player exit");
    }

    // handle to exit the game and go back to home
    handleExit = (e) => {
        e.preventDefault();
        const nickName = this.props.user.nickName
        this.props.history.push('/Home/' + nickName);
    }

	render() {
        this.state.board = this.props.isPlayer1 ? <P5Wrapper sketch={drawSketch} /> : <P5Wrapper sketch={guessSketch} />;
        const question = this.props.hasQuestion ? "Question: " + this.props.question : "Waiting..."; 

        if(this.props.isWaiting) {
            // different status of the game room
            return (
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                        </div>

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <h2 className="wait">{question}</h2>
                            <br/>
                            <br/>

                            <button type="button" className="btn btn-success btn-block" onClick={this.handleRefresh}>Refresh</button>
                            <br/>
                            <br/>

                            <button type="button" className="btn btn-success btn-block" onClick={this.handleStart}>Start</button>
                            <br/>
                            <br/>

                            <button type="button" className="btn btn-danger btn-block" onClick={this.handleExit}>Exit</button>
                            <br/>
                            <br/>
                        </div>

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                        </div>
                    </div>
                </div>
            );
        } else {
            // game start
            return (
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                            <div className="user">
                                <OtherUser user={this.props.user}/>
                                <button type="button" className="btn btn-danger btn-block" onClick={this.handleBack}>Exit</button>
                            </div>
                        </div>

                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            {this.state.board}
                        </div>

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                        </div>
                    </div>
                </div>
            );
        }
		
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        user: state.userReducer.user,
        isWaiting: state.gameReducer.isWaiting,
        isPlayer1: state.gameReducer.isPlayer1,
        hasQuestion: state.gameReducer.hasQuestion,
        question: state.gameReducer.question
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) },
        startGame: () => { dispatch(startGame()) }, 
        setPlayer1: () => { dispatch(setPlayer1()) },  
        setPlayer2: () => { dispatch(setPlayer2()) },  
        getQuestion: (question) => { dispatch(getQuestion(question)) },
        setWaiting: () => { dispatch(setWaiting()) }, 
        setPlaying: () => { dispatch(setPlaying()) }, 
        deleteQuestion: () => { dispatch(deleteQuestion()) }, 
        saveUserInfo: (userInfo, id) => { dispatch(saveUserInfo(userInfo, id)) },
    }
};

export const Draw = connect(mapStateToProps, mapDispatchToProps)(DrawCon);



