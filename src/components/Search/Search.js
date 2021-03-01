import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { FormattedMessage } from 'react-intl';
import useStyles from './searchStyles';

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <FormattedMessage id="search">
        {placeHolderText => (
          <InputBase
            placeholder={`${placeHolderText}`}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        )}
      </FormattedMessage>
    </div>
  );
}

export default Search;
