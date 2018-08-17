import React, { Component } from 'react';
import Head from './Head';
import Foot from './Foot';
import Draw from './Draw';


class App extends Component {
	construct() {
	}

    render() {
        return (
            <div className="App">
                <Head />
                <p> app </p> 
                <Draw />
                <Foot />
            </div>
        );
    }
}

export default App;