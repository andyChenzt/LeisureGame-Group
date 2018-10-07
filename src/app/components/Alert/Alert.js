import React, { Component } from 'react';
import "../../../../public/css/Head.css";


const Alert = () => {
	return (
        <div className="alert alert-danger">
            {/*<button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>*/}
            <a href="#" className="close" data-dismiss="alert">&times;</a>
            <strong>Warning! </strong>Wrong email or password.
        </div>
    );
}

export default Alert;