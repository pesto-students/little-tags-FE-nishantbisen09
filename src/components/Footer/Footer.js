import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1B1642',
    marginTop: 20,
    color: 'white',
  },
  footer: {
    padding: '15px',
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container justify="space-between" alignItems="center">
      <Grid item className={classes.footer}>
        &copy; {new Date().getFullYear()}, Little Tags
      </Grid>
      <Grid item className={classes.footer}>
        All Rights Reserved
      </Grid>
    </Grid>
  );
};

export default Footer;