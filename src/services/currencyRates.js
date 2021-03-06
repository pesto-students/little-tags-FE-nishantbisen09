import { fetchWithTimeout } from '../utility';
import { defaultCurrencyQuery } from '../utility/appConstants';

const getCurrencyByQuery = (query = defaultCurrencyQuery) => {
  return fetchWithTimeout(
    `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${process.env.REACT_APP_CURRENCY_API_KEY}`
  ).then(resp => (resp ? resp.json() : {}));
};

export default getCurrencyByQuery;
