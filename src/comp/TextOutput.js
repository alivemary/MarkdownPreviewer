import React from 'react';
var marked = require('marked');

class TextOutput extends React.Component {
	constructor (props) {
		super (props);
	}
	getMarkdownText() {
    	var rawMarkup = marked(this.props.outputText, {sanitize: true});
    	return { __html: rawMarkup };
  	}
    render() {
        return (
        <div className = 'col-md-6 text-left'  dangerouslySetInnerHTML={this.getMarkdownText()} >
         
        </div>
        )
    }
}

export default TextOutput;