import React, { Component } from 'react';
import "../../../../public/css/UserInfo.css";
import usericon from "../../assert/image/usericon1.png";

const UserInfo = (props) => {
	return (
        <div>
            <h3>{props.user.info.nickName}</h3>
            <h3>drawingGame</h3>

        </div>
    );
}

export default UserInfo;



