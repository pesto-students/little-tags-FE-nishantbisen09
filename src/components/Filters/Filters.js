import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Slider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useStyles from './filterStyles';

export const CATEGORIES = {
  INDIAN_SAREES: 1,
  WINTER_WEAR: 2,
  ELECTRONICS: 3,
};

// temporary category values, should be replaced with ids later

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

const Filters = ({ onApplyFilterClick, filterConfig }) => {
  const classes = useStyles();
  const [filterConfiguration, setFilterConfiguration] = useState({
    priceRange: [0, 4000],
    sortFilter: '',
    categoriesFilter: [CATEGORIES.WINTER_WEAR, CATEGORIES.INDIAN_SAREES, CATEGORIES.ELECTRONICS],
  });
  useEffect(() => {
    setFilterConfiguration(filterConfig);
  }, [filterConfig]);

  const handlePriceSortChange = event => {
    setFilterConfiguration({ ...filterConfiguration, sortFilter: event.target.value });
  };

  const handleSliderChange = (_e, newValue) => {
    setFilterConfiguration({
      ...filterConfiguration,
      priceRange: newValue,
    });
  };

  const handleCategoryFilterChange = event => {
    const categoryValue = parseInt(event.target.value, 10);
    const newCategoryValues = [...filterConfiguration.categoriesFilter];
    const index = newCategoryValues.indexOf(categoryValue);
    if (index > -1) {
      newCategoryValues.splice(index, 1);
    } else {
      newCategoryValues.push(categoryValue);
    }
    setFilterConfiguration({
      ...filterConfiguration,
      categoriesFilter: newCategoryValues,
    });
  };

  const isCategoryChecked = id =>
    !!filterConfiguration.categoriesFilter.find(filterValue => filterValue === id);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5} justify="center">
        <Grid item md={9} xs={10}>
          <h2 className={classes.filtersHeading}>
            <FormattedMessage id="filtersHeading" />
            <Divider />
          </h2>
          <h4 className={classes.priceRange}>
            <FormattedMessage id="priceRange" />
            <Divider />
          </h4>
          <Slider
            min={0}
            max={4000}
            value={filterConfiguration.priceRange}
            onChange={handleSliderChange}
            aria-labelledby="range-slider"
            step={500}
            marks={marks}
          />
        </Grid>
      </Grid>
      <Grid container spacing={5} justify="center">
        <Grid item md={9} xs={10}>
          <h4 className={classes.priceRange}>
            <FormattedMessage id="sortFilter" />
            <Divider />
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={filterConfiguration.sortFilter}
                onChange={handlePriceSortChange}
              >
                <FormControlLabel
                  value="htl"
                  control={<Radio color="primary" />}
                  label="Price high to low"
                />
                <FormControlLabel
                  value="lth"
                  control={<Radio color="primary" />}
                  label="Price low to high"
                />
                <FormControlLabel
                  value="pl"
                  control={<Radio color="primary" />}
                  label="Popular first"
                />
              </RadioGroup>
            </FormControl>
          </h4>
        </Grid>
      </Grid>
      <Grid container spacing={5} justify="center">
        <Grid item md={9} xs={10}>
          <h4 className={classes.priceRange}>
            <FormattedMessage id="categories" />
            <Divider />
          </h4>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCategoryChecked(CATEGORIES.INDIAN_SAREES)}
                  onChange={handleCategoryFilterChange}
                  value={CATEGORIES.INDIAN_SAREES}
                  color="primary"
                />
              }
              label="Indian Sarees"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCategoryChecked(CATEGORIES.WINTER_WEAR)}
                  onChange={handleCategoryFilterChange}
                  value={CATEGORIES.WINTER_WEAR}
                  color="primary"
                />
              }
              label="Winter Wear"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCategoryChecked(CATEGORIES.ELECTRONICS)}
                  onChange={handleCategoryFilterChange}
                  value={CATEGORIES.ELECTRONICS}
                  color="primary"
                />
              }
              label="Electronics"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid container spacing={5} justify="center">
        <Grid item md={9} xs={10}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onApplyFilterClick(filterConfiguration)}
            className={classes.filterButton}
          >
            <FormattedMessage id="applyFilter" />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filters;
