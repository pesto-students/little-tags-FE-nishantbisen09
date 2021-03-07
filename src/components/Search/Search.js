import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './searchStyles';
import fuse from './FuseSearch';

function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const results = fuse.search(searchQuery).slice(0, 15);
    setSearchResults(results);
  }, [searchQuery]);

  const handleSearch = e => {
    e.preventDefault();
    const potentialCategory = searchResults.length ? searchResults[0].item.category : '';
    setShowResults(false);
    history.push(`/search?q=${searchQuery}&c=${potentialCategory}&pr=0-0`);
  };

  const handleRoute = to => {
    history.push(to.pathname);
  };

  return (
    <div
      onFocus={() => setShowResults(true)}
      onBlur={() => setShowResults(false)}
      className={classes.search}
    >
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSearch}>
        <FormattedMessage id="search">
          {placeHolderText => (
            <InputBase
              value={searchQuery}
              onChange={handleChange}
              placeholder={`${placeHolderText}`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              className="searchField"
              inputProps={{ 'aria-label': 'search' }}
            />
          )}
        </FormattedMessage>
      </form>
      <div
        className={`position-absolute searchResultContainer ${
          showResults && searchResults.length ? 'd-block' : ''
        }`}
      >
        <ul className="px-2 py-2 m-0">
          {searchResults.length ? (
            <>
              {searchResults.map(result => (
                <li key={result.item.productId} className="py-2 px-3 searchedElement">
                  <Link
                    to={{
                      pathname: `/product-details/${result.item.productId}`,
                      state: { fromHomepage: true },
                    }}
                    onMouseDown={() =>
                      handleRoute({
                        pathname: `/product-details/${result.item.productId}`,
                        state: { fromHomepage: true },
                      })
                    }
                  >
                    <span className="d-flex pt-2 pr-2 pb-1 text-primary searchResultTitle">
                      {result.item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <li className="px-2">
              Press enter to search
              <span className="searchResultTitle"> {searchQuery} </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Search;
