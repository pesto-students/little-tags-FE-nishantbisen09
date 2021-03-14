import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
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
  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            {cart.length ? (
              cart.map(product => <SingleProductCard product={product} />)
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

  const handleReset = () => {
    setActiveStep(0);
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
                    disabled={!cart.length}
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
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cartReducer,
});

export default connect(mapStateToProps, null)(CheckoutFlow);
