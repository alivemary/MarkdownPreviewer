import React from 'react';
import InputWin from './InputWin.js';


class App extends React.Component {
    render() {
        return (
         <div>
         	<h1 className="text-center">MarkdownPreviewer</h1>
         	<div className ='container-fluid'> 
         		<div className = 'row'>       	
         			<div className = 'col-md-6 text-right'><InputWin /></div>
         			<div className = 'col-md-6 text-left'>Text here</div>
         		</div>
         	</div>
         </div>
        )
    }
}

export default App;
