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
    justifyContent: 'space-between',
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
    margin: '5px 15px',
  },
  listItemStyle: {
    color: '#3F51B5',
    transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      borderColor: '#3f51b5',
      backgroundColor: '#3f51b51f',
    },
    '&:focus': {
      borderColor: '#3f51b5',
      backgroundColor: '#3f51b51f',
    },
  },
  sidebarUser: {
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      flexGrow: 1,
    },
  },
  login: {
    padding: '10px',
  },
  mobileMenuContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
}));
