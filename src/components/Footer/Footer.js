import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1B1642',
    marginTop: 50,
    color: 'white',
    left: 0,
    bottom: 0,
    width: '100%',
    position: 'fixed',
  },
  footer: {
    padding: '15px',
  },
  owners: {
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <Grid className={classes.root} container justify="space-between" alignItems="center">
      <Grid item className={classes.footer}>
        Made with ❤ by{' '}
        <a
          href="https://github.com/CodingCreate101"
          className={classes.owners}
          target="_blank"
          rel="noreferrer"
        >
          Tejas
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/nishantbisen09"
          className={classes.owners}
          target="_blank"
          rel="noreferrer"
        >
          Nishant
        </a>
      </Grid>
      <Grid item className={classes.footer}>
        All Rights Reserved
      </Grid>
    </Grid>
  );
};

export default Footer;
