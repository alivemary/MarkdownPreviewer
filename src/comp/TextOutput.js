import React from 'react';

class TextOutput extends React.Component {
	constructor (props) {
		super (props);
	}
    render() {
        return (
        <div className = 'col-md-6 text-left'>
         <p>{this.props.outputText}</p>
        </div>
        )
    }
}

export default TextOutput;