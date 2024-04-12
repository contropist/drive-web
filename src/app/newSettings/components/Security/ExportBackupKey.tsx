import { useTranslationContext } from 'app/i18n/provider/TranslationProvider';
import { handleExportBackupKey } from 'app/utils/backupKeyUtils';

import Button from 'app/shared/components/Button/Button';
import Card from 'app/shared/components/Card';
import Section from 'app/core/views/Preferences/components/Section';

const ExportBackupKey = (): JSX.Element => {
  const { translate } = useTranslationContext();

  return (
    <Section className="basis-1/2" title={translate('views.account.tabs.security.backupKey.title')}>
      <Card className="mr-4">
        <p className="text-gray-60">{translate('views.account.tabs.security.backupKey.description')}</p>
        <Button variant="secondary" onClick={() => handleExportBackupKey(translate)} className="mt-3">
          {translate('views.account.tabs.security.backupKey.button')}
        </Button>
      </Card>
    </Section>
  );
};

export default ExportBackupKey;
