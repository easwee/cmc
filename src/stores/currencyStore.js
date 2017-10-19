import {observable} from 'mobx';

class CurrencyStore {
    @observable fiatCurrency = (localStorage.getItem('cmc_fiatCurrency')) ? localStorage.getItem('cmc_fiatCurrency') : 'USD';
    @observable currencies = null; // list of currencies
    @observable currency = null;   // detailed currency object

    setFiatCurrency(fiatCurrency) {
        this.fiatCurrency = fiatCurrency;
    }

    getFiatCurrency() {
        return this.fiatCurrency;
    }

    setCurrencies (currencies) {
        this.currencies = currencies;
    }

    getCurrencies() {
        return this.currencies;
    }

    clearCurrencies() {
        this.currencies = null;
    }

    setCurrency (currency) {
        this.currency = currency;
    }

    getCurrency (currency) {
        return this.currency;
    }

    clearCurrency() {
        this.currency = null;
    }

}


export default new CurrencyStore();