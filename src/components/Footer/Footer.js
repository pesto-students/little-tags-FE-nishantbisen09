import React, { Fragment, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Hidden,
  makeStyles,
} from '@material-ui/core';
import { AccountCircle, Favorite, ShoppingCart } from '@material-ui/icons';

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1B1642',
    marginTop: 20,
    color: 'white',
  },
  action: {
    color: 'white',
  },
  footer: {
    padding: '15px',
  },
}));

const Footer = () => {
  const classes = useStyle();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <Hidden xsDown>
        <>
          <Grid container justify="space-between" alignItems="center">
            <Grid item className={classes.footer}>
              &copy; 2021, Little Tags
            </Grid>
            <Grid item className={classes.footer}>
              All Rights Reserved
            </Grid>
          </Grid>
        </>
      </Hidden>
      <Hidden smUp>
        <>
          <BottomNavigationAction
            className={classes.action}
            label="Recents"
            icon={<ShoppingCart />}
          />
          <BottomNavigationAction
            className={classes.action}
            label="Favorites"
            icon={<Favorite />}
          />
          <BottomNavigationAction
            className={classes.action}
            label="Nearby"
            icon={<AccountCircle />}
          />
        </>
      </Hidden>
    </BottomNavigation>
  );
};

export default Footer;
