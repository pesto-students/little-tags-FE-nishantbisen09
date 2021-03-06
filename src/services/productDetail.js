import { fetchWithTimeout, getRandomArbitraryNumber, getRandomSize } from '../utility';
import { baseURL } from '../utility/appConstants';

const getProductDetail = productID => {
  return fetchWithTimeout(`${baseURL}/products/${productID}`)
    .then(resp => (resp ? resp.json() : {}))
    .then(resp => {
      return { ...resp, rating: getRandomArbitraryNumber(1, 5), size: getRandomSize() };
    });
};

export default getProductDetail;
