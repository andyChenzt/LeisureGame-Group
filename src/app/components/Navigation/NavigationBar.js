import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../public/css/NavigationBar.css";


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <h2 className="logo" >LeisureGame     </h2>
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link nav-item" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-item" to="/drawing">Drawing [online]</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-item" to="/snake">Lycorexia [standalone]</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}