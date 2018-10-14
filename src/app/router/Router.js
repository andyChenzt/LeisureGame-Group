import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import Login from '../components/Landing/Login';
import Register from '../components/Landing/Register';
import {Draw} from '../containers/Draw';
import Snake from '../containers/Snake';
import Home from "../containers/Home";

const MainRouter = () => {
	return (
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
        );
}

export default MainRouter;