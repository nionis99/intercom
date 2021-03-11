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

  const selectLanguage = (lng: string) => {
    localStorage.setItem('lng', lng);
    moment.locale(lng);
    return i18n.changeLanguage(lng);
  };

  return (
    <Dropdown
      className={`${floating ? 'position-absolute lang-position' : 'd-flex flex-column w-100 align-items-center'} `}
      alignRight
    >
      <Dropdown.Toggle
        variant="transparent"
        className={`${floating ? 'text-black' : 'text-white'} d-flex outline-none`}
      >
        <LanguageItem shortName={i18n.language} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="text-md-center w-100">
        {availableLanguages
          .filter((lng) => lng !== i18n.language)
          .map((lng) => (
            <Dropdown.Item key={lng} onClick={() => selectLanguage(lng)} style={{ color: 'black' }}>
              <LanguageItem shortName={lng} />
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelect;
