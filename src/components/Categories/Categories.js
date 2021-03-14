/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  return (
    <div className="top-categories">
      <h3 className="top-categories-header">
        <FormattedMessage id="topCategories" />
      </h3>
      <Grid container className={classes.root} justify="center" spacing={6}>
        {categories.map(({ name, image, url, id }) => {
          return (
            <Grid key={id} item lg>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <div onClick={() => history.push(url)}>
                <CategoryCard name={name} image={image} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Categories;
