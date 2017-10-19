import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';

import './assets/css/app.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Header />
                <Content />
            </div>
        );
    }
}

export default App;