import React, { Component } from 'react';

class CurrencyInfo extends Component {

    constructor(props) {
        super(props);

        this.formatter = new Intl.NumberFormat('en-US', {minimumFractionDigits:0, maximumFractionDigits: 20});
    }

    render() {
        const f = this.formatter;
        const data = this.props.data;
        const fiat = this.props.fiatCurrency;
        const fiatId = fiat.toLowerCase();

        const price           = `${f.format(data['price_' + fiatId])} ${fiat}`;
        const volume          = `${f.format(data['24h_volume_' + fiatId])} ${fiat}`;
        const marketCap       = `${f.format(data['market_cap_' + fiatId])} ${fiat}`;
        const totalSupply     = `${f.format(data.total_supply)} ${fiat}`;
        const availableSupply = `${f.format(data.available_supply)} ${fiat}`;

        return (
            <div className="detail">
                <h1>
                    {data.name}
                    <span>{data.symbol}</span>
                </h1>
                <p>Rank: {data.rank}</p>

                <h3>Price</h3>
                <p>{`${price} (${data.price_btc} BTC)`}</p>

                <h3>Volume</h3>
                <p>{volume}</p>

                <h3>Market Cap</h3>
                <p>{marketCap}</p>

                <h3>Change %</h3>
                <table className="changePercent">
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${data.percent_change_1h}%`}</td>
                            <td>{`${data.percent_change_24h}%`}</td>
                            <td>{`${data.percent_change_7d}%`}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Total supply / available supply</h3>
                <p>{`${totalSupply} / ${availableSupply}`}</p>
            </div>
        );
    }
}

export default CurrencyInfo;