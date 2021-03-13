import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useGoogleAuth } from '../Auth/GoogleAuthProvider';
import LanguageSelector from '../Internationalization/LanguageSelector';
import LoginModalOpener from '../Auth/LoginModalOpener';

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

function DesktopMenu() {
  const classes = useStyles();
  const { isInitialized, isSignedIn, signOut, googleUser } = useGoogleAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut();
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.sectionDesktop}>
      {!isInitialized || !isSignedIn ? <LoginModalOpener loading={isInitialized} /> : null}
      {isInitialized && isSignedIn ? (
        <>
          <Button endIcon={<ExpandMoreIcon />} onClick={handleProfileMenuOpen}>
            {googleUser.profileObj.name}
          </Button>
          <IconButton aria-label="Wish list" color="inherit">
            <Favorite />
          </IconButton>
        </>
      ) : null}

      <LanguageSelector />

      {renderMenu}
    </div>
  );
}

export default DesktopMenu;
