import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { LanguageProvider, LOCALES } from './i18n';
import HomePage from './pages/HomePage';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <LanguageProvider locale={locale} setLocale={setLocale}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
