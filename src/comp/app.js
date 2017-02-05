import React from 'react';
import InputWin from './InputWin.js';
import TextOutput from './TextOutput.js';


class App extends React.Component {
	constructor (props) {
		super (props);
		this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
	}

    render() {
        return (
         <div>
         	<h1 className="text-center">MarkdownPreviewer</h1>
         	<div className ='container-fluid'> 
         		<div className = 'row'>       	
         			<InputWin value={ this.state.value }  handleChange={this.handleChange}/>
         			<TextOutput outputText={ this.state.value } />
         		</div>
         	</div>
         </div>
        )
    }
}

export default App;
