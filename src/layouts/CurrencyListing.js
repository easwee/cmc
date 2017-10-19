import React, { Component } from 'react';
import { inject , observer} from 'mobx-react';
import axios                from 'axios';

import Button       from '../components/Button';
import Loader       from '../components/Loader';
import CurrencyList from '../components/CurrencyList';
import CONFIG       from '../config/Configuration';

@inject('currencyStore')
@observer
class CurrencyListing extends Component {

    componentDidMount() {
        console.log('Did mount.');
        var store = this.props.currencyStore;

        if(!store.getCurrencies()) {
            this.fetchList(store.getFiatCurrency());
        }
    }

    fetchList = (fiatCurrency) => {
        const url = `${CONFIG.apiURL}?convert=${fiatCurrency}&limit=${CONFIG.currencyLimit}`;

        axios.get(url)
            .then(function(res) {
                console.log('Fetched data.');
                this.props.currencyStore.setCurrencies(res.data);
            }.bind(this))
            .catch((error) => {
                console.log('Error', error.message);
            });
    }

    refreshList = () => {
        this.fetchList(this.props.currencyStore.getFiatCurrency());
    }

    renderList() {
        if(this.props.currencyStore.getCurrencies()) {
            return (
                <CurrencyList
                    data={this.props.currencyStore.currencies}
                    fiatCurrency={this.props.currencyStore.getFiatCurrency()}
                    onListItemClick={this.handleListItemClick.bind(this)}
                />
            )
        } else {
            return (
                <Loader text="Loading currencies list..." />
            )
        }
    }

    handleListItemClick(id) {
        const pathname = '/currencies/' + id;

        this.props.history.push(pathname);
    }

    render() {
        return (
            <div>
                <p className="align-center">
                    <Button onButtonClick={this.refreshList} text="Refresh list" />
                </p>
                {this.renderList()}
            </div>
        )
    }
}

export default CurrencyListing;