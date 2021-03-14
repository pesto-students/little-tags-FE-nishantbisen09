import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Checkbox, Container, FormControlLabel, Grid, TextField } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';

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

const getUniqueId = () => Math.floor(Math.random() * 1000).toString();

const initialState = {
  id: getUniqueId(),
  firstName: '',
  lastName: '',
  email: '',
  state: '',
  city: '',
  pin: '',
  address: '',
  mobile: '',
  isDefault: true,
};

const AddEditAddressModal = ({
  open,
  onSave,
  onCancel,
  title,
  saveBtnText,
  data,
  addressCount,
}) => {
  const [addressData, setAddressData] = useState(initialState);

  useEffect(() => {
    if (!isEmpty(data)) setAddressData(data);
  }, [data]);

  const onInputChange = event => {
    setAddressData({ ...addressData, [event.target.name]: event.target.value });
  };

  const onDefaultChange = event => {
    setAddressData({ ...addressData, [event.target.name]: event.target.checked });
  };

  const isDefaultChanged = () => {
    if (!isEmpty(data)) {
      return data.isDefault !== addressData.isDefault;
    }
    return addressData.isDefault;
  };

  const onDataSave = () => {
    onSave(addressData, isDefaultChanged());
    setAddressData({ ...initialState, id: getUniqueId() });
  };

  const onCancelClick = () => {
    setAddressData({ ...initialState, id: getUniqueId() });
    onCancel();
  };

  const { firstName, lastName, email, state, city, pin, address, mobile, isDefault } = addressData;
  return (
    <div>
      <Dialog onClose={onCancelClick} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={onCancel}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Container>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      value={firstName}
                      onChange={onInputChange}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      value={lastName}
                      onChange={onInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={email}
                      onChange={onInputChange}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="Phone"
                      name="mobile"
                      variant="outlined"
                      value={mobile}
                      onChange={onInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="Address"
                      name="address"
                      variant="outlined"
                      value={address}
                      onChange={onInputChange}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="State"
                      name="state"
                      variant="outlined"
                      value={state}
                      onChange={onInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="City"
                      name="city"
                      variant="outlined"
                      value={city}
                      onChange={onInputChange}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      error={false}
                      required
                      label="Pin Code"
                      name="pin"
                      variant="outlined"
                      value={pin}
                      onChange={onInputChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {addressCount ? (
                <Grid item>
                  <Grid container spacing={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isDefault}
                          onChange={onDefaultChange}
                          value={isDefault}
                          name="isDefault"
                          color="primary"
                        />
                      }
                      label="Mark as default"
                      disabled={!addressCount}
                    />
                  </Grid>
                  <Grid item />
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onDataSave} color="primary">
            {saveBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEditAddressModal;
