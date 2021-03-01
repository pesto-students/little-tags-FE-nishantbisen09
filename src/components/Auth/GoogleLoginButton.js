import React from 'react';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import { useGoogleAuth } from './GoogleAuthProvider';

function GoogleLoginButton() {
  const { signIn } = useGoogleAuth();
  return (
    <Button
      variant="outlined"
      startIcon={
        <img
          width="15px"
          style={{ marginBottom: '3px', marginRight: '5px' }}
          alt="Google login"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
      }
      onClick={signIn}
      className="hollow button primary"
    >
      <FormattedMessage id="signInWithGoogle" />
    </Button>
  );
}

export default GoogleLoginButton;
