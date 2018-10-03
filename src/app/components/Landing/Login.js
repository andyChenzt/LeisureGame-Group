import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../../../public/css/Login.css";
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
            console.log(res.data);
            const userInfo = res.data.user;
            const token = res.data.token;
            console.log("userinfo",userInfo);
            localStorage.setItem('token', token);

            this.props.doLogin();
            this.props.saveUserInfo(userInfo);
            const nickName = userInfo.nickName;
            console.log("nickName", nickName);
            this.props.history.push('/Home/' + nickName);
        }).catch((error) => {
            console.log("err");
            console.log(error.response);
        });
        // this.props.history.push('/Home');
    }

    handleGoToRegister = (e) => {
        console.log("got go to reigister");
        e.preventDefault(); 
        this.props.history.push('/register');
    }

    render() {
        console.log(this.props);
        const { onSubmitClick } = this.props;
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                    </div>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div className="container">
                            <br/>
                            <h2 class="title">START YOUR JOY TIME</h2>
                            <br/>
                            <br/>

                            {/*<p class="text">The form below contains two input elements; one of type text and one of type*/}
                                {/*password:</p>*/}
                            <form>
                                <div className="form-group">
                                    <label className="text" htmlFor="usr">Name:</label>
                                    <input type="text" className="form-control" id="usr" placeholder="EMAIL: XXX@google.com"
                                           ref="email"
                                           onChange={this.handleChangeID} required title="Email address is needed"/>
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
                        {/*<div className="App-Draw">*/}
                            {/*<div className="App-Form" >*/}
                                {/*<form>*/}
                                    {/*<input type="text" className="App-ID" placeholder="EMAIL"*/}
                                           {/*ref="email"*/}
                                           {/*onChange={this.handleChangeID} />*/}

                                    {/*<input className="App-Password" placeholder="PASSWORD"*/}
                                           {/*ref="password"*/}
                                           {/*onChange={this.handleChangePassword}*/}
                                           {/*type="password" />*/}
                                    {/*<button className="App-Button" type="submit" onClick={this.handleSubmit}>*/}
                                        {/*Login*/}
                                    {/*</button>*/}

                                    {/*<button type="submit" onClick={this.handleGoToRegister}>*/}
                                        {/*Do no have account? Register now*/}
                                    {/*</button>*/}

                                {/*</form>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">

                    </div>
                </div>
            </div>
            // <div className="App-Draw">
            //     <div className="App-Form" >
            //         <form>
            //             <input className="App-ID" placeholder="EMAIL"
            //                 ref="email"
            //                 onChange={this.handleChangeID} />
            //             <input className="App-Password" placeholder="PASSWORD"
            //                 ref="password"
            //                 onChange={this.handleChangePassword}
            //                 type="password" />
            //             <button className="App-Button" type="submit" onClick={this.handleSubmit}>
            //                 Login
            //             </button>
            //
            //             <button type="submit" onClick={this.handleGoToRegister}>
            //                 Do no have account? Register now
            //             </button>
            //
            //         </form>
            //     </div>
            // </div>
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
