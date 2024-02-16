import localStorageService from '../core/services/local-storage.service';
import { RootState } from '../store';
import { useAppSelector } from '../store/hooks';
import { PlanState } from '../store/slices/plan';
import { userSelectors } from '../store/slices/user';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FeaturesBanner from './FeaturesBanner';
import { UserSettings } from '@internxt/sdk/dist/shared/types/userSettings';

const SHOW_BANNER_COOKIE_NAME = 'show_valentines_banner_sale';
const OFFER_OFF_DAY = new Date('2024-02-25');

const BannerWrapper = (): JSX.Element => {
  const [showBanner, setShowBanner] = useState(false);
  const user = useSelector((state: RootState) => state.user.user) as UserSettings;
  const plan = useSelector<RootState, PlanState>((state) => state.plan);
  const isTutorialCompleted = localStorageService.hasCompletedTutorial(user.userId);
  const userPlan = plan.subscription?.type;
  const isNewAccount = useAppSelector(userSelectors.hasSignedToday);
  const isLocalStorage = localStorageService.get(SHOW_BANNER_COOKIE_NAME);
  const isOfferOffDay = new Date() > OFFER_OFF_DAY;

  const shouldShowBanner = userPlan === 'free' && !isLocalStorage && !isOfferOffDay;

  useEffect(() => {
    handleBannerDisplay();
  }, [isTutorialCompleted, userPlan, isNewAccount]);

  const onCloseBanner = () => {
    localStorageService.set(SHOW_BANNER_COOKIE_NAME, 'false');
    setShowBanner(false);
  };

  function handleBannerDisplay() {
    if ((isNewAccount && isTutorialCompleted && shouldShowBanner) || (!isNewAccount && shouldShowBanner)) {
      setShowBanner(true);
    }
  }

  return <FeaturesBanner showBanner={showBanner} onClose={onCloseBanner} />;
};

export default BannerWrapper;
