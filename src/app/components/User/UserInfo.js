import React, { Component } from 'react';
import "../../../../public/css/UserInfo.css";
import usericon from "../../assert/image/usericon1.png";

const UserInfo = (props) => {
	return (

        <div>
            <h1 className="title">  User Information: </h1>
            <br/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">First Name: {props.user.firstName}</li>
                <li className="list-group-item">Last Name: {props.user.lastName}</li>
                <li className="list-group-item">Nick Name: {props.user.nickName}</li>
                <li className="list-group-item">Email: {props.user.email}</li>
            </ul>

        </div>
    );
}

export default UserInfo;



