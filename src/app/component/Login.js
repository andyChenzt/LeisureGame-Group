import React, { Component } from 'react';
import {StyleShee,View,TextInput} from 'react';

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
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
         ID: '',
         Password: ''
        })
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
            <div>{this.state.ID}</div>
            
             <input
                placeholder="Password"
                value={this.state.Password}
                onChange={this.handleChangePassword}
            //   style={styles.input}

             />
            <div>{this.state.Password}</div>
            <button type="submit">Send</button>
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