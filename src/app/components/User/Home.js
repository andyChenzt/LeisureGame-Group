import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "../../../../public/css/App.css";
import { logout, removeUserInfo } from '../../actions/userActions'

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
        this.props.removeUserInfo();
        this.props.doLogout();
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                    </div>

                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <h1>  User Information in this page</h1>
                        <h1>  Logout in this page</h1>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>

                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">

                    </div>
                </div>
            </div>
            // <div>
            //     <div className="App-Draw">
            //         <h1>  User Information in this page</h1>
            //         <h1>  Logout in this page</h1>
            //         <button onClick={this.handleLogout}>Logout</button>
            //     </div>
            // </div>
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
        doLogout: () => { dispatch(logout()) },
        removeUserInfo: () => { dispatch(removeUserInfo()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

