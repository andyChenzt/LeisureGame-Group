import React, { Component } from 'react';
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
        const buttonTitle = this.props.isChangeInfo ? "Back" : "Change"

        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <h1>  User Information in this page</h1>
                        <h1>  Logout in this page</h1>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
                <div>
                    {/*<UserInfo user={this.props.user}/>*/}
                    {component}
                    <button onClick={this.handleChangeButton}>{buttonTitle}</button>
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

