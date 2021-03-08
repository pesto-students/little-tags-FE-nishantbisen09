import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: '7px',
      minWidth: 'auto',
      backgroundColor: '#FFFDE7',
      borderRadius: '50%',
    },
    favoriteIcon: {
      color: '#FFEB3B',
    },
  };
});

const FavoriteButton = ({ onClick, isFavorite, className }) => {
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  const classes = useStyles();
  return (
    <div className={className}>
      <Button
        className={classes.root}
        onClick={event => {
          event.stopPropagation();
          setFavoriteState(!favoriteState);
          if (onClick) onClick();
        }}
      >
        {' '}
        {favoriteState ? (
          <FavoriteIcon className={classes.favoriteIcon} />
        ) : (
          <FavoriteBorderIcon className={classes.favoriteIcon} />
        )}
      </Button>
    </div>
  );
};

export default FavoriteButton;
