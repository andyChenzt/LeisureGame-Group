import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../../../public/css/App.css";
import usericon from "../../assert/image/usericon1.png";
import { connect } from 'react-redux';
import axios from 'axios';
import { updateInfo, backChangeInfo } from '../../actions/userActions'

class ChangeInfo extends Component {	
    constructor() {
        super();
        this.state = {
            newFirstName: "",
            newLastName: "",
            newNickName: "",
            newEmail: ""
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLatNameChange = this.handleLatNameChange.bind(this);
        this.handleNickNameChange = this.handleNickNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

	handleSave = (e) => {
		console.log("save clicked");
		var changeFirstName = this.state.newFirstName;
		var changeLastName = this.state.newLastName;
		var changeNickName = this.state.newNickName;
		var changeEmailName = this.state.newEmail;
		if(changeFirstName === "") {
            console.log("no change");
			changeFirstName = this.props.user.firstName;
		}
		if(changeLastName === "") {
            console.log("no change");
			changeLastName = this.props.user.lastName;
		}
		if(changeNickName === "") {
            console.log("no change");
			changeNickName = this.props.user.nickName;
		}
		if(changeEmailName === "") {
            console.log("no change");
			changeEmailName = this.props.user.email;
		}

        const newInfo = {
        	"firstName": changeFirstName,
		    "lastName": changeLastName,
		    "nickName": changeNickName,
		    "email": changeEmailName
        }

        const token = localStorage.getItem('token');
        const config = {
        	 headers: {'Authorization': "bearer " + token},
        }
        console.log(config);
        axios.put('/api/account/' + this.props.userID, newInfo, config).then(res => {
            const userInfo = res.data.user;
            this.props.updateInfo(userInfo);
            this.props.backChangeInfo();
        }).catch((error) => {
        });
	}

    handleFirstNameChange = (e) => {
        this.setState({
            newFirstName: e.target.value
        });
    }

    handleLatNameChange = (e) => {
        this.setState({
            newLastName: e.target.value
        });
    }

    handleNickNameChange = (e) => {
        this.setState({
            newNickName: e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            newEmail: e.target.value
        });
    }

	render() {
		return (
			<div>
                <h3 className="title">Hello  {this.props.user.nickName}</h3>
                <h3 className="title">Please change your information.</h3>
                <h5 className="title">(Leave blank if you do not want to change ^_^)</h5>
                <br/>
				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">First Name: {this.props.user.firstName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="firstName" 
                            onChange={this.handleFirstNameChange}
                            ref="changeFirstName" value={this.state.newFirstName} />
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Last Name: {this.props.user.lastName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="lastName" 
                            onChange={this.handleLatNameChange}
                            ref="changeLastName" value={this.state.newLastName}/>
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Nick Name: {this.props.user.nickName}</span>
                    </div>
					<input type="text" className="form-control" placeholder="nickName" 
                            onChange={this.handleNickNameChange}
                            ref="changeNickName" value={this.state.newNickName} />
				</div>

				<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email: {this.props.user.email}</span>
                    </div>
					<input type="text" className="form-control" placeholder="email" 
                            onChange={this.handleEmailChange}
                            ref="changeEmail" value={this.state.newEmail} />
				</div>
				<button className="btn btn-danger" onClick={this.handleSave}>Save</button>

            </div>
	    );
	}
	
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        user: state.userReducer.user,
        userID: state.userReducer.id,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	updateInfo: (newInfo) => { dispatch(updateInfo(newInfo)) },
    	backChangeInfo: () => { dispatch(backChangeInfo()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
