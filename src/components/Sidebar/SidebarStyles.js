import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  list: {
    width: '260px',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sidebarLogoContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '8px',
  },
  sidebarLogo: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '55px',
    width: '160px',
  },
  username: {
    padding: '8px',
    textAlign: 'center',
    color: '#00ADB5',
    display: 'flex  ',
    alignItems: 'center',
  },
  accountCircle: {
    marginRight: '5px',
    fontSize: '26px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  },
  menuHeader: {
    padding: '8px',
    fontWeight: '500',
    marginTop: '5px',
  },
  listItemStyle: {
    color: '#000000a1',
    transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: '#00adb521',
      color: '#00ADB5',
    },
    '&:focus': {
      backgroundColor: '#00adb521',
      color: '#00ADB5',
    },
  },
  sidebarUser: {
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  login: {
    padding: '10px',
  },
}));
