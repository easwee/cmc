import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';

import Home            from '../layouts/Home';
import CurrencyListing from '../layouts/CurrencyListing';
import CurrencyDetail  from '../layouts/CurrencyDetail';
import Settings        from '../layouts/Settings';

import '../assets/css/content.css';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/currencies' component={CurrencyListing} />
                    <Route path='/currencies/:id' component={CurrencyDetail} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </div>
        );
    }
}

export default Content;