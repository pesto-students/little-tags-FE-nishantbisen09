import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import Favorite from '@material-ui/icons/Favorite';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginModal from '../Auth/LoginModal';
import { useGoogleAuth } from '../Auth/GoogleAuthProvider';
import { useLanguage } from '../../i18n/LanguageProvider';
import { localList } from '../../i18n/locales';

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

  const { setLocale: setLanguage, locale } = useLanguage();
  const { isInitialized, isSignedIn, signOut, googleUser } = useGoogleAuth();

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

  const handleLogout = () => {
    signOut();
    handleMenuClose();
  };

  const selectLanguage = local => {
    setLanguage(local);
    handleLanguageMenuClose();
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
      {localList.map(item => {
        return (
          <MenuItem key={Math.random()} onClick={() => selectLanguage(item)}>
            {item[1]}
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <div className={classes.sectionDesktop}>
      {!isInitialized || !isSignedIn ? <LoginModal loading={isInitialized} /> : null}
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

      <Button
        aria-label="show languages"
        aria-controls={languageMenuId}
        aria-haspopup="true"
        onClick={handleLanguageMenuOpen}
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
      >
        {locale[1]}
      </Button>

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
