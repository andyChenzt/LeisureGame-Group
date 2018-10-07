import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Head from '../components/Frame/Head';
import Foot from '../components/Frame/Foot';
import Landing from './LandingPage';
import Login from '../components/Landing/Login';
import Register from '../components/Landing/Register';
import {Draw} from './Draw';
import Snake from './Snake';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import NavigationBar from "../components/Navigation/NavigationBar";
import GameScoreInfo from "../components/GameScore/GameScoreInfo";
import GameScoreInfoList from "../components/GameScore/GameScoreInfoList";
import Home from "../components/User/Home";
import Score from "../components/GameScore/ScorePage";

class App extends Component {
    //GameScore data set and create list function
    Index = 4
    state = {
      GameScoreInformation: [
        {
            Index: 0,
            ID: 'Player1',
            Score: '111111111'
        },
        {
            Index: 1,
            ID: 'Player2',
            Score: '222222222'
        },
        {
            Index: 3,
            ID: 'Player3',
            Score: '33333333333'
        },
        {
            Index: 4,
            ID: 'Player3',
            Score: '4444444444'
          }
      ]
    }
    handleCreateScoreList = (data) => {
        const { GameScoreInformation } = this.state;
        this.setState({
            GameScoreInformation: GameScoreInformation.concat({ Index: this.Index++, ...data })
        })
    }

	construct() {
	}

    // using container to wrap the component
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <NavigationBar />
                        <div className="App-main">
                            <Route exact path='/' component={Login} />   
                            <Route exact path='/register' component={Register} />
                            <Route path='/snake' component={Snake} />
                            <Route path='/drawing' component={Draw} />
                            <Route path='/home' component={Home} />
                        </div>
                    </div>
                        
                </BrowserRouter>

                <Foot />

            </div>
     
        );
    }
}

export default App;