import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../public/css/NavigationBar.css";


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                    {/*<img src={header} alt="header" style="width:400px;"/>*/}

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
                        {/*<li className="nav-item">*/}
                        {/*<a className="nav-link" href="/score">Score</a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
        );
    }
}