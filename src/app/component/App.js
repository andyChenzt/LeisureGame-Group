import React, { Component } from 'react';
import Head from './Head';
import Foot from './Foot';
import Draw from './Draw';
import User from "./UserInfo";
import OtherUser from "./OtherUser";
import NavigationBar from "./NavigationBar";
import Login from "./Login";
import GameScoreInfo from "./GameScoreInfo";
import GameScoreInfoList from "./GameScoreInfoList";

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
                <NavigationBar />
                {/*<p> app </p>*/}
                <div className="App-test">
                    <User />
                    <OtherUser />
                    <Draw />
                    
                </div>
                <Foot />
                <Login />
                {/* < Game Score register in Score list  << 
          onCreate={this.handleCreateScoreList}
        /> */}
        <GameScoreInfoList data={this.state.GameScoreInformation}/>
            </div>
     
        );
    }
}

export default App;