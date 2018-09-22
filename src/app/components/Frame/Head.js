import React, { Component } from 'react';
import "../../css/Head.css";
import header from "../../assert/image/header.png";


const Head = () => {
	return (
        <div>
            <header className="App-header">
                <img src={header} alt="header" />
            </header>
        </div>
    );
}

export default Head;


// export default class Head extends Component {
//     render() {
//         return (

//             <div>
//                 <header className="App-header">
//                     <img src={header} alt="header" />
//                 </header>
//             </div>
//         );
//     }
// }