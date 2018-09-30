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


var allowedOrigins = "http://localhost:3001 ";       //domain_1:* domain_2:*
export const sok = io.connect('http://localhost:3001/api/drawingGame', { transport : ['websocket'] }); //{origins: allowedOrigins}

class DrawCon extends Component {
    constructor() {
        super();
    }

    socket;

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

    socketConnect = () => {
        this.socket = io.connect('http://localhost:3001/api/drawingGame', {origins: allowedOrigins});
        console.log(this.socket);
        this.socket.on('connect', () => {
            console.log(this.socket);
        });

        this.socket.on('getRoom', (roomName) => {
            console.log(roomName);
            // join the room
            this.socket.join();
            // change state in reducer -> pending
            // loading,
        });

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

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                        </div>

                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            <button>waiting</button>
                            <button onClick={this.handleStart}>start</button>
                            <button>exit</button>
                        </div>

                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                        </div>
                    </div>
                </div>
                // <div>
                //     <button>waiting</button>
                //     <button onClick={this.handleStart}>start</button>
                //     <button>exit</button>
                // </div>
            );
        } else {
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



