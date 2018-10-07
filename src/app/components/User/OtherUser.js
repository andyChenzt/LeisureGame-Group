import React, { Component } from "react";
import "../../../../public/css/OtherUser.css";
import usericon from "../../assert/image/usericon2.png";

// same conponent just use same component is ok, just different data
export default class OtherUser extends Component {
    render() {
        return (
            <div>
                <img className="App-icon" src={usericon} alt="usericon" />
                <h3 className="App-userinfo">
                    username
                </h3>
                <p className="App-userinfo">Score: 00000000</p>
            </div>
        );
    }
}


