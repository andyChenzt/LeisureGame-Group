import React, { Component } from "react";
import "../../../../public/css/OtherUser.css";
import usericon from "../../assert/image/usericon2.png";

const OtherUser = (props) => {
    
    return (
        <div>
            <img className="App-icon" src={usericon} alt="usericon" />
            <h3 className="App-userinfo">
                {props.user.nickName}
            </h3>
            <p className="App-userinfo">Score: 00000000</p>
        </div>
    );
    
}

export default OtherUser;

