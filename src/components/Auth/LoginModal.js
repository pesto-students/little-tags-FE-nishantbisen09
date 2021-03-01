import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import GoogleLoginButton from './GoogleLoginButton';
import LoginImage from '../../assets/login_image.png';

const useStyles = makeStyles(() => ({
  lightBlueBG: {
    backgroundColor: '#E8EAF6',
  },
  dialogPaper: {
    minHeight: '200px',
  },

  verticalMargin: {
    marginTop: '10px',
    marginBottom: '10px',
  },
}));

function LoginModal({ loading }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button disabled={!loading} variant="contained" color="primary" onClick={handleClickOpen}>
        <FormattedMessage id="loginButtonText" />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent className={`${classes.dialogPaper} ${classes.lightBlueBG}`}>
          <Grid
            className={classes.dialogPaper}
            container
            spacing={3}
            align="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} align="center">
              {/* <h2 className={classes.verticalMargin}>
                <FormattedMessage id="loginTitle" />
              </h2>

              <hr />

              <p className={classes.verticalMargin}>
                <FormattedMessage id="loginDescription" />
              </p> */}
              <img src={LoginImage} alt="login" width="100px" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <GoogleLoginButton />
              {/* Login with Facebook */}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LoginModal;
