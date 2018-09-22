import React, { Component } from 'react';
import "../../css/Foot.css";

const Foot = () => {
	return (
		<div>
            <footer className="App-footer">
                <h1 className="App-text">@2018 LeisureGame</h1>
            </footer>
        </div>
    );
}

export default Foot;

// export default class Foot extends Component {
//     render() {
//         return (

//             <div>
//                 <footer className="App-footer">
//                     <h1 className="App-text">@2018 LeisureGame</h1>
//                 </footer>
//             </div>
//         );
//     }
// }