import React, { Component } from 'react';
import "../css/App.css";


export default class NavigationBar extends Component {
    render() {
        return (

            <div className="App-bar">
                <ul className="App-ul">
                    <li className="App-li"><a className="App-link" href="#home">Home</a></li>
                    <li className="App-li"><a className="App-link" href="#gane1">Game1</a></li>
                    <li className="App-li"><a className="App-link" href="#game2">Game2</a></li>
                    <li className="App-li"><a className="App-link" href="#personal information">Personal Information</a></li>
                    <li className="App-li"><a className="App-link" href="#score">Score</a></li>
                </ul>
            </div>
        );
    }
}