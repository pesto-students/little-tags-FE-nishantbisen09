import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function MobileMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sectionMobile}>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </div>
  );
}

export default MobileMenu;
