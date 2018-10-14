import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import Alert from "../Alert/Alert";
import axios from 'axios';
import "../../../../public/css/Login.css";
import { connect } from 'react-redux';
import { login, saveUserInfo, showAlert, dismissAlert } from '../../actions/userActions'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstNameInput: "",
            lastNameInput: "",
            nickNameInput: "",
            emailInput: "",
            passwordInput: "",
            reEnterPasswordInput: "",
        };
    }

    componentWillMount = () => {
        console.log("will mout register");
        if(this.props.isLogin) {
            this.props.history.push('/Home');
        }
    }

    handleChangeFirstNameInput = (e) => {
        this.setState({
            firstNameInput: e.target.value
        });
    }

    handleChangeLastNameInput = (e) => {
        this.setState({
            lastNameInput: e.target.value
        });
    }

    handleChangeNickNameInput = (e) => {
        this.setState({
            nickNameInput: e.target.value
        });
    }

    handleChangeEmailInput = (e) => {
        this.setState({
            emailInput: e.target.value
        });
    }

    handleChangePasswordInput = (e) => {
        this.setState({
            passwordInput: e.target.value
        });
    }

    handleChangeReEnterPasswordInput = (e) => {
        this.setState({
            reEnterPasswordInput: e.target.value
        });
    }

    handleRegister = (e) => {
        e.preventDefault();
        const inputFirstName = this.state.firstNameInput; 
        const inputLastName = this.state.lastNameInput;
        const inputNickName = this.state.nickNameInput;
        const inputEmail = this.state.emailInput;
        const inputPassword = this.state.passwordInput;
        const inputReEnterPassword = this.state.reEnterPasswordInput;

        if(inputFirstName === "" || inputLastName === "" || inputNickName === "" ||
            inputEmail === "" || inputPassword === "" || inputReEnterPassword === "" ) {
            this.props.showAlert("Please Input all required fields.");
            setTimeout(() => {
                this.props.dismissAlert();
            }, 2000);
            return;
        }

        // vadilate email
        if(!this.validateEmail(inputEmail)) {
            this.props.showAlert("Email is Invalid .");
            setTimeout(() => {
                this.props.dismissAlert();
            }, 2000);
            return;
        }

        if(inputPassword !== inputReEnterPassword) {
            console.log("different");
            this.props.showAlert("Password and Re-Enter Password is different.");
            setTimeout(() => {
                this.props.dismissAlert();
            }, 2000);
            return;
        }

        let newUser = {
            firstName: inputFirstName,
            lastName: inputLastName,
            nickName: inputNickName,
            email: inputEmail,
            password: inputPassword
        }
        axios.post('/api/account/signup', newUser).then(res => {
            console.log("registered");
            console.log(res.data);
            const userInfo = res.data.user;
            const id = res.data.id;
            const token = res.data.token;
            console.log(userInfo);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userInfo));
            localStorage.setItem('id', id);
            this.props.doLogin();
            this.props.saveUserInfo(userInfo, id);
            this.props.history.push('/Home');
        }).catch((error) => {
            console.log("err");
            console.log(error);
        });
    }

    handleLogin = (e) => {
        this.props.history.push('/');
    }

    validateEmail = (email) => {
        var emailReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        return emailReg.test(email);
    }

    render() {
        const alert = this.props.isError ? <Alert msg={this.props.errorMsg}/> : <div></div> ;

        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="container mt-3">
                            
                            <h2 className="title">Join Us NOW!</h2>
                            <br/>
                            {alert}
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">First Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="First Name" ref="firstName"
                                           onChange={this.handleChangeFirstNameInput} required title="First Name is needed"/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Last Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Last Name" ref="lastName"
                                           onChange={this.handleChangeLastNameInput} required title="Last Name is needed"/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Nick Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nick Name" ref="nickName"
                                           onChange={this.handleChangeNickNameInput} required title="Nick Name is needed"/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">eMail</span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="email" ref="email"
                                           onChange={this.handleChangeEmailInput} pattern=".+@.+" size="30" required
                                           title="Must be a email address"/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password" ref="password"
                                           onChange={this.handleChangePasswordInput} required title="Password is needed"/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Re-Enter Password</span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password" ref="reEnteredPassword"
                                           onChange={this.handleChangeReEnterPasswordInput} required title="Password is needed"/>
                                </div>
                            </form>
                            <div >
                                <button className="btn btn-primary" type="submit" onClick={this.handleRegister}>
                                    Register
                                </button>
                                <button className="btn btn-primary" type="submit" onClick={this.handleLogin}>
                                    Have accout? Login
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

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
        errorMsg: state.userReducer.errorMsg,
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
