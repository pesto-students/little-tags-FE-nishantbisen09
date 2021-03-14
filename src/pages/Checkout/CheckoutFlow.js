import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';
import SelectAddress from '../../components/SelectAddress/SelectAddress';
import SingleProductCard from '../../components/Cart/SingleProductCard';
import EmptyCart from '../../components/Cart/EmptyCart';
import PaymentProcess from './PaymentProcess';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '12px 0px',
    padding: 0,
    paddingTop: '24px',
    background: '#0000',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionDivider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const steps = ['Shopping Cart', 'Select Delivery Address', 'Select Payment Method'];

function CheckoutFlow({ cart }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const addressesCount = useSelector(state => state.address.address.length);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            {cart.length ? (
              cart.map(product => (
                <SingleProductCard key={`${product.id}-${product.currentSize}`} product={product} />
              ))
            ) : (
              <EmptyCart />
            )}
          </>
        );
      case 1:
        return <SelectAddress />;
      case 2:
        return <PaymentProcess />;

      default:
        return 'Unknown step';
    }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper className={classes.root} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <Divider className={classes.actionDivider} />
              <div className={classes.actionsContainer}>
                {steps[activeStep + 1] ? (
                  <Button
                    disabled={!cart.length || (!addressesCount && activeStep === 1)}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Continue
                  </Button>
                ) : null}
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(CheckoutFlow);
