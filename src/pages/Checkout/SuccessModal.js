import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

function SuccessModal({ isSuccessModalOpen = false, setIsSuccessModalOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const history = useHistory();

  const handleClose = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isSuccessModalOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <div style={{ backgroundColor: '#0f834d', color: '#fff', textAlign: 'center' }}>
        <DialogTitle id="responsive-dialog-title">
          <h3>Order placed successfully!</h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: '#fff' }}>
            Thank you for shopping with us. Visit us for more exciting offers everyday. Find your
            orders in order history page
          </DialogContentText>
          <Button
            onClick={() => history.push('/orders')}
            color="default"
            variant="contained"
            autoFocus
            style={{ margin: '10px', marginTop: '20px' }}
          >
            Go to order history
          </Button>
        </DialogContent>
        <DialogActions />
      </div>
    </Dialog>
  );
}

export default SuccessModal;
