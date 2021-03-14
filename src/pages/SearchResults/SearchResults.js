import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Hidden, makeStyles, Paper } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Tune } from '@material-ui/icons';
import fuseSearch from '../../components/Search/FuseSearch';
import Products from '../../components/Products/Products';
import Filters from '../../components/Filters/Filters';
import MobileFilterPopup from '../../components/MobileFilterPopup/MobileFilterPopup';
import NoResultsFound from '../../components/NoResultsFound/NoResultsFound';
import products from '../../data/products';

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

const initialState = {
  params: '',
  queryString: '',
  filterConfig: {
    priceRange: [0, 4000],
    sortFilter: '',
    categoriesFilter: [1, 2, 3],
  },
};

function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const classes = useStyles();
  const history = useHistory();
  const [searchOptions, setSearchOptions] = useState(initialState);
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const convertStringsToNumbers = data => data.map(item => Number(item));

  useEffect(() => {
    const queryString = params.get('q');
    const priceRange =
      typeof params.get('pr') === 'string'
        ? convertStringsToNumbers(params.get('pr').split('-'))
        : [0, 4000];
    const categories =
      typeof params.get('c') === 'string'
        ? convertStringsToNumbers(params.get('c').split(','))
        : [1, 2, 3];

    setSearchOptions({
      ...searchOptions,
      queryString,
      filterConfig: {
        ...searchOptions.filterConfig,
        categoriesFilter: categories,
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
    const categories =
      typeof params.get('c') === 'string'
        ? convertStringsToNumbers(params.get('c').split(','))
        : [1, 2, 3];
    const getFuzzySearchedItems = () => {
      if (queryString)
        return fuseSearch(['title', 'description', 'category'])
          .search(queryString)
          .slice(0, 30)
          .map(item => item.item);
      return products;
    };

    const applyFilters = productItems => {
      const [fromPrice, toPrice] = priceRange;
      return productItems.filter(
        ({ price, categoryID }) =>
          price.current_price >= fromPrice &&
          price.current_price <= toPrice &&
          categories.indexOf(categoryID) > -1
      );
    };
    setSearchResults(applyFilters(getFuzzySearchedItems()));
  }, [searchOptions.filterConfig]);

  const getCategoryQuery = categories => {
    return categories.join(',');
  };

  const onApplyFilterClick = filterConfiguration => {
    const { queryString } = searchOptions;
    const { priceRange, categoriesFilter } = filterConfiguration;
    const [fromPrice, toPrice] = priceRange;
    setMobileFilterOpen(false);
    history.push(
      `/search?q=${queryString}&pr=${fromPrice}-${toPrice}&c=${getCategoryQuery(categoriesFilter)}`
    );
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
