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
import { startGame, setPlayer1, setPlayer2, getQuestion } from '../actions/gameActions';


// var allowedOrigins = "http://localhost:3001 ";       //domain_1:* domain_2:*
export const socket = io('http://localhost:3001/drawingGameSocket'); 
export const roomname = "room name";
// let socket;

class DrawCon extends Component {
    constructor() {
        super();
    }


	componentWillMount = () => {
        // if(!this.props.isLogin) {
        //     this.props.history.push('/');
        // }
    }

    componentDidMount = () => {
        console.log("set up socket");
        this.socketConnect();
        // call server for a room
        console.log("find room");
        socket.emit('findRoom');
    }

    componentWillUnmount = () => {
        socket.disconnect();
        console.log("unmount ", this.socket);
    }

    socketConnect = () => {
        console.log("try to connect");
        // this.socket = io.connect('http://localhost:3001/drawingGameSocket'); //, {origins: allowedOrigins}
        console.log(socket);
        socket.on('connect', () => {
            console.log(socket, "connect to drawingGameSocket");
            // this.sok = this.socket;
            // console.log("ttt sok" + sok);
        });

        socket.on('getRoom', (roomName) => {
            console.log("get room ",roomName);
            this.roomname = roomname;
            // join the room
            socket.emit('joinRoom',roomName);
            // change state in reducer -> pending
            // loading, and set isPlayer1 = true
            this.props.setPlayer1();

        });

        socket.on('findRoom', (roomName) => {
            console.log("find room ",roomName);
            this.roomname = roomname;
            // join the room
            socket.emit('joinRoom',roomName);
            // change the state to isPlayer1 = false
            this.props.setPlayer2();
        });

        socket.on('pending', (data) => {
            console.log(data);
            console.log(socket);
            socket.emit('testRoom', "testRoom");
        });

        socket.on('getPlayer', (msg) => {
            console.log(msg);
        });

        socket.on('waitDrawing', (msg) => {
            console.log(msg);
        });

        socket.on('readyToWatch', (msg) => {
            console.log(msg);
            this.props.startGame();
        });

        socket.on('s', (msg) => {
            console.log(msg);
        });

        socket.on('findPlayer', () => {

        })

        socket.on('getQuestion', (msg) => {
            // count down
            
            // change the title to the question
            this.props.getQuestion(msg);
            console.log(msg);
        })


    }

    handleStart = (e) => {
        console.log("clicked start");
        console.log(this.props);
        e.preventDefault();
        socket.emit('startGame',"player1 startDrawing");
        this.props.startGame();
    }

	render() {
        const board = this.props.isPlayer1 ? <P5Wrapper sketch={drawSketch} /> : <P5Wrapper sketch={guessSketch} />;
        const question = this.props.hasQuestion ? this.props.question : "Waiting"; 

        if(this.props.isWaiting) {
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

                            <button type="button" className="btn btn-warning btn-block">{question}</button>
                            <br/>
                            <br/>

                            <button type="button" className="btn btn-success btn-block" onClick={this.handleStart}>start</button>
                            <br/>
                            <br/>

                            <button type="button" className="btn btn-danger btn-block">exit</button>
                            <br/>
                            <br/>
                        </div>

                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                            <div className="user">
                                {/*<User />*/}
                                <OtherUser />
                                <button type="button" className="btn btn-danger btn-block">exit</button>
                            </div>
                        </div>

                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            {/*<P5Wrapper sketch={sketch} />*/}
                            {board}
                        </div>

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                        </div>
                    </div>
                </div>
                // <div>
                //     <div className="App-Draw">
                //         <P5Wrapper sketch={sketch} />
                //     </div>
                //     <div>
                //         <input></input>
                //         <button>send</button>
                //     </div>
                //
                //     <div>
                //         <User />
                //         <OtherUser />
                //     </div>
                // </div>
            );
        }
		
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        isWaiting: state.gameReducer.isWaiting,
        isPlayer1: state.gameReducer.isPlayer1,
        hasQuestion: state.gameReducer.hasQuestion,
        question: state.gameReducer.question
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => { dispatch(startGame()) }, 
        setPlayer1: () => { dispatch(setPlayer1()) },  
        setPlayer2: () => { dispatch(setPlayer2()) },  
        getQuestion: (question) => { dispatch(getQuestion(question)) },
    }
};

export const Draw = connect(mapStateToProps, mapDispatchToProps)(DrawCon);



