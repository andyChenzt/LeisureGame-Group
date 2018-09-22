import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../css/Login.css";
import { connect } from 'react-redux';
import { login, saveUserInfo } from '../../actions/userActions'

class Login extends Component {
   
    componentWillMount = () => {
        console.log("will mout", this.props);
        if(this.props.isLogin) {
            this.props.history.push('/Home');
        }
    }

    handleSubmit = (e) => {
        console.log("clicked login");
        e.preventDefault();
        const user = {
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }

        axios.post('/api/account/login', user).then(res => {
            console.log("login success");
            console.log(this.props);
            const userInfo = res.data.user;
            console.log(userInfo);
            this.props.doLogin();
            this.props.saveUserInfo(userInfo);
            
            this.props.history.push('/Home');
        }).catch((error) => {
            console.log("err");
            console.log(error.response);
        });
        // this.props.history.push('/Home');
    }

    render() {
        console.log(this.props);
        const { onSubmitClick } = this.props;
        return (
            <div className="App-Draw">
                <div className="App-Form" >
                    <form>
                        <input className="App-ID" placeholder="EMAIL" 
                            ref="email"
                            onChange={this.handleChangeID} />

                        <input className="App-Password" placeholder="PASSWORD"
                            ref="password"
                            onChange={this.handleChangePassword}
                            type="password" />
                        <button className="App-Button" type="submit" onClick={this.handleSubmit}>
                            Login
                        </button>

                        <button type="submit" onClick={this.handleGoToRegister}>
                            Do no have account? Register now
                        </button>
                       
                    </form>
                </div>
            </div>

        );
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) },
        saveUserInfo: (userInfo) => { dispatch(saveUserInfo(userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
