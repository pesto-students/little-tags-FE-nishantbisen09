import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  dialogPaper: {
    minHeight: '400px',
  },
}));
function LoginModal() {
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
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent className={classes.dialogPaper}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <h2>Login</h2>
                <p>Login to get access to your Orders, Wishlists and your personalized settings</p>
              </Grid>
              <Grid item xs={12} sm={8}>
                <p>Login With Google</p>
                <p>Login With Facebook</p>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginModal;
