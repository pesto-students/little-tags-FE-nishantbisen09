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
import SelectAddress from '../../components/SelectAddress/SelectAddress';
import SingleProductCard from '../../components/Cart/SingleProductCard';
import EmptyCart from '../../components/Cart/EmptyCart';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '12px 0px',
    padding: 0,
    paddingTop: '24px',
    background: '#0000',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
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
        return `Payment method`;
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

              <div className={classes.actionsContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>

                {steps[activeStep + 1] ? (
                  <Button
                    disabled={!cart.length}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {steps[activeStep + 1] || 'Finish'}
                  </Button>
                ) : null}
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
