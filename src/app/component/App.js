import React, { Component } from 'react';
import './App.css';
import Head from "./Head";
import User from "./UserInfo";
import Foot from "./Foot";

class App extends Component {
	construct() {
	}

    render() {
        return (
            <div className="App">
                <Head />
                <div className="App-test">
                    <User />
                </div>
                <Foot />
            </div>
        );
    }
}

export default App;