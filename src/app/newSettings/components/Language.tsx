import i18next from 'i18next';
import React, { useEffect } from 'react';

import localStorageService from 'app/core/services/local-storage.service';
import { useTranslationContext } from 'app/i18n/provider/TranslationProvider';
import Card from 'app/shared/components/Card';

import { CaretDown } from '@phosphor-icons/react';
import dayjs from 'dayjs';
import Section from '../../core/views/Preferences/components/Section';
import ItemsDropdown from '../../core/views/Preferences/tabs/Account/components/ItemsDropdown';
import MenuItem from '../../core/views/Preferences/tabs/Account/components/MenuItem';

const localStorageLanguage = localStorageService.get('i18nextLng');

const languages = ['en', 'es', 'fr', 'it', 'zh', 'ru', 'de'];

export default function Language(): JSX.Element {
  const { translate } = useTranslationContext();
  const [lang, setLang] = React.useState<string>();

  function changeLang(lang: string = localStorageLanguage ?? i18next.language) {
    setLang(lang);
  }

  useEffect(() => {
    if (localStorageLanguage) {
      changeLang(localStorageLanguage);
    } else {
      changeLang(i18next.language);
    }
  }, []);

  useEffect(() => {
    changeLang(i18next.language);
  }, [lang]);
  return (
    <Section className="" title={translate('lang.title')}>
      <Card className="w-fit py-3 dark:bg-gray-5">
        <ItemsDropdown
          title={
            <div className="flex flex-row items-center justify-between space-x-2">
              <p className="text-base font-medium leading-5">{translate(`lang.${lang}`)}</p>
              <CaretDown size={10} />
            </div>
          }
          menuItems={languages.map((lang) => (
            <MenuItem
              key={lang}
              onClick={() => {
                setLang(lang);
                i18next.changeLanguage(lang);
                dayjs.locale(lang);
              }}
            >
              <p>{translate(`lang.${lang}`)}</p>
            </MenuItem>
          ))}
        />
      </Card>
    </Section>
  );
}
