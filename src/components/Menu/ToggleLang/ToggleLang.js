import React from 'react';
import { useTranslation } from 'react-i18next';
import './ToggleLang.css';

const ToggleLang = () => {
  const {t, i18n} = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="changeLang">
      <p className="d-block d-lg-none d-xl-none changeLangText">{t('changeLang.1')}</p>
      {
        i18n.language === "en" ? <span className="siteLang trLang" onClick={() => handleClick('tr')}  /> : <span className="siteLang enLang" onClick={() => handleClick('en')}  />
      }
      <p className="d-block d-lg-none d-xl-none mblCopyright">© 2020 Yagizdo</p>
    </div>
  )
}

export default ToggleLang;