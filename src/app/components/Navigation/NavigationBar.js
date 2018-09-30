import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../public/css/NavigationBar.css";
import header from "../../assert/image/header.png";



export default class NavigationBar extends Component {
    render() {
        return (

            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/Home">
                    {/*<img src={require[header]} alt="header" style="width:40px;"/>*/}
                </a>

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a className="nav-link" href="/Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/drawing">Game1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/snake">Game2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/score">Score</a>
                    </li>
                </ul>
            </nav>

            </div>
        );
    }
}