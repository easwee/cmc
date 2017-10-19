import React, { Component } from 'react';

import '../assets/css/button.css';

class Button extends Component {
    render() {
        return (
            <span onClick={this.props.onButtonClick} className="button">{this.props.text}</span>
        );
    }
}

export default Button;