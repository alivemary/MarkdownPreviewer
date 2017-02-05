import React from 'react';

class InputWin extends React.Component {
	constructor (props) {
		super (props);
	}	

    render() {
        return (
        <div className = 'col-md-6 text-right'>
         	<textarea value={ this.props.value }  onChange={this.props.handleChange}></textarea>
        </div>
        )
    }
}

export default InputWin;
