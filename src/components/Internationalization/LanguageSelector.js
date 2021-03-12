import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TranslateIcon from '@material-ui/icons/Translate';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { localList } from '../../i18n/locales';
import { useLanguage } from '../../i18n/LanguageProvider';

const languageMenuId = 'language-menu';

function LanguageSelector({ style = {} }) {
  const { setLocale: setLanguage, locale } = useLanguage();
  const [languageSelectAnchorEl, setLanguageSelectAnchorEl] = useState(null);

  const isLanguageMenuOpen = Boolean(languageSelectAnchorEl);

  const handleLanguageMenuOpen = event => {
    setLanguageSelectAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageSelectAnchorEl(null);
  };

  const selectLanguage = local => {
    setLanguage(local);
    handleLanguageMenuClose();
  };

  return (
    <>
      <Button
        aria-label="show languages"
        aria-controls={languageMenuId}
        aria-haspopup="true"
        onClick={handleLanguageMenuOpen}
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
        style={style}
      >
        {locale.languageName}
      </Button>

      <Menu
        anchorEl={languageSelectAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={languageMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isLanguageMenuOpen}
        onClose={handleLanguageMenuClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {localList.map(item => {
          return (
            <MenuItem key={Math.random()} onClick={() => selectLanguage(item)}>
              {item.languageName}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default LanguageSelector;
