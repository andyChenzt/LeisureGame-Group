import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Head from '../components/Frame/Head';
import Foot from '../components/Frame/Foot';
import Landing from './LandingPage';
import Login from '../components/Landing/Login';
import Register from '../components/Landing/Register';
import {Draw} from './Draw';
import Snake from './Snake';
import User from '../components/User/UserInfo';
import OtherUser from '../components/User/OtherUser';
import NavigationBar from '../components/Navigation/NavigationBar';
import GameScoreInfo from '../components/GameScore/GameScoreInfo';
import GameScoreInfoList from '../components/GameScore/GameScoreInfoList';
import Home from '../components/User/Home';
import Score from '../components/GameScore/ScorePage';
import MainRouter from '../router/Router';

class App extends Component {

    // using container to wrap the component
    render() {
        return (
            <div className="App">
            
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>

                <Foot />

            </div>
     
        );
    }
}

export default App;