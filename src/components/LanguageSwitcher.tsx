import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
      title={t('language')}
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language === 'en' ? 'አማርኛ' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitcher;