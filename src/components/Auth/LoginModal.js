import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Divider } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import GoogleLoginButton from './GoogleLoginButton';
import './login.css';
import loginHeader from '../../assets/app-logo.png';

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

function LoginModal({ loading }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<LockOpenIcon />}
        disabled={!loading}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={classes.loginButton}
      >
        <FormattedMessage id="loginButtonText" />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
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
    </>
  );
}

export default LoginModal;
