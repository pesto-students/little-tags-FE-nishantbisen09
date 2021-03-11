import Fuse from 'fuse.js';
import products from '../../data/products';

const fuseSearch = keys => {
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
    keys,
  };
  return new Fuse(products, options);
};

export default fuseSearch;
