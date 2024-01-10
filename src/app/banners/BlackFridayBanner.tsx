import { CircleWavyCheck, X } from '@phosphor-icons/react';
import { useTranslationContext } from 'app/i18n/provider/TranslationProvider';
import ChristmasBG from '../../assets/images/banner/christmas_banner_bg.png';

const BlackFridayBanner = ({ showBanner, onClose }: { showBanner: boolean; onClose: () => void }): JSX.Element => {
  const { translate } = useTranslationContext();

  const features = [
    {
      title: translate('blackFridayBanner.features.discount'),
    },
    {
      title: translate('blackFridayBanner.features.safeCloud'),
    },
    {
      title: translate('blackFridayBanner.features.openSource'),
    },
    {
      title: translate('blackFridayBanner.features.endToEnd'),
    },
    {
      title: translate('blackFridayBanner.features.unauthorized'),
    },
    {
      title: translate('blackFridayBanner.features.offerEnds'),
    },
  ];

  return (
    <div
      className={`${showBanner ? 'flex' : 'hidden'} 
         absolute bottom-0 left-0 right-0 top-0 z-10 bg-black bg-opacity-40`}
    >
      <div
        style={{ backgroundImage: `url(${ChristmasBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className={`absolute left-1/2 top-1/2 flex h-auto w-full max-w-4xl -translate-x-1/2 -translate-y-1/2
        transform flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-black to-primary text-gray-100`}
      >
        <button className="absolute right-0 m-5 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex w-full flex-row justify-between px-20 py-16">
          <div className="flex  w-full flex-col items-start justify-between">
            <div className="flex w-full max-w-xxs flex-col space-y-4">
              <p className="text-3xl font-semibold text-white">{translate('blackFridayBanner.header')}</p>
              <p className="text-5xl font-bold text-white">{translate('blackFridayBanner.title')}</p>
            </div>
            <button
              onClick={() => {
                window.open('https://internxt.com/lifetime#payment', '_blank', 'noopener noreferrer');
              }}
              className="w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white"
            >
              {translate('blackFridayBanner.cta')}
            </button>
          </div>
          <div className="flex h-full w-full flex-col space-y-6 text-white">
            {features.map((item) => (
              <div className="flex w-full flex-row items-center space-x-4" key={item.title}>
                <CircleWavyCheck weight={'fill'} className="text-primary" size={32} />
                <p className="whitespace-nowrap text-xl font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
