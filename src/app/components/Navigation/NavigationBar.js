import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../public/css/NavigationBar.css";


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <h2 className="logo" >LeisureGame     </h2>
                    {/*<img src={header} alt="header" style="width:400px;"/>*/}

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/Home">HomePage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/drawing">Drawing [online]</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/snake">Lycorexia [standalone]</a>
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