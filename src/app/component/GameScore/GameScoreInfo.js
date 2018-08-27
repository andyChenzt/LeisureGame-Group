import React, { Component } from 'react';



export default class GameScoreInfo extends Component {
    static defaultProps = {
        info: {
          ID: 'lighters0808@gmail.com',
          Score: '12345678',
          Index: 0
        }
      }
    
      render() {
        // const style = {
        //   border: '1px solid black',
        //   padding: '8px',
        //   margin: '8px'
        // };
    
        const {
            ID, Score, Index
        } = this.props.info;
    
        return (
          <div className="App-GameScore">
            <div><b>{ID}</b></div>
            <div>{Score}</div>
          </div>
        );
      }
}