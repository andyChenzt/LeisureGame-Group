import React, { Component } from 'react';
import usericon from "./image/usericon1.png";

export default class User extends Component {
    render() {
        return (

            <div className="App-position">
                <img className="App-icon" src={usericon} alt="usericon" />
                <a name="username" className="App-userinfo">Hello Petter</a>
                <p className="App-userinfo">Your Score: 9999999</p>
            </div>
        );
    }
}

