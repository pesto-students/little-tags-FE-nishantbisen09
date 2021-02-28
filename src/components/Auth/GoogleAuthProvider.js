import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';

const GoogleAuthContext = React.createContext();
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: REACT_APP_GOOGLE_CLIENT_ID,
  });

  return <GoogleAuthContext.Provider value={googleAuth}>{children}</GoogleAuthContext.Provider>;
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
