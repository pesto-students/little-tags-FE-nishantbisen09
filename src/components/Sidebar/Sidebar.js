import React, { useState } from 'react';
import { AccountCircle, Inbox, Mail, MoreVert } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Button,
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

function Sidebar() {
  const classes = useStyles();
  const [isSideBarOpen, toggleSideBar] = useState(false);
  const { isInitialized, isSignedIn, googleUser, signOut } = useGoogleAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

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

  const menu = () => (
    <div className={classes.list}>
      <div className={classes.sidebarLogoContainer}>
        <div className={classes.sidebarLogo} style={{ backgroundImage: `url(${logo})` }} />
      </div>
      <Divider />
      {googleUser && googleUser.profileObj ? (
        <>
          <div className={classes.username}>
            <AccountCircle className={classes.accountCircle} />
            <h3 className={classes.sidebarUser}>Hi, {googleUser.profileObj.name}</h3>
            <Hidden smUp>
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={onDotMenuClick}
                >
                  <MoreVert />
                </IconButton>
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
            </Hidden>
          </div>
          <Divider />
        </>
      ) : (
        <Hidden smUp>
          <div className={classes.login}>
            {!isInitialized || !isSignedIn ? <LoginModal loading={isInitialized} /> : null}
          </div>
          <Divider />
        </Hidden>
      )}
      <h2 className={classes.menuHeader}>Categories</h2>
      <List>
        {['Indian wear', 'Western wear', 'Jewellery', 'Accessories'].map((text, index) => (
          <ListItem button key={text} className={classes.listItemStyle}>
            {index % 2 === 0 ? (
              <Inbox style={{ marginRight: '15px' }} />
            ) : (
              <Mail style={{ marginRight: '15px' }} />
            )}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
