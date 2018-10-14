import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import Alert from "../Alert/Alert";
import axios from 'axios';
import "../../../../public/css/Login.css";
import { connect } from 'react-redux';
import { login, saveUserInfo, showAlert, dismissAlert } from '../../actions/userActions'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            emailInput: "",
            passwordInput: ""
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
   
    componentWillMount = () => {
        if(this.props.isLogin) {
            this.props.history.push('/Home');
        }
    }

    handleChangeEmail = (e) => {
        this.setState({
            emailInput: e.target.value
        });
    }

    handleChangePassword = (e) => {
        this.setState({
            passwordInput: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const inputEmail = this.state.emailInput;
        const inputPassword = this.state.passwordInput;
        if(inputEmail === "" || inputPassword === "") {
            this.props.showAlert("Invaild username or password");
            setTimeout(() => {
                this.props.dismissAlert();
            }, 2000);
            return;
        }
        const user = {
            email: inputEmail,
            password: inputPassword
        }

        axios.post('/api/account/login', user).then(res => {
            const userInfo = res.data.user;
            const token = res.data.token;
            const id = res.data.id;
            
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userInfo.info));
            localStorage.setItem('id', id);
            this.props.doLogin();
            this.props.saveUserInfo(userInfo.info, id, token);
            const nickName = userInfo.info.nickName;
            this.props.history.push('/Home/' + nickName);
        }).catch((error) => {
            if(error.response.status === 403) {
                this.props.showAlert("Invaild username or password");
                setTimeout(() => {
                    this.props.dismissAlert();
                }, 2000);
            }
        });
    }

    handleGoToRegister = (e) => {
        e.preventDefault(); 
        this.props.history.push('/register');
    }

    render() {
        const { onSubmitClick } = this.props;
        const alert = this.props.isError ? <Alert msg={this.props.errorMsg}/> : <div></div> ;
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                    </div>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div className="container">
                            <br/>
                            <h2 className="title">START YOUR JOY TIME</h2>
                            <h5 className="title">PLAY GAMES? LOGIN PLEASE</h5>
                            <br/>
                            <br/>
                            {alert}
                            <form>
                                <div className="form-group">
                                    <label className="text" htmlFor="usr">Name:</label>
                                    <input type="text" className="form-control" id="usr" placeholder="EMAIL"
                                           ref="email"
                                           onChange={this.handleChangeEmail} required title="Email address is needed"/>
                                </div>
                                <div className="form-group">
                                    <label className="text" htmlFor="pwd">Password:</label>
                                    <input className="form-control" id="pwd" placeholder="PASSWORD"
                                           ref="password"
                                           onChange={this.handleChangePassword}
                                           type="password" required title="Password is needed"/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <br/>
                                    <button  type="submit" onClick={this.handleGoToRegister}>
                                        Do no have account? Register now
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                    </div>
                </div>
            </div>
            
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        isError: state.userReducer.isError,
        loginFailedMsg: state.userReducer.loginFailedMsg,
        errorMsg: state.userReducer.errorMsg
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) },
        saveUserInfo: (userInfo, id) => { dispatch(saveUserInfo(userInfo, id)) },
        showAlert: (errMsg) => { dispatch(showAlert(errMsg)) },
        dismissAlert: () => { dispatch(dismissAlert()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
