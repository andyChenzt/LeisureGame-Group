import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../css/Login.css";
import { connect } from 'react-redux';
import {  } from '../../actions/userActions'

class Register extends Component {
    handleRegister = (e) => {
        console.log("clicked login");
        console.log(this.props);
        // prevent page reloding 
        e.preventDefault();

    }

    render() {
        console.log(this.props);
        const { onSubmitClick } = this.props;
        return (
            <div className="App-Draw">
                <div className="App-Form" >
                    <form>
                        <input className="App-ID" placeholder="EMAIL" 
                                // value={this.state.ID} 
                                ref="email"
                                onChange={this.handleChangeID} />

                        {/*<div>{this.state.ID}</div>*/}

                        <input className="App-Password" placeholder="Password"
                               // value={this.state.Password} 
                               ref="password"
                               onChange={this.handleChangePassword}
                               type="password" />
                        // {/*<div>{this.state.Password}</div>*/}
                        // <button className="App-Button" type="submit"
                        //         onClick={this.handleSubmit}>
                        //     Login
                        // </button>
                        <button type="submit"
                                onClick={this.handleRegister}>
                            Register
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
        saveUserInfo: (userInfo) => { dispatch(saveUserInfo(userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
