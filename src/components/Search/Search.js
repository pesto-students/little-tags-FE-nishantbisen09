import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import fuse from './FuseSearch';
import useStyles from './searchStyles';

const useStylesMore = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function Search() {
  const moreClasses = useStylesMore();
  const classes = useStyles();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchContainerOpen, setIsSearchContainerOpen] = useState(false);

  useEffect(() => {
    const results = fuse.search(searchQuery).slice(0, 15);
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
    history.push(`/search?q=${searchQuery}`);
  };

  const handleRoute = to => {
    handleClickAway();
    history.push(to.pathname);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={moreClasses.root}>
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
                      button
                      onClick={() =>
                        handleRoute({
                          pathname: `/product-detail/${result.item.id}`,
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
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default Search;
