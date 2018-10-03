import React, { Component } from 'react';
import "../../../../public/css/UserInfo.css";
import usericon from "../../assert/image/usericon1.png";

class ChangeInfo extends Component {	

	render() {
		return (
	        <div>
	        	<h2>change info</h2>
	            <h3>{this.props.user.nickName}</h3>
	            <input ref="email" value={this.props.user.email} />
	            <input ref="nickName" value={this.props.user.nickName} />
	            <input ref="firstName" value={this.props.user.firstName} />
	            <input ref="lastName" value={this.props.user.lastName} />
	        </div>
	    );
	}
	
}

export default ChangeInfo;
