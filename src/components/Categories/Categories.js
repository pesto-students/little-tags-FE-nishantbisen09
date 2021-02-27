import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CategoryCard from './CategoryCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Categories = ({ categories }) => {
  const classes = useStyles();
  return (
    <div className="top-categories">
      <h3 className="top-categories-header">Top Categories</h3>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={10}>
            {categories.map(category => {
              return (
                <Grid key={category.name} item>
                  <CategoryCard category={category} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Categories;
