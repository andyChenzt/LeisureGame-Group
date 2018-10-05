import React, { Component } from 'react';
import "../../../../public/css/Head.css";
import header from "../../assert/image/header.png";


const Head = () => {
	return (
        <div>
            <header className="App-header">
                <img src={header} alt="header" />
            </header>
        </div>
    );
}

export default Head;