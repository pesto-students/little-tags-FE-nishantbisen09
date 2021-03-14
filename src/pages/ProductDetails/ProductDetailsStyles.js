import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    marginBottom: '50px',
    fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  description: {
    maxWidth: '600px',
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  price: {
    marginBottom: 15,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  star: {
    color: '#3f51b5',
    fontSize: '20px',
    marginLeft: '5px',
  },
  size: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  addToCart: {
    fontSize: '22px',
    marginRight: '8px',
  },
  details: {
    padding: '20px',
  },
  totalReviews: {
    marginLeft: '20px',
  },
  paper: {
    boxShadow: '0px 3px 1px -2px #3f51b563, 0px 2px 2px 0px #3f51b563, 0px 1px 5px 0px #3f51b563',
  },
  imagePaper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
      width: '50vh',
    },
  },
  actionBtn: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  similarProducts: {
    marginBottom: '60px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
}));
