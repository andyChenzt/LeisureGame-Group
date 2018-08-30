import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Head from './Frame/Head';
import Foot from './Frame/Foot';
import Draw from './Game/Draw';
import Snake from './Game/Snake';
import User from "./User/UserInfo";
import OtherUser from "./User/OtherUser";
import NavigationBar from "./Navigation/NavigationBar";
import Login from "./Login/Login";
import GameScoreInfo from "./GameScore/GameScoreInfo";
import GameScoreInfoList from "./GameScore/GameScoreInfoList";

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

    render() {
        return (
            <div className="App">
                <Head />
                <BrowserRouter>
                    <div>
                        <NavigationBar />
                        <Route exact path='/' component={Login} />
                        <Route path='/snake' component={Snake} />
                        <Route path='/drawing' component={Draw} />
                        <Route path='/gameScoreInfo' component={GameScoreInfo} />
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