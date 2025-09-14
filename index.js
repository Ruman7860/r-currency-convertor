import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_ALwwNvdSCoBzeRHqjG9uZr6rnhjCntOBvXQEMMdH');
const convertCurrency = async (fromCurrency,toCurrency,units) => {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency]
    return multiplier * units;
}

export default convertCurrency;


