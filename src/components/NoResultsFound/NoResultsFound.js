import React from 'react';
import notFound from '../../assets/not-found.png';

const NoResultsFound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${notFound})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        height: '300px',
        width: '300px',
      }}
    />
  );
};

export default NoResultsFound;
