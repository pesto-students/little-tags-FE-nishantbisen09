import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoogleAuthProvider } from './components/Auth/GoogleAuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
