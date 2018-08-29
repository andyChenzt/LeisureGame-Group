import React, { Component } from "react";
import "../../css/OtherUser.css";
import usericon from "../../assert/image/usericon2.png";

// same conponent just use same component is ok, just different data
export default class OtherUser extends Component {
    render() {
        return (
            <div className="App-otheruser">
                <img className="App-icon" src={usericon} alt="usericon" />
                <a name="username" className="App-userinfo">
                I'm other user
                </a>
                <p className="App-userinfo">Score: 0000000</p>
            </div>
        );
    }
}


