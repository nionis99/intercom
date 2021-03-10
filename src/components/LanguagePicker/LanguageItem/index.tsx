import React from 'react';

const languages: Record<string, string> = {
  en: 'English',
  lt: 'Lithuanian',
  ru: 'Russian',
};

const shortNames = Object.keys(languages);

interface Props {
  shortName: string;
  className?: string;
}

const LanguageItem = ({ shortName, className = '' }: Props) => {
  const getLanguageName = (shortName: string) => {
    if (shortNames.includes(shortName)) return languages[shortName];
    return '';
  };

  return (
    <div className="d-inline-flex justify-content-center align-items-center">
      <img className=" lang-item" src={`/images/flags/${shortName}.png`} alt={shortName} width="20" height="20" />
      <span className={`${className} ml-2`}>{getLanguageName(shortName)}</span>
    </div>
  );
};

export default LanguageItem;
