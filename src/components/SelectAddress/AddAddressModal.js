import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const AddAddressModal = ({ open, onSave, onCancel }) => {
  return (
    <div>
      <Dialog onClose={onCancel} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={onCancel}>
          Add Address
        </DialogTitle>
        <DialogContent dividers>
          <Container>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField error={false} required label="First Name" variant="outlined" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField error={false} required label="Last Name" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField error={false} required label="Email" variant="outlined" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField error={false} required label="Phone" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField error={false} required label="Address" variant="outlined" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField error={false} required label="State" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField error={false} required label="City" variant="outlined" />
                  </Grid>
                  <Grid item md={6}>
                    <TextField error={false} required label="Pin Code" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onSave} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAddressModal;
