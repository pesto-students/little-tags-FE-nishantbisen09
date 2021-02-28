import React, { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginModal from '../Auth/LoginModal';

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const isLoggedIn = false;

function DesktopMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [languageSelectAnchorEl, setLanguageSelectAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLanguageMenuOpen = Boolean(languageSelectAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = event => {
    setLanguageSelectAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageSelectAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const languageMenuId = 'language-menu';
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageSelectAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={languageMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem>
        <p>English</p>
      </MenuItem>
      <MenuItem>
        <p>ಕನ್ನಡ</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.sectionDesktop}>
      {isLoggedIn ? (
        <>
          <Button endIcon={<ExpandMoreIcon />} onClick={handleProfileMenuOpen}>
            Tejas
          </Button>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Favorite />
          </IconButton>
        </>
      ) : (
        <LoginModal />
      )}

      <IconButton
        aria-label="show languages"
        aria-controls={languageMenuId}
        aria-haspopup="true"
        onClick={handleLanguageMenuOpen}
        color="inherit"
      >
        <LanguageIcon />
      </IconButton>

      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      {renderMenu}
      {renderLanguageMenu}
    </div>
  );
}

export default DesktopMenu;
