import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import 'slick-carousel/slick/slick.css';
import { GoogleAuthProvider } from './components/Auth/GoogleAuthProvider';
import 'slick-carousel/slick/slick-theme.css';
import store from './redux/store';

import { LanguageProvider } from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <LanguageProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LanguageProvider>
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
