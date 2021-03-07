import Fuse from 'fuse.js';
import productList from '../../data/productsList';

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ['title', 'description'],
};

const fuseSearch = new Fuse(productList.products, options);

export default fuseSearch;
