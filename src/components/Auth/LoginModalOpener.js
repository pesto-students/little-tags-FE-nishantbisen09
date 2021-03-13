import React from 'react';
import { connect } from 'react-redux';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import { openLoginModal } from '../../redux/actions/loginModal';

const useStyles = makeStyles(theme => ({
  loginButton: {
    margin: '0 8px',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
    },
  },
}));

function LoginModalOpener({ loading, loginModalOpen }) {
  const classes = useStyles();
  return (
    <Button
      startIcon={<LockOpenIcon />}
      disabled={!loading}
      variant="contained"
      color="primary"
      onClick={loginModalOpen}
      className={classes.loginButton}
    >
      <FormattedMessage id="loginButtonText" />
    </Button>
  );
}

const mapDispatchToProps = {
  loginModalOpen: openLoginModal,
};

export default connect(null, mapDispatchToProps)(LoginModalOpener);
