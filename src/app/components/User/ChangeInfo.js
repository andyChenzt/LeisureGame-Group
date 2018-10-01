import React, { Component } from 'react';
import "../../../../public/css/UserInfo.css";
import usericon from "../../assert/image/usericon1.png";

class ChangeInfo extends Component {	

	render() {
		return (
	        <div>
	        	<h2>change info</h2>
	            <h3>{this.props.user.info.nickName}</h3>
	            <input ref="nickName" value={this.props.user.info.nickName} />
	        </div>
	    );
	}
	
}

export default ChangeInfo;
