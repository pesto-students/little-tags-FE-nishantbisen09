import React, { Fragment, useState, useContext, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import LOCALES from './locales';
import messages from './messages';

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale[0]} textComponent={Fragment} messages={messages[locale[0]]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
