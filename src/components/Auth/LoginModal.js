import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Divider } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';
import GoogleLoginButton from './GoogleLoginButton';
import './login.css';
import loginHeader from '../../assets/app-logo.png';
import { closeLoginModal } from '../../redux/actions/loginModal';
import { useGoogleAuth } from './GoogleAuthProvider';

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    minHeight: '200px',
    backgroundColor: 'rgb(72,89,107,0.1)',
  },
  actions: {
    backgroundColor: 'rgb(72,89,107,0.1)',
  },
  verticalMargin: {
    marginTop: '10px',
    marginBottom: '10px',
  },

  loginButton: {
    margin: '0 8px',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
    },
  },
}));

function LoginModal({ loginModalState, loginModalClose }) {
  const classes = useStyles();

  const { isSignedIn } = useGoogleAuth();

  const handleClose = () => {
    loginModalClose();
  };

  useEffect(() => {
    handleClose();
  }, [isSignedIn]);

  return (
    <Dialog
      open={loginModalState.isOpen}
      onClose={loginModalClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogContent className={classes.dialogPaper}>
        <div className="login-container">
          <div className="login-header-container">
            <div className="login-header" style={{ backgroundImage: `url(${loginHeader})` }} />
          </div>
          <Divider />
          <div className="login-btn">
            <GoogleLoginButton />
          </div>
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  loginModalState: state.loginModalReducer,
});

const mapDispatchToProps = {
  loginModalClose: closeLoginModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
