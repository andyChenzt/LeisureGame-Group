import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Head from '../components/Frame/Head';
import Foot from '../components/Frame/Foot';
import Draw from './Draw';
import Snake from './Snake';
import User from "../components/User/UserInfo";
import OtherUser from "../components/User/OtherUser";
import NavigationBar from "../components/Navigation/NavigationBar";
import Login from "../components/Login/Login";
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
                <Head />
                <BrowserRouter>
                    <div className="App">
                        <NavigationBar />
                        <div className="App-main">
                            <Route exact path='/' component={Login} />   
                            <Route path='/snake' component={Snake} />
                            <Route path='/drawing' component={Draw} />
                            {/*<Route path='/gameScoreInfo' component={GameScoreInfo} />*/}
                            <Route path='/home' component={Home} />
                            <Route path='/score' component={Score} />
                            <Route path='/userInformation' component={Score} />

                        </div>
                    </div>
                </BrowserRouter>
                
                <Foot />
                
                {/* < Game Score register in Score list  << 
          onCreate={this.handleCreateScoreList}
        /> */}

            </div>
     
        );
    }
}

export default App;