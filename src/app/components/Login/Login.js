import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../css/Login.css";
import { connect } from 'react-redux';
import { login, saveUserInfo } from '../../actions/userActions'

class Login extends Component {
    constructor() {
      super();
      // this.state = {
      //   Email:'',
      //   Password:'',
      //   saved: false,
      //   msg: "save"
      // } 
      // this.handleChangeID = this.handleChangeID.bind(this);
      // this.handleChangePassword = this.handleChangePassword.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChangeID = (e)=> {
    //     this.setState({
    //         Email: e.target.value
    //     })
    // }
    // handleChangePassword = (e)=> {
    //     this.setState({
    //         Password: e.target.value
    //     })
    // }
    componentWillMount = () => {
        console.log("will mout");
        if(this.props.isLogin) {
            this.props.history.push('/Home');
        }
    }

    handleSubmit = (e) => {
        console.log("clicked login");
        e.preventDefault();
        
        // const email = ReactDOM.findDOMNode(this.refs.email).value;
        // const password = ReactDOM.findDOMNode(this.refs.password).value;
        // console.log(email, password);
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

        
        // this.props.history.push('/Home');
      }

    handleRegister = (e) => {
        console.log("clicked login");
        console.log(this.props);
        // prevent page reloding 
        e.preventDefault();

    }
    // componentDidMount() {
    //     // check is login or not, if not redirect to login page, 
    //     console.log("did mout");
    //     console.log(this.props);
    // }


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
                        {/*<div>{this.state.Password}</div>*/}
                        <button className="App-Button" type="submit"
                                onClick={this.handleSubmit}>
                            Login
                        </button>
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
        doLogin: () => { dispatch(login()) },
        saveUserInfo: (userInfo) => { dispatch(saveUserInfo(userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
