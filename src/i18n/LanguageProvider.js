import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import LOCALES from './locales';
import messages from './messages';

const LanguageContext = React.createContext();

function LanguageProvider({ children }) {
  const [locale, setLocale] = React.useState(LOCALES.ENGLISH[0]);
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => React.useContext(LanguageContext);

export default LanguageProvider;
