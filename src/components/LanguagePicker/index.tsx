import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from 'utils/i18n';
import moment from 'moment';
import LanguageItem from './LanguageItem';

interface Props {
  floating?: boolean;
}

const LanguageSelect = ({ floating = false }: Props) => {
  const { i18n } = useTranslation();
  const textColor = floating ? 'text-black' : 'text-white';

  const selectLanguage = (lng: string) => {
    localStorage.setItem('lng', lng);
    moment.locale(lng);
    return i18n.changeLanguage(lng);
  };

  return (
    <Dropdown className={floating ? 'position-absolute lang-position' : ''} alignRight>
      <Dropdown.Toggle variant="transparent" className={`${textColor} outline-none`}>
        <LanguageItem shortName={i18n.language} className={textColor} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-md-center">
        {availableLanguages
          .filter((lng) => lng !== i18n.language)
          .map((lng) => (
            <Dropdown.Item key={lng} onClick={() => selectLanguage(lng)}>
              <LanguageItem shortName={lng} />
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelect;
