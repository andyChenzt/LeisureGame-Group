import React, { Component } from 'react';
import "../../../../public/css/Head.css";


const Alert = (props) => {
	return (
        <div className="alert alert-danger">
            <a href="#" className="close" data-dismiss="alert">&times;</a>
            <strong>Warning! </strong>{props.msg}
        </div>
    );
}

export default Alert;