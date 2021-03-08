import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
    color: 'black',
  },
  logo: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    cursor: 'pointer',
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
