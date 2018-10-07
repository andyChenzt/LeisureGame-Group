import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../../../public/css/App.css";
import usericon from "../../assert/image/usericon1.png";
import { connect } from 'react-redux';
import axios from 'axios';
import { updateInfo, backChangeInfo } from '../../actions/userActions'

class ChangeInfo extends Component {	

	handleSave = (e) => {
		console.log("save clicked");
		var changeFirstName = ReactDOM.findDOMNode(this.refs.changeFirstName).value;
		var changeLastName = ReactDOM.findDOMNode(this.refs.changeLastName).value;
		var changeNickName = ReactDOM.findDOMNode(this.refs.changeNickName).value;
		var changeEmailName = ReactDOM.findDOMNode(this.refs.changeEmail).value;
		if(changeFirstName == "") {
			changeFirstName = this.props.user.firstName;
		}
		if(changeLastName === "") {
			changeLastName = this.props.user.changeLastName;
		}
		if(changeNickName === "") {
			changeNickName = this.props.user.changeNickName;
		}
		if(changeEmailName === "") {
			changeEmailName = this.props.user.changeEmailName;
		}
        console.log(changeFirstName);
        console.log(changeLastName);
        console.log(changeNickName);
        console.log(changeEmailName);
        console.log(this.props.userID);
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
            console.log(res.data);
            const userInfo = res.data.user;
            console.log(userInfo);
            console.log(this.props.user.nickName);
            this.props.updateInfo(userInfo);
            this.props.backChangeInfo();
        }).catch((error) => {
            console.log("err");
            console.log(error);
        });
	}

	render() {
		return (
			<div>
                <h3 className="title">Hello  {this.props.user.nickName}</h3>
                <h3 className="title">Please change your information.</h3>
                <br/>
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
