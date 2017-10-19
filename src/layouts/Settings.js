import React, { Component } from 'react';
import { inject , observer} from 'mobx-react';

@inject('currencyStore')
@observer
class Settings extends Component {

    setFiatCurrency(fiatCurrency) {
        // remember the setting so it is default the next time user visits
        localStorage.setItem('cmc_fiatCurrency', fiatCurrency);

        // update setting in store
        this.props.currencyStore.setFiatCurrency(fiatCurrency);
        this.props.currencyStore.clearCurrencies();
    }

    isChecked(value) {
        return this.props.currencyStore.getFiatCurrency() === value;
    }

    handleFiatCurrencyChange = (event) => {
        this.setFiatCurrency(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Settings</h1>
                <p>Fiat currency:</p>
                <form>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="USD"
                                checked={this.isChecked('USD')}
                                onChange={this.handleFiatCurrencyChange}
                            />
                            USD
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="EUR"
                                checked={this.isChecked('EUR')}
                                onChange={this.handleFiatCurrencyChange}
                            />
                            EUR
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="CNY"
                                checked={this.isChecked('CNY')}
                                onChange={this.handleFiatCurrencyChange}
                            />
                            CNY
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Settings;