import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import AppLogo from '../../assets/app-logo.png';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import DesktopMenu from './DesktopMenu';
import LoginModal from '../Auth/LoginModal';

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const totalCartItems = useSelector(state => state.cart.length);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Sidebar />

          <Typography
            className={classes.title}
            onClick={() => history.push('/')}
            variant="h6"
            noWrap
          >
            <img src={AppLogo} alt="app-logo" className={classes.logo} />
          </Typography>

          <div className={classes.grow} />

          <Search />

          <DesktopMenu />

          <IconButton
            aria-label={`${totalCartItems} item(s) in your cart`}
            color="inherit"
            onClick={() => history.push('/checkout')}
          >
            <Badge badgeContent={totalCartItems} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
