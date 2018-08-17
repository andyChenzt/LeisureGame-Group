import React, { Component } from 'react';
import Head from './Head';
import Foot from './Foot';
import Draw from './Draw';
import User from "./UserInfo";
import OtherUser from "./OtherUser";
import NavigationBar from "./NavigationBar";

class App extends Component {
	construct() {
	}

    render() {
        return (
            <div className="App">
                <Head />
                <NavigationBar />
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