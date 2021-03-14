import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import { connect } from 'react-redux';
import AddEditAddressModal from './AddEditAddressModal';
import {
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  setCurrentAddress,
} from '../../redux/actions/address';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
  },
  paper: {
    padding: '10px',
    margin: '10px',
  },
  addAddressContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#3F51B5',
  },
  plusIcon: {
    marginRight: '10px',
  },
  editIcon: {
    color: '#2d3748b3',
    margin: '0 5px',
  },
  deleteIcon: {
    color: '#E65B65',
    margin: '0 5px',
  },
}));

const SelectAddress = ({
  addresses,
  addAddress: addNewAddress,
  updateAddress: updateAddressData,
  deleteAddress: deleteAddressData,
  setDefaultAddress: setDefaultAddressData,
  currentAddress,
  setCurrentAddress: setCurrentAddressData,
}) => {
  const classes = useStyles();
  const [addressUnderModification, setAddressUnderModification] = useState();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = event => {
    if (isEditMode) return;
    setCurrentAddressData(event.target.value);
  };

  const onAddressSaveClick = (address, isDefaultAddressChanged) => {
    if (isEditMode) {
      updateAddressData({ id: addressUnderModification, address });
      if (isDefaultAddressChanged) setDefaultAddressData(addressUnderModification);
    } else {
      addNewAddress([...addresses, address]);
      if (isDefaultAddressChanged) setDefaultAddressData(address.id);
    }
    if (!currentAddress) setCurrentAddressData(address.id);
    setIsAddressModalOpen(false);
    setIsEditMode(false);
  };

  const onEditClick = itemID => {
    setIsEditMode(true);
    setAddressUnderModification(itemID);
    setIsAddressModalOpen(true);
  };

  const onCancelClick = () => {
    setIsAddressModalOpen(false);
    setIsEditMode(false);
    setAddressUnderModification(null);
  };

  return (
    <Grid container justify="center" direction="column" className={classes.root}>
      <Grid item>
        <FormControl component="span">
          <RadioGroup
            aria-label="address"
            name="address"
            value={currentAddress}
            onChange={handleChange}
          >
            {addresses.map(
              ({ id, firstName, lastName, email, state, city, pin, address, mobile }) => {
                return (
                  <FormControlLabel
                    key={id}
                    value={id}
                    control={<Radio color="primary" />}
                    label={
                      <Grid container justify="flex-start" alignItems="center">
                        <Grid item>
                          <Paper elevation={3} className={classes.paper}>
                            <h4>
                              {firstName} {lastName}
                            </h4>
                            <h6>{email}</h6>
                            <h6>{mobile}</h6>
                            <h6>
                              {address}, {city}, {state}
                            </h6>
                            <h6>{pin}</h6>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Grid container>
                            <Grid item>
                              <Edit className={classes.editIcon} onClick={() => onEditClick(id)} />
                            </Grid>
                            <Grid item>
                              <Delete
                                className={classes.deleteIcon}
                                onClick={() => deleteAddressData(id)}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    }
                  />
                );
              }
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          className={classes.addAddressContainer}
          onClick={() => setIsAddressModalOpen(true)}
        >
          <AddCircle className={classes.plusIcon} /> <span>Add address</span>
        </Button>
      </Grid>
      <AddEditAddressModal
        title={isEditMode ? 'Edit Address' : 'Add Address'}
        data={isEditMode ? addresses.find(({ id }) => id === addressUnderModification) : {}}
        open={isAddressModalOpen}
        onCancel={onCancelClick}
        onSave={onAddressSaveClick}
        saveBtnText={isEditMode ? 'Save Changes' : 'Add Address'}
        addressCount={addresses.length}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  addresses: state.address.address,
  currentAddress: state.address.currentAddress,
});

export default connect(mapStateToProps, {
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
  setCurrentAddress,
})(SelectAddress);
