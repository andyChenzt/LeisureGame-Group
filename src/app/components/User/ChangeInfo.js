import React, { Component } from 'react';
import "../../../../public/css/App.css";
import usericon from "../../assert/image/usericon1.png";

class ChangeInfo extends Component {	

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
					<input type="text" className="form-control" placeholder="firstName" aria-label="firstName"
						   aria-describedby="basic-addon1" value={this.props.user.firstName}/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Last Name: {this.props.user.lastName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="lastName" aria-label="lastName"
						   aria-describedby="basic-addon1" value={this.props.user.lastName}/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Nick Name: {this.props.user.nickName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="nickName" aria-label="nickName"
						   aria-describedby="basic-addon1" value={this.props.user.nickName}/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email: {this.props.user.email}</span>
                    </div>
					<input type="text" className="form-control" placeholder="email" aria-label="email"
						   aria-describedby="basic-addon1" value={this.props.user.email}/>
				</div>
            </div>
	    );
	}
	
}

export default ChangeInfo;
