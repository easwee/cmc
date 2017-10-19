import React, { Component } from 'react';

class CurrencyList extends Component {

    constructor(props) {
        super(props);

        this.formatter = new Intl.NumberFormat('en-US', {minimumFractionDigits:0, maximumFractionDigits: 20});
    }

    handleListItemClick(id) {
        this.props.onListItemClick(id)
    }

    renderItems(data) {
        const fiatCurrencyId = this.props.fiatCurrency.toLowerCase();

        const items = data.map((item) => {

            const price = this.formatter.format(item['price_' + fiatCurrencyId]) + ' ' + this.props.fiatCurrency;

            return(
                <tr key={'currency_' + item.name} onClick={this.handleListItemClick.bind(this, item.id)}>
                    <td className="narrow">{`${item.rank}`}</td>
                    <td>{`${item.name} (${item.symbol})`}</td>
                    <td className="align-center">{`${item.percent_change_24h}%`}</td>
                    <td className="align-right">{`${price}`}</td>
                </tr>
            );
        });

        return items;
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="narrow">#</th>
                        <th>Name</th>
                        <th className="align-center">Change (24h)</th>
                        <th className="align-right">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems(this.props.data)}
                </tbody>
            </table>
        );
    }
}

export default CurrencyList;