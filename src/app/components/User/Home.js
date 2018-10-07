import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "../../../../public/css/App.css";
import { logout, removeUserInfo, goChangeInfo, backChangeInfo } from '../../actions/userActions';
import UserInfo from './UserInfo';
import ChangeInfo from './ChangeInfo';

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
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    handleChangeButton = (e) => {
        console.log("clicked");
        e.preventDefault();
        if(this.props.isChangeInfo) {
            this.props.backChangeInfo();
        } else {
            this.props.goToChangeInfo();
        }
    }

    render() {
        console.log(this.props);
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
        doLogout: () => { dispatch(logout()) },
        removeUserInfo: () => { dispatch(removeUserInfo()) },
        goToChangeInfo: () => { dispatch(goChangeInfo()) },
        backChangeInfo: () => { dispatch(backChangeInfo()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

