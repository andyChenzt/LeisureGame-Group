import React, { Component } from 'react';
import header from "./image/header.png";

export default class Head extends Component {
    render() {
        return (

            <div>
                <header className="App-header">
                    <img src={header} alt="header" />
                </header>
            </div>
        );
    }
}