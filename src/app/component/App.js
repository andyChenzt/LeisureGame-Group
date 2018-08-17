import React, { Component } from 'react';
import Head from './Head';
import Foot from './Foot';
import Draw from './Draw';
import User from "./UserInfo";
import OtherUser from "./OtherUser";


class App extends Component {
	construct() {
	}

    render() {
        return (
            <div className="App">
                <Head />
                {/*<p> app </p>*/}
                <div className="App-test">
                    <User />
                    <OtherUser />
                    <Draw />
                </div>
                <Foot />
            </div>
        );
    }
}

export default App;