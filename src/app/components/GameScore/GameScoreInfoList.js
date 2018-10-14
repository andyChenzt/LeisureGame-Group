import React, { Component } from 'react';
import GameScoreInfo from './GameScoreInfo';

const GameScoreInfoList = (props) => {
   
    const { data } = this.props;
    const ScoreList = data.map(
        info => (<GameScoreInfo key={info.Index} info={info}/>)
    );

    return (
        <div className="App-GameScorelist">
            High Game Score !
            {ScoreList}    
        </div>
    );
    
}

export default GameScoreInfoList;

