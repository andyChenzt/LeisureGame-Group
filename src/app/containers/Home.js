import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "../../../public/css/App.css";
import { login, logout, removeUserInfo, goChangeInfo, backChangeInfo, saveUserInfo } from '../actions/userActions';
import UserInfo from '../components/User/UserInfo';
import ChangeInfo from '../components/User/ChangeInfo';

class Home extends Component {

    componentWillMount = () => {
        const token = localStorage.getItem('token');
        if(!token) {
            this.props.history.push('/');
        } else {
            const user = localStorage.getItem('user');
            const id = localStorage.getItem('id');
            this.props.saveUserInfo(JSON.parse(user), id, token);
            this.props.doLogin();
        }
        
    }

    // handle logout
    handleLogout = (e) => {
        e.preventDefault();
        this.props.removeUserInfo();
        this.props.doLogout();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        this.props.history.push('/');
    }

    handleChangeButton = (e) => {
        e.preventDefault();
        if(this.props.isChangeInfo) {
            this.props.backChangeInfo();
        } else {
            this.props.goToChangeInfo();
        }
    }

    render() {
        const component = this.props.isChangeInfo ? <ChangeInfo user={this.props.user}/> 
                                                : <UserInfo user={this.props.user}/>;
        const backChangeBtn = this.props.isChangeInfo ? "Back" : "Change";
        const logoutSaveBtn = this.props.isChangeInfo ? "Save" : "Logout";

        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <br/>
                        <br/>

                        {component}
                        <br/>
                        <button className="btn btn-info" onClick={this.handleChangeButton}>{backChangeBtn}</button>
                        <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>

                    </div>
                </div>
            </div>

            

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogin: state.userReducer.isLogin,
        user: state.userReducer.user,
        isChangeInfo: state.userReducer.isChangeInfo,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => { dispatch(login()) },
        doLogout: () => { dispatch(logout()) },
        removeUserInfo: () => { dispatch(removeUserInfo()) },
        goToChangeInfo: () => { dispatch(goChangeInfo()) },
        backChangeInfo: () => { dispatch(backChangeInfo()) },
        saveUserInfo: (userInfo, id) => { dispatch(saveUserInfo(userInfo, id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

