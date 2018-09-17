import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "../../css/Login.css";
import { connect } from 'react-redux';
import { login } from '../../actions/validateActions'

class Login extends Component {
    constructor() {
      super();
      this.state = {
        Email:'',
        Password:'',
        saved: false,
        msg: "save"
      } 
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
        console.log("clicked");
        console.log(this.props);
        // prevent page reloding 
        e.preventDefault();
        // send state to parent through onCreate
        // this.props.onCreate(this.state);
        // initialize state
        // this.setState({
        //  Email: '',
        //  Password: '',
        //  saved: true,
        //  msg: "saved"
        // })
        // console.log(this.state);
        // axios.post('/api/account/signup', { firstName: this.state.Email }).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // });

        this.props.doLogin();
        this.props.history.push('/Home');
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
                                onChange={this.handleChangeID} />

                        {/*<div>{this.state.ID}</div>*/}

                        <input className="App-Password" placeholder="Password"
                               // value={this.state.Password} 
                               onChange={this.handleChangePassword}
                               type="password" />
                        {/*<div>{this.state.Password}</div>*/}
                        <button className="App-Button" type="submit"
                                onClick={this.handleSubmit}>
                            Login
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
        doLogin: () => {dispatch(login())},
        doLogout: () => {dispatch(logout())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
