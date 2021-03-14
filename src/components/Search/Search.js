import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './searchStyles';
import fuseSearch from './FuseSearch';

function Search() {
  const classes = useStyles();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchContainerOpen, setIsSearchContainerOpen] = useState(false);

  useEffect(() => {
    const results = fuseSearch(['title', 'description', 'category'])
      .search(searchQuery)
      .slice(0, 15);
    setSearchResults(results);
  }, [searchQuery]);

  const handleChange = async event => {
    setSearchQuery(event.target.value);
  };

  const isSearchInputValid = query => query !== '';

  const handleClick = event => {
    if (event.code === 'Enter' || !searchQuery.length) {
      setIsSearchContainerOpen(false);
      return;
    }
    setIsSearchContainerOpen(true);
  };

  const handleClickAway = () => {
    setIsSearchContainerOpen(false);
  };

  const handleSearch = e => {
    e.preventDefault();
    if (!isSearchInputValid(searchQuery)) return;
    setIsSearchContainerOpen(false);
    history.push(`/search?q=${searchQuery}&c=1,2,3`);
  };

  const handleRoute = to => {
    const { productId } = to;
    handleClickAway();
    history.push(`/product-detail/${productId}`);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <ClickAwayListener onClickAway={handleClickAway}>
        <>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSearch}>
            <FormattedMessage id="search">
              {placeHolderText => (
                <InputBase
                  onKeyUp={handleClick}
                  onClick={handleClick}
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
          {isSearchContainerOpen ? (
            <div className="position-absolute searchResultContainer">
              <List className={classes.root}>
                {searchResults.length ? (
                  searchResults.map(result => (
                    <ListItem
                      key={result.item.title}
                      button
                      onClick={() =>
                        handleRoute({
                          productId: result.item.id,
                        })
                      }
                      className="py-3 px-3 searchedElement"
                    >
                      <ListItemAvatar>
                        <Avatar alt={result.item.title} src={result.item.gallery[0]} />
                      </ListItemAvatar>
                      {result.item.title}
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    Press enter to search for&nbsp;
                    <span className="searchResultTitle">{searchQuery}</span>
                  </ListItem>
                )}
              </List>
            </div>
          ) : null}
        </>
      </ClickAwayListener>
    </div>
  );
}

export default Search;
