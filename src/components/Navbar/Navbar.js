import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

import AppLogo from '../../assets/app-logo.png';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Sidebar />

          <Typography className={classes.title} variant="h6" noWrap>
            <img src={AppLogo} alt="app-logo" className={classes.logo} />
          </Typography>

          <div className={classes.grow} />

          <Search />

          <DesktopMenu />

          <MobileMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
