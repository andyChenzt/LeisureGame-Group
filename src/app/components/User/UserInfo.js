import React, { Component } from 'react';
import "../../../../public/css/UserInfo.css";
import usericon from "../../assert/image/usericon1.png";

export default class User extends Component {
    render() {
        return (
            <div>
                <img className="App-icon" src={usericon} alt="usericon" />
                <a name="username" className="App-userinfo">Hello Petter</a>
                <p className="App-userinfo">Your Score: 9999999</p>
            </div>
        );
    }
}

