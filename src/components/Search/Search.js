import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './searchStyles';
import fuseSearch from './FuseSearch';
import Loader from '../Loader/Loader';

function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fakeLoader = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const results = fuseSearch(['title', 'description', 'category'])
      .search(searchQuery)
      .slice(0, 15);
    setSearchResults(results);
  }, [searchQuery]);

  const handleChange = async event => {
    setSearchQuery(event.target.value);
    await fakeLoader();
  };

  const isSearchInputValid = query => query !== '';

  const handleSearch = e => {
    e.preventDefault();
    if (!isSearchInputValid(searchQuery)) return;
    setShowResults(false);
    history.push(`/search?q=${searchQuery}`);
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
          {searchResults.length && !isLoading ? (
            <>
              {searchResults.map(result => (
                <Link
                  className={classes.productLink}
                  key={result.item.id}
                  to={{
                    pathname: `/product-detail/${result.item.id}`,
                    state: { fromHomepage: true },
                  }}
                  onMouseDown={() =>
                    handleRoute({
                      pathname: `/product-detail/${result.item.id}`,
                      state: { fromHomepage: true },
                    })
                  }
                  tabIndex="0"
                >
                  {' '}
                  <li className="py-3 px-3 searchedElement">
                    <span className="d-flex pt-2 pr-2 pb-1 text-primary searchResultTitle">
                      {result.item.title}
                    </span>
                  </li>
                </Link>
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
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default Search;
