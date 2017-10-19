import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import '../assets/css/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <strong>Coinmarketcap Top 100</strong>
                <Link to="/settings" className="settings">{'\u2699'}</Link>
            </header>
        );
    }
}

export default Header;