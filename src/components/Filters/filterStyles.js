import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  priceRange: {
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  paper: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      marginBottom: 0,
      padding: '20px 10px',
      height: '100%',
    },
    color: 'rgb(0 0 0 / 56%)',
  },
  filtersHeading: {
    marginBottom: '30px',
  },
  filterButton: {
    width: '100%',
  },
}));
