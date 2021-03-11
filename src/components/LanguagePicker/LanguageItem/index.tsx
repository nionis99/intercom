import React from 'react';

const languages: Record<string, string> = {
  en: 'English',
  lt: 'Lithuanian',
  ru: 'Russian',
};

const shortNames = Object.keys(languages);

interface Props {
  shortName: string;
}

const LanguageItem = ({ shortName }: Props) => {
  const getLanguageName = (shortName: string) => {
    if (shortNames.includes(shortName)) return languages[shortName];
    return '';
  };

  return (
    <div className="d-flex w-100">
      <img className="lang-item" src={`/images/flags/${shortName}.png`} alt={shortName} width="20" height="20" />
      <span className="color-black ml-2">{getLanguageName(shortName)}</span>
    </div>
  );
};

export default LanguageItem;
