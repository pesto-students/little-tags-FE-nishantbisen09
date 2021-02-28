import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CategoryCard from './CategoryCard';
import './categories.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
}));

const Categories = ({ categories }) => {
  const classes = useStyles();
  return (
    <div className="top-categories">
      <h3 className="top-categories-header">Top Categories</h3>
      <Grid container className={classes.root} justify="center" spacing={7}>
        {categories.map(category => {
          return (
            <Grid key={category.name} item lg>
              <CategoryCard category={category} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Categories;
