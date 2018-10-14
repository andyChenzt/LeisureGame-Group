import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Head from '../components/Frame/Head';
import Foot from '../components/Frame/Foot';
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