import React, { Component } from 'react';


const GameScoreInfo = (props) => {
    const { ID, Score, Index } = this.props.info;

    return (
        <div className="App-GameScore">
            <div><b>{ID}</b></div>
            <div>{Score}</div>
        </div>
    );
}

export default GameScoreInfo;

