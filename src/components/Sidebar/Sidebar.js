import React, { useState } from 'react';
import { AccountCircle, Inbox, Mail } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './SidebarStyles';
import logo from '../../assets/app-logo.png';
import { useGoogleAuth } from '../Auth/GoogleAuthProvider';

function Sidebar() {
  const classes = useStyles();
  const [isSideBarOpen, toggleSideBar] = useState(false);
  const { googleUser } = useGoogleAuth();

  const menu = () => (
    <div className={classes.list}>
      <div className={classes.sidebarLogoContainer}>
        <div className={classes.sidebarLogo} style={{ backgroundImage: `url(${logo})` }} />
      </div>
      <Divider />
      {googleUser && googleUser.profileObj && (
        <>
          <div className={classes.username}>
            <AccountCircle className={classes.accountCircle} />
            <h3>Hi, {googleUser.profileObj.name}</h3>
          </div>
          <Divider />
        </>
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
