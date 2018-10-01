import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../../../public/css/Login.css";
import { connect } from 'react-redux';
import { login, saveUserInfo } from '../../actions/userActions'

class Register extends Component {
    constructor() {
        super();

    }

    componentWillMount = () => {
        console.log("will mout register");
        if(this.props.isLogin) {
            this.props.history.push('/Home');
        }
    }

    handleChangeID = (e) => {

    }

    handleRegister = (e) => {
        console.log("clicked login");
        console.log(this.props);
        e.preventDefault();
        let newUser = {
            firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
            lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
            nickName: ReactDOM.findDOMNode(this.refs.nickName).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value,
        }
        console.log(newUser);
        axios.post('/api/account/signup', newUser).then(res => {
            console.log("registered");
            console.log(res.data);
            const userInfo = res.data.user;
            console.log(userInfo);
            this.props.doLogin();
            this.props.saveUserInfo({info: userInfo});
            this.props.history.push('/Home');
        }).catch((error) => {
            console.log("err");
            console.log(error.response);
        });
    }

    render() {

        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="container mt-3">
                            <h2 class="title">Join us NOW!</h2>
                            <br/>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">First Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="First Name" ref="firstName"
                                           onChange={this.handleChangeID}/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Last Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Last Name" ref="lastName"
                                           onChange={this.handleChangeID}/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Nick Name</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nick Name" ref="nickName"
                                           onChange={this.handleChangeID}/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">eMail</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="eMail" ref="email"
                                           onChange={this.handleChangeID}/>
                                </div>
                            </form>

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password" ref="password"
                                           onChange={this.handleChangePassword}/>
                                </div>
                            </form>
                            <div >
                                <button className="btn btn-primary" type="submit" onClick={this.handleRegister}>
                                    Register
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                    </div>
                </div>
            </div>
            // <div className="App-Draw">
            //     <div className="App-Form" >
            //         <form>
            //             <input className="" placeholder="First Name"
            //                 ref="firstName"
            //                 onChange={this.handleChangeID} />
            //
            //             <input className="" placeholder="Last Name"
            //                 ref="lastName"
            //                 onChange={this.handleChangeID} />
            //
            //             <input className="" placeholder="Nick Name"
            //                 ref="nickName"
            //                 onChange={this.handleChangeID} />
            //
            //             <input className="" placeholder="eMail"
            //                 ref="email"
            //                 onChange={this.handleChangeID} />
            //
            //             <input className="" placeholder="Password"
            //                 ref="password"
            //                 onChange={this.handleChangePassword}
            //                 type="password" />
            //
            //              <button type="submit" onClick={this.handleRegister}>
            //                 Register
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
