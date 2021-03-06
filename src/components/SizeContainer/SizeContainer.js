import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { SIZES } from '../../utility';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '5px',
  },
  sizeBtn: {
    borderRadius: '50%',
    minWidth: '40px',
    minHeight: '40px',
    border: '1px solid #0000001f',
    margin: '0 5px',

    '&:hover': {
      borderColor: '#3f51b5',
      backgroundColor: '#3f51b51f',
    },
    '&:focus': {
      borderColor: '#3f51b5',
      backgroundColor: '#3f51b51f',
    },
  },
  active: {
    borderColor: '#3f51b5',
    backgroundColor: '#3f51b51f',
  },
}));

const SizeContainer = ({ value, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {SIZES.map(size => {
        return (
          <Button
            key={size}
            variant="text"
            className={`${classes.sizeBtn} ${size === value ? classes.active : ''}`}
            onClick={() => onClick(size)}
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
};

export default SizeContainer;
