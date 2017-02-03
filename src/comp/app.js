import React from 'react';
import InputWin from './InputWin.js';
import TextOutput from './TextOutput.js';


class App extends React.Component {
    render() {
        return (
         <div>
         	<h1 className="text-center">MarkdownPreviewer</h1>
         	<div className ='container-fluid'> 
         		<div className = 'row'>       	
         			<InputWin />
         			<TextOutput />
         		</div>
         	</div>
         </div>
        )
    }
}

export default App;
