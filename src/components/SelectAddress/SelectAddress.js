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
import { AddCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import AddAddressModal from './AddAddressModal';

const addresses = [
  {
    id: 1,
    firstName: 'Nishant',
    lastName: 'Bisen',
    email: 'nishantbisen09@gmail.com',
    state: 'Maharashtra',
    city: 'Nagpur',
    pin: '440013',
    address: '14, Welcome So. Gorewada Rd',
  },
  {
    id: 2,
    firstName: 'Tejas',
    lastName: 'H',
    email: 'codingcreate@gmail.com',
    state: 'Banglore',
    city: 'Karnataka',
    pin: '440013',
    address: '14, Welcome So. Gorewada Rd',
  },
];

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
}));

const SelectAddress = () => {
  const classes = useStyles();
  const [currentAddressValue, setCurrentAddressValue] = useState(1);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleChange = event => {
    setCurrentAddressValue(parseInt(event.target.value, 10));
  };
  return (
    <Grid container justify="center" direction="column" className={classes.root}>
      <Grid item>
        <FormControl component="span">
          <RadioGroup
            aria-label="address"
            name="address"
            value={currentAddressValue}
            onChange={handleChange}
          >
            {addresses.map(({ id, firstName, lastName, email, state, city, pin, address }) => {
              return (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio color="primary" />}
                  label={
                    <Paper elevation={3} className={classes.paper}>
                      <h4>
                        {firstName} {lastName}
                      </h4>
                      <h6>{email}</h6>
                      <h6>
                        {address}, {city}, {state}
                      </h6>
                      <h6>{pin}</h6>
                    </Paper>
                  }
                />
              );
            })}
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
      <AddAddressModal
        open={isAddressModalOpen}
        onCancel={() => setIsAddressModalOpen(false)}
        onSave={() => {
          setIsAddressModalOpen(false);
        }}
      />
    </Grid>
  );
};

export default SelectAddress;
