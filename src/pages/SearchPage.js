import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import fuseSearch from '../components/Search/FuseSearch';

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

function SearchPage() {
  const { search } = useLocation();

  const [searchOptions, setSearchOptions] = useState({
    params: '',
    queryString: '',
    category: '',
    priceRange: [0, 0],
    results: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(search);
    const queryString = params.get('q');
    const category = params.get('c');
    const priceRange = typeof params.get('pr') === 'string' ? params.get('pr').split('-') : [];
    setSearchOptions({
      queryString,
      category,
      priceRange,
      results: fuseSearch.search(queryString).slice(0, 30),
    });
  }, [search]);

  console.log(searchOptions, 'searchOptions');

  const handleSliderChange = (e, newValue) => {
    setSearchOptions({
      ...searchOptions,
      priceRange: newValue,
    });
  };

  return (
    <div>
      <h2>Showing results for &quot;{searchOptions.queryString}&quot;</h2>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <h2>Price range</h2>
                <Slider
                  min={0}
                  max={4000}
                  value={searchOptions.priceRange}
                  onChange={handleSliderChange}
                  aria-labelledby="range-slider"
                  step={500}
                  marks={marks}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <ul>
              {searchOptions.results.map(res => {
                return <li key={res.productId}>{res.item.title}</li>;
              })}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SearchPage;
