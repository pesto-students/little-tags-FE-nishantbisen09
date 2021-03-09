import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Hidden, makeStyles, Paper } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Slider from '@material-ui/core/Slider';
import fuseSearch from '../components/Search/FuseSearch';
import Products from '../components/Products/Products';
import Loader from '../components/Loader/Loader';

const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 500,
    label: 500,
  },
  {
    value: 1000,
    label: '1k',
  },
  {
    value: 1500,
    label: '1.5k',
  },
  {
    value: 2000,
    label: '2k',
  },
  {
    value: 2500,
    label: '2.5k',
  },
  {
    value: 3000,
    label: '3k',
  },
  {
    value: 3500,
    label: '3.5k',
  },
  {
    value: 4000,
    label: '4k',
  },
];

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '15px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  resultsContainer: {
    marginBottom: '50px',
  },
  priceRange: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  filterBtn: {
    width: '150px',
  },
  paper: {
    marginBottom: '50px',
  },
}));

function SearchPage() {
  const { search } = useLocation();
  const classes = useStyles();
  const history = useHistory();

  const [searchOptions, setSearchOptions] = useState({
    params: '',
    queryString: '',
    category: '',
    priceRange: [0, 4000],
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const fakeLoader = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const queryString = params.get('q');
    const category = params.get('c');
    const convertStringsToNumbers = data => data.map(item => Number(item));
    const priceRange =
      typeof params.get('pr') === 'string'
        ? convertStringsToNumbers(params.get('pr').split('-'))
        : [0, 4000];

    const getFuzzySearchedItems = () => {
      const items = fuseSearch.search(queryString).slice(0, 30);
      return items.map(item => item.item);
    };

    const applyFilters = products => {
      const [fromPrice, toPrice] = priceRange;
      return products.filter(
        ({ price }) => price.current_price >= fromPrice && price.current_price <= toPrice
      );
    };
    fakeLoader();
    setSearchOptions({
      queryString,
      category,
      priceRange,
      results: applyFilters(getFuzzySearchedItems()),
    });
  }, [search]);

  const handleSliderChange = (_e, newValue) => {
    setSearchOptions({
      ...searchOptions,
      priceRange: newValue,
    });
  };

  const onFilterClick = () => {
    const { queryString, category, priceRange } = searchOptions;
    const [fromPrice, toPrice] = priceRange;
    history.push(`/search?q=${queryString}&c=${category}&pr=${fromPrice}-${toPrice}`);
  };

  return (
    <div>
      <div>
        <Hidden smUp>
          <Grid container justify="space-evenly" alignItems="center" spacing={2} className="py-3">
            <Grid item>
              <Button variant="outlined" className={classes.filterBtn} color="secondary">
                Sort
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" className={classes.filterBtn} color="primary">
                Filter
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </div>
      <h2 className={classes.heading}>
        <FormattedMessage id="searchResultsFor" /> &quot;{searchOptions.queryString}&quot;
      </h2>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item md={3} xs={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={5} justify="center">
                  <Grid item md={9} justify="center">
                    <h2 className={classes.priceRange}>
                      <FormattedMessage id="priceRange" />
                    </h2>
                    <Slider
                      min={0}
                      max={4000}
                      value={searchOptions.priceRange}
                      onChange={handleSliderChange}
                      aria-labelledby="range-slider"
                      step={500}
                      marks={marks}
                    />
                    <Button variant="contained" color="primary" onClick={onFilterClick}>
                      <FormattedMessage id="applyFilter" />
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
                <Grid container spacing={5} justify="center">
                  <Grid item md={9} justify="center">
                    <h2 className={classes.priceRange}>
                      <FormattedMessage id="priceRange" />
                    </h2>
                    <Slider
                      min={0}
                      max={4000}
                      value={searchOptions.priceRange}
                      onChange={handleSliderChange}
                      aria-labelledby="range-slider"
                      step={500}
                      marks={marks}
                    />
                    <Button variant="contained" color="primary" onClick={onFilterClick}>
                      <FormattedMessage id="applyFilter" />
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
                <Grid container spacing={5} justify="center">
                  <Grid item md={9} justify="center">
                    <h2 className={classes.priceRange}>
                      <FormattedMessage id="priceRange" />
                    </h2>
                    <Slider
                      min={0}
                      max={4000}
                      value={searchOptions.priceRange}
                      onChange={handleSliderChange}
                      aria-labelledby="range-slider"
                      step={500}
                      marks={marks}
                    />
                    <Button variant="contained" color="primary" onClick={onFilterClick}>
                      <FormattedMessage id="applyFilter" />
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Hidden>
          <Grid item md={9} xs={12}>
            <Paper>
              <Products
                products={searchOptions.results}
                className={classes.resultsContainer}
                spacing={5}
                position="center"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default SearchPage;
