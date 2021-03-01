import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './SidebarStyles';

function Sidebar() {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
    >
      <MenuIcon />
    </IconButton>
  );
}

export default Sidebar;
