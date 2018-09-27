import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../components/Game/DrawSketch';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import "../css/Draw.css";
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
                <div>   
                    <button>waiting</button>
                    <button onClick={this.handleStart}>start</button>
                    <button>exit</button>
                </div>
            );
        } else {
            return (
                <div>   
                    <div className="App-Draw">
                        <P5Wrapper sketch={sketch} />
                    </div>
                    <div>
                        <input></input>
                        <button>send</button>
                    </div>
                    
                    <div>
                        <User />
                        <OtherUser />
                    </div>
                </div>
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



