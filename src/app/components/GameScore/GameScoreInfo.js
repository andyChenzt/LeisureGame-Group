import React, { Component } from 'react';


const GameScoreInfo = () => {
    // static defaultProps = {
    //     info: {
    //         ID: 'lighters0808@gmail.com',
    //         Score: '12345678',
    //         Index: 0
    //     }
    // }

    const { ID, Score, Index } = this.props.info;

    return (
        <div className="App-GameScore">
            <div><b>{ID}</b></div>
            <div>{Score}</div>
        </div>
    );
}

export default GameScoreInfo;

