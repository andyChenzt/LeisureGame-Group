import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../components/Game/DrawSketch';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import "../../../public/css/Draw.css";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import { startGame } from '../actions/gameActions';


// var allowedOrigins = "http://localhost:3001 ";       //domain_1:* domain_2:*
// export const sok = io('http://localhost:3001', {"transports": ["websocket"]}); //{origins: allowedOrigins}
let socket;

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
        this.socket.emit('findRoom');
    }

    componentWillUnmount = () => {
        this.socket.disconnect();
        console.log("unmount ", this.socket);
    }

    socketConnect = () => {
        console.log("try to connect");
        this.socket = io.connect('http://localhost:3001/drawingGameSocket'); //, {origins: allowedOrigins}
        console.log(this.socket);
        this.socket.on('connect', () => {
            console.log(this.socket, "connect to drawingGameSocket");
        });

        this.socket.on('getRoom', (roomName) => {
            console.log("get room ",roomName);
            // join the room
            this.socket.emit('joinRoom',roomName);
            // change state in reducer -> pending
            // loading,
        });

        this.socket.on('pending', (data) => {
            console.log(data);
            console.log(this.socket);
            this.socket.emit('testRoom', "testRoom");
        });

        this.socket.on('testBroadcast', (msg) => {
            console.log(msg);
        })

        this.socket.on('findPlayer', () => {

        })

        this.socket.on('getQuestion', () => {
            // count down

            this.socket.emit('start')
        })


    }

    handleStart = (e) => {
        console.log("clicked start");
        console.log(this.props);
        e.preventDefault();

        this.props.startGame();
    }

	render() {
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

                            <button type="button" className="btn btn-warning btn-block">waiting</button>
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
                            </div>
                        </div>

                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            <P5Wrapper sketch={sketch} />
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => { dispatch(startGame()) },    
    }
};

// export default connect(mapStateToProps, mapDispatchToProps)(Draw);
export const Draw = connect(mapStateToProps, mapDispatchToProps)(DrawCon);



