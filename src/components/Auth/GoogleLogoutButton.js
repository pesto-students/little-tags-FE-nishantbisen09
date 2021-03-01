import React from 'react';
import Button from '@material-ui/core/Button';
import { useGoogleAuth } from './GoogleAuthProvider';

function LogoutButton() {
  const { signOut } = useGoogleAuth();

  return <Button onClick={signOut}>Logout</Button>;
}

export default LogoutButton;
