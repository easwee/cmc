import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="content">{this.props.text}</div>
        );
    }
}

export default Loader;