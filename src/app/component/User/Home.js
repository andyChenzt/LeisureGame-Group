import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "../../css/App.css";
import { logout } from '../../actions/validateActions'

class Home extends Component {

    componentWillMount = () => {
        console.log("will mount");
        if(!this.props.isLogin) {
            this.props.history.push('/');
        }
    }

    handleLogout = (e) => {
        console.log("clicked");
        e.preventDefault();
        this.props.doLogout();
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="App-Draw">
                    <h1>  User Information in this page</h1>
                    <h1>  Logout in this page</h1>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => {dispatch(login())},
        doLogout: () => {dispatch(logout())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

