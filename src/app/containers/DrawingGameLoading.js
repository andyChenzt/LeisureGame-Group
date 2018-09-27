import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class DrawingGameLoading extends Component {
	componentWillMount = () => {
        // if(!this.props.isLogin) {
        //     this.props.history.push('/');
        // }
    }

	render() {
		return (
			<div>	
			  	
		    </div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        isWaiting: state.gameReducer.isWaiting,
    }
};

export default connect(mapStateToProps)(DrawingGameLoading);