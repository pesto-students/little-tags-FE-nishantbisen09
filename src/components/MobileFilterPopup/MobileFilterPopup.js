import { createMuiTheme, Drawer, ThemeProvider } from '@material-ui/core';
import React from 'react';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorBottom: {
        top: 0,
      },
    },
  },
});

const MobileFilterPopup = ({ open, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer anchor="bottom" open={open}>
        {children}
      </Drawer>
    </ThemeProvider>
  );
};

export default MobileFilterPopup;
