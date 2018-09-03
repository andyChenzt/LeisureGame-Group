import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import sketch from "../Game/DrawSketch";
import User from "../User/UserInfo";
import OtherUser from "../User/OtherUser";


export default class Login extends Component {
    state = {
        ID:'',
        Password:''
    }
    handleChangeID = (e)=> {
        this.setState({
            ID: e.target.value
        })
    }
    handleChangePassword = (e)=> {
        this.setState({
            Password: e.target.value
        })
    }
    handleSubmit = (e) => {
        // prevent page reloding 
        e.preventDefault();
        // send state to parent through onCreate
        this.props.onCreate(this.state);
        // initialize state
        this.setState({
         ID: '',
         Password: ''
        })
      }
    render() {
        return (
            <div className="App-Draw">
                <div className="App-Form" >
                    <form>
                            <input className="App-ID"
                                placeholder="ID"
                                value={this.state.ID}
                                onChange={this.handleChangeID}
                                //style={styles.input}
                            />

                        {/*<div>{this.state.ID}</div>*/}

                        <input className="App-Password"
                            placeholder="Password"
                            value={this.state.Password}
                            onChange={this.handleChangePassword}
                               type="password"
                            //   style={styles.input}

                        />
                        {/*<div>{this.state.Password}</div>*/}
                        <button className="App-Button" type="submit">Send</button>

                    </form>
                </div>
            </div>


        );
    }
}

// const styles = StyleSheet.create({
//     container : {
//      padding: 20
//     },
//     input: { 
//         height : 40,
//         backgorundColor: 'rgba(255,255,255,0,2)',
//         marginBottom:20,
//         color: '#FFF',
//         paddingHorizontal: 10
//     }
// });