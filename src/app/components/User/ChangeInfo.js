import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../../../public/css/App.css";
import usericon from "../../assert/image/usericon1.png";

class ChangeInfo extends Component {	

	handleSave = (e) => {
		console.log("save clicked");
		const changeFirstName = ReactDOM.findDOMNode(this.refs.changeFirstName).value;
        console.log(changeFirstName);
	}

	render() {
		return (
			<div>
                <h3 className="title">Hello  {this.props.user.nickName}</h3>
                <h3 className="title">Please change your information.</h3>
                <br/>
				{/*<h2>change info</h2>*/}
				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">First Name: {this.props.user.firstName}</span>
                    </div>
					<input type="text" className="form-control" ref="changeFirstName" placeholder="firstName"/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Last Name: {this.props.user.lastName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="lastName" ref="changeLastName"/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Nick Name: {this.props.user.nickName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="nickName" ref="changeNickName" />
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email: {this.props.user.email}</span>
                    </div>
					<input type="text" className="form-control" placeholder="email" ref="changeEmail"/>
				</div>
				<button className="btn btn-danger" onClick={this.handleSave}>save</button>

            </div>
	    );
	}
	
}

export default ChangeInfo;
