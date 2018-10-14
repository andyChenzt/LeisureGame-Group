import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../../public/css/Login.css";
import Login from "../components/Landing/Login";
import Register from '../components/Landing/Register';
import { connect } from 'react-redux';
import { login, saveUserInfo } from '../actions/userActions';

class Landing extends Component {
    constructor() {
        super();
    }

    componentWillMount = () => {
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
            const userInfo = res.data.user;
            console.log(userInfo);
            this.props.doLogin();
            this.props.saveUserInfo(userInfo);
            
            this.props.history.push('/Home');
        }).catch((error) => {
            console.log("err");
            console.log(error.response.data);
        });

    }

    handleRegister = (e) => {
        console.log("clicked login");
        console.log(this.props);
        // prevent page reloding 
        e.preventDefault();
    }


    render() {
        console.log(this.props);
        const { onSubmitClick } = this.props;
        const component = this.props.isRegister ? <Register /> : <Login handleSubmit={this.handleSubmit}/>;

        return (
            <div>
                {component}
                <button type="submit" onClick={this.handleRegister}>
                    Do no have account? Register now
                </button>
            </div>
            
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        isRegister: state.userReducer.isRegister,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) },
        saveUserInfo: (userInfo) => { dispatch(saveUserInfo(userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);