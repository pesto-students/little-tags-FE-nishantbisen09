import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Hidden, makeStyles, Paper } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { Tune } from '@material-ui/icons';
import fuseSearch from '../../components/Search/FuseSearch';
import Products from '../../components/Products/Products';
import Loader from '../../components/Loader/Loader';
import Filters from '../../components/Filters/Filters';
import MobileFilterPopup from '../../components/MobileFilterPopup/MobileFilterPopup';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: '30px',
    marginTop: '15px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  resultsContainer: {
    marginBottom: '50px',
  },
  filterBtn: {
    width: '100%',
  },
  tuneIcon: {
    marginLeft: '10px',
  },
}));

function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const classes = useStyles();
  const history = useHistory();
  const initialState = {
    params: '',
    queryString: '',
    filterConfig: {
      priceRange: [0, 4000],
      sortFilter: '',
      categoriesFilter: [1, 2, 3],
    },
  };

  const [searchOptions, setSearchOptions] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fakeLoader = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const convertStringsToNumbers = data => data.map(item => Number(item));

  useEffect(() => {
    const queryString = params.get('q');
    const priceRange =
      typeof params.get('pr') === 'string'
        ? convertStringsToNumbers(params.get('pr').split('-'))
        : [0, 4000];

    fakeLoader();
    setSearchOptions({
      ...searchOptions,
      queryString,
      filterConfig: {
        ...searchOptions.filterConfig,
        priceRange,
      },
    });
  }, [search]);

  useEffect(() => {
    const queryString = params.get('q');
    const priceRange =
      typeof params.get('pr') === 'string'
        ? convertStringsToNumbers(params.get('pr').split('-'))
        : [0, 4000];
    const getFuzzySearchedItems = () => {
      const items = fuseSearch(['title', 'description', 'category'])
        .search(queryString)
        .slice(0, 30);
      return items.map(item => item.item);
    };
    const { categoriesFilter } = searchOptions.filterConfig;
    const applyFilters = products => {
      const [fromPrice, toPrice] = priceRange;
      return products.filter(
        ({ price, categoryID }) =>
          price.current_price >= fromPrice &&
          price.current_price <= toPrice &&
          categoriesFilter.indexOf(categoryID) > -1
      );
    };
    setSearchResults(applyFilters(getFuzzySearchedItems()));
  }, [searchOptions.filterConfig]);

  const onApplyFilterClick = filterConfiguration => {
    fakeLoader();
    const { queryString } = searchOptions;
    const { priceRange } = filterConfiguration;
    const [fromPrice, toPrice] = priceRange;
    setMobileFilterOpen(false);
    history.push(`/search?q=${queryString}&pr=${fromPrice}-${toPrice}`);
    setSearchOptions({ ...searchOptions, filterConfig: filterConfiguration });
  };

  return (
    <>
      <div>
        <Hidden smUp>
          <Container maxWidth="sm">
            <Grid container justify="flex-end" alignItems="center" spacing={2} className="py-3">
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  className={classes.filterBtn}
                  color="primary"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  Filters <Tune className={classes.tuneIcon} />
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Hidden>
      </div>

      <h2 className={classes.heading}>
        {searchResults.length ? (
          <>
            <FormattedMessage id="searchResultsFor" />{' '}
            <span>&quot;{searchOptions.queryString}&quot;</span>
          </>
        ) : (
          <></>
        )}
      </h2>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item md={3} xs={12}>
              <Filters
                filterConfig={searchOptions.filterConfig}
                onApplyFilterClick={onApplyFilterClick}
              />
            </Grid>
          </Hidden>
          <Grid item md={9} xs={12}>
            {searchResults.length ? (
              <Paper>
                <Products
                  products={searchResults}
                  className={classes.resultsContainer}
                  spacing={5}
                  position="center"
                />
              </Paper>
            ) : (
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <NoResultsFound />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
      <Loader isLoading={isLoading} />
      <Hidden smUp>
        <MobileFilterPopup open={isMobileFilterOpen}>
          <Filters
            filterConfig={searchOptions.filterConfig}
            onApplyFilterClick={onApplyFilterClick}
          />
        </MobileFilterPopup>
      </Hidden>
    </>
  );
}

export default SearchResults;
