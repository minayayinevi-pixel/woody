import React, { createContext, useContext, useState } from 'react';
import translations from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  const switchLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang, languages: Object.keys(translations).map(k => ({ code: k, flag: translations[k].flag, name: translations[k].lang })) }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
