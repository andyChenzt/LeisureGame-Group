import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/App.css";


export default class NavigationBar extends Component {
    render() {
        return (

            <div className="App-bar">
                <ul className="App-ul">
                   <li className="App-li"><NavLink className="App-link" to="/Home">Home</NavLink></li>
                    <li className="App-li"><NavLink className="App-link" to="/drawing">Game1</NavLink></li>
                    <li className="App-li"><NavLink className="App-link" to="/snake">Game2</NavLink></li>
                    {/*<li className="App-li"><NavLink className="App-link" to="/userInformation">Personal Information</NavLink></li>*/}
                    <li className="App-li"><NavLink className="App-link" to="/score">Score</NavLink></li>
                </ul>
            </div>
        );
    }
}