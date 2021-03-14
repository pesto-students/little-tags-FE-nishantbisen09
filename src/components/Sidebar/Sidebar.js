import React, { useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import useStyles from './SidebarStyles';
import logo from '../../assets/app-logo.png';
import { useGoogleAuth } from '../Auth/GoogleAuthProvider';
import LoginModal from '../Auth/LoginModal';
import LanguageSelector from '../Internationalization/LanguageSelector';
import LoginModalOpener from '../Auth/LoginModalOpener';
import topCategories from '../../data/categories';

function Sidebar() {
  const classes = useStyles();
  const [isSideBarOpen, toggleSideBar] = useState(false);
  const { isInitialized, isSignedIn, googleUser, signOut } = useGoogleAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const history = useHistory();

  const onDotMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const onDotMenuCLose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = () => {
    signOut();
    onDotMenuCLose();
  };

  const onCategoryClick = url => {
    history.push(url);
    toggleSideBar(false);
  };

  const menu = () => (
    <div className={classes.list}>
      <div className={classes.sidebarLogoContainer}>
        <div className={classes.sidebarLogo} style={{ backgroundImage: `url(${logo})` }} />
      </div>
      <Divider />
      <h2 className={classes.menuHeader}>Categories</h2>
      <List>
        {topCategories.map(({ id, name, image, url }) => (
          <ListItem
            button
            key={id}
            className={classes.listItemStyle}
            onClick={() => onCategoryClick(url)}
          >
            <div style={{ backgroundImage: `url(${image})` }} className={classes.categoryImage} />
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Hidden smUp>
        <div className={classes.mobileMenuContainer}>
          <Divider />
          <LanguageSelector style={{ width: '100%', justifyContent: 'space-evenly' }} />
          {googleUser && googleUser.profileObj ? (
            <>
              <div className={classes.username}>
                <Button
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={onDotMenuClick}
                  startIcon={<AccountCircle className={classes.accountCircle} />}
                  endIcon={<ExpandMoreIcon />}
                  style={{ width: '100%', justifyContent: 'space-evenly' }}
                >
                  {googleUser.profileObj.name}
                </Button>

                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={onDotMenuCLose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                >
                  <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <div className={classes.login}>
                {!isInitialized || !isSignedIn ? (
                  <>
                    <LoginModalOpener loading={isInitialized} />
                    <LoginModal />
                  </>
                ) : null}
              </div>
            </>
          )}
        </div>
      </Hidden>
    </div>
  );

  const onMenuButtonClick = event => {
    event.stopPropagation();
    toggleSideBar(true);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuButtonClick}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isSideBarOpen}
        onClose={() => toggleSideBar(false)}
        ModalProps={{ keepMounted: true }}
      >
        {menu()}
      </Drawer>
    </>
  );
}

export default Sidebar;
