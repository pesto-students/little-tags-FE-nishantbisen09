import React from 'react';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import { useGoogleAuth } from './GoogleAuthProvider';
import googleLogo from '../../assets/google-plus.png';
import './login.css';

function GoogleLoginButton() {
  const { signIn } = useGoogleAuth();
  return (
    <>
      <Button
        variant="contained"
        startIcon={
          <img
            style={{ marginBottom: '3px', marginRight: '5px', width: '34px' }}
            alt="Google login"
            src={googleLogo}
          />
        }
        onClick={signIn}
        className="google-btn hollow button primary"
      >
        <FormattedMessage id="signInWithGoogle" />
      </Button>
    </>
  );
}

export default GoogleLoginButton;
