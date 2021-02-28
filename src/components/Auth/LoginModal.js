import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import GoogleLoginButton from './GoogleLoginButton';

const useStyles = makeStyles(() => ({
  lightBlueBG: {
    backgroundColor: '#E8EAF6',
  },
  dialogPaper: {
    minHeight: '200px',
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
        Login
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
            <Grid item xs={12} sm={4} align="left">
              <h2>Login</h2>
              <p>Login to get access to your Orders, Wishlists and your personalized settings</p>
            </Grid>
            <Grid item xs={12} sm={8}>
              <GoogleLoginButton />
              {/* Login with Facebook */}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.lightBlueBG}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginModal;
