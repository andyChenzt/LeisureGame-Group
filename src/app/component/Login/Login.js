import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor() {
      super();
      this.state = {
        Name:'',
        Password:'',
        saved: false,
        msg: "save"
      } 
      this.handleChangeID = this.handleChangeID.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeID = (e)=> {
        this.setState({
            Name: e.target.value
        })
    }
    handleChangePassword = (e)=> {
        this.setState({
            Password: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log("clicked");
        // prevent page reloding 
        e.preventDefault();
        // send state to parent through onCreate
        // this.props.onCreate(this.state);
        // initialize state
        this.setState({
         ID: '',
         Password: '',
         saved: true,
         msg: "saved"
        })
        console.log(this.state);
        axios.post('/api/account/signup', { firstName: this.state.Name }).then(res => {
            console.log(res);
            console.log(res.data);
        });
      }
    render() {
        return (

         <form >
            <input
              placeholder="ID"
              value={this.state.ID}
              onChange={this.handleChangeID}
              //style={styles.input}
            />
            // <div>{this.state.ID}</div>
            
             <input
                placeholder="Password"
                value={this.state.Password}
                onChange={this.handleChangePassword}
            //   style={styles.input}

             />
            // <div>{this.state.Password}</div>
            <button type="submit" onClick={this.handleSubmit}>{this.state.msg}</button>
         </form>

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