import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoogleAuthProvider } from './components/Auth/GoogleAuthProvider';
import 'react-toastify/dist/ReactToastify.css';

import { LanguageProvider } from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
