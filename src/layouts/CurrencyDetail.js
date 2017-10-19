import React, { Component } from 'react';
import { inject , observer} from 'mobx-react';
import axios                from 'axios';

import Button       from '../components/Button';
import Loader       from '../components/Loader';
import CurrencyInfo from '../components/CurrencyInfo';
import CONFIG       from '../config/Configuration';

@inject('currencyStore')
@observer
class CurrencyDetail extends Component {

    constructor(props) {
        super(props);

        props.currencyStore.clearCurrency();
    }

    componentDidMount() {
        this.fetchDetails(this.props.currencyStore.getFiatCurrency());
    }

    fetchDetails = (fiatCurrency) => {
        const url = `${CONFIG.apiURL}/${this.props.match.params.id}/?convert=${fiatCurrency}`;

        axios.get(url)
            .then(function(res) {
                this.props.currencyStore.setCurrency(res.data[0]);
            }.bind(this))
            .catch((error) => {
                console.log('Error', error.message);
            });
    }

    renderInfo() {
        var store = this.props.currencyStore;
        var currencyObject = store.getCurrency();

        if(store.getCurrency()) {
            return (
                <CurrencyInfo
                    data={store.getCurrency()}
                    fiatCurrency={store.getFiatCurrency()}
                />
            )
        } else {
            return (
                <Loader text="Loading currency info..." />
            )
        }
    }

    refreshInfo = () => {
        this.fetchDetails(this.props.currencyStore.getFiatCurrency());
    }

    render() {
        return (
            <div>
                {this.renderInfo()}
                <p>
                    <Button onButtonClick={this.refreshInfo} text="Refresh data" />
                </p>
            </div>
        )
    }
}

export default CurrencyDetail;