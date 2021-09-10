import { Fragment, useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';

import { getUserLimitString } from '../../../../services/usage.service';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setCurrentAccountTab } from '../../../../store/slices/ui';
import { planSelectors } from '../../../../store/slices/plan';
import { AccountViewTab } from '..';
import { sessionSelectors } from '../../../../store/slices/session/session.selectors';

import DeleteAccountDialog from '../../../../components/dialogs/DeleteAccountDialog/DeleteAccountDialog';
import { bytesToString } from '../../../../services/size.service';
import i18n from '../../../../services/i18n.service';
import { userSelectors } from '../../../../store/slices/user';
import AccountAdvice from '../../../../components/AccountAdvice/AccountAdvice';

const AccountPlanInfoTab = (): JSX.Element => {
  const [isDeleteAccountDialogOpen, setIsDeleteAccountDialogOpen] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const fullName = useAppSelector(userSelectors.userFullName);
  const nameLetters = useAppSelector(userSelectors.nameLetters);
  const isLoadingPlanLimit = useAppSelector((state) => state.plan.isLoadingPlanLimit);
  const planUsage = useAppSelector((state) => state.plan.planUsage);
  const planLimit = useAppSelector(planSelectors.planLimitToShow);
  const isLoadingPlans = useAppSelector((state) => state.plan.isLoadingPlans);
  const currentPlan = useAppSelector(planSelectors.currentPlan);
  const isTeam = useAppSelector(sessionSelectors.isTeam);
  const isCurrentPlanLifetime = useAppSelector(planSelectors.isCurrentPlanLifetime);
  const dispatch = useAppDispatch();
  const onUpgradeButtonClicked = () => {
    dispatch(setCurrentAccountTab(AccountViewTab.Plans));
  };
  const onDeletePermanentlyAccountClicked = (): void => {
    setIsDeleteAccountDialogOpen(true);
  };
  const progressBarFillWidth = isLoadingPlans || isLoadingPlanLimit ? 0 : (planUsage / planLimit) * 100 + '%';
  const progressBarFillStyle = { width: progressBarFillWidth };

  return (
    <Fragment>
      <DeleteAccountDialog isOpen={isDeleteAccountDialogOpen} onClose={() => setIsDeleteAccountDialogOpen(false)} />

      <div className="pt-10">
        {/* ACCOUNT INFO */}
        <div className="max-w-sm mb-20">
          {/* PERSONAL */}
          <div className="flex mb-12">
            <div className="w-12 h-12 bg-blue-20 text-blue-60 rounded-1/2 flex justify-center items-center mr-4">
              {nameLetters}
            </div>
            <div>
              <span className="block font-semibold">{isTeam ? 'Business' : fullName}</span>
              <span className="block">{user?.email}</span>
            </div>
          </div>

          {/* USAGE */}
          <div className="mb-12">
            <h4 className="mb-1">Usage</h4>
            <div className="text-sm text-m-neutral-70">
              {isLoadingPlans || isLoadingPlanLimit ? (
                <span className="text-center w-full">{i18n.get('general.loading') + '...'}</span>
              ) : (
                <span className="w-full m-0">
                  {bytesToString(planUsage) || '0'} of {getUserLimitString(planLimit)}
                </span>
              )}

              <div className="flex justify-start h-1.5 w-full bg-l-neutral-30 rounded-lg overflow-hidden mt-0.5">
                <div className="h-full bg-blue-70" style={progressBarFillStyle} />
              </div>
            </div>
          </div>

          {/* CURRENT PLAN */}
          <div>
            <h4 className="mb-1">Current plan</h4>
            {!isLoadingPlans ? (
              <div className="flex justify-between w-full">
                <div>
                  <span className="text-neutral-700 font-bold text-xl">{currentPlan?.simpleName}</span>

                  <div className="flex w-full items-end justify-center text-neutral-500 text-xs">
                    {currentPlan?.planId ? (
                      <Fragment>
                        <span>{currentPlan?.price}€</span>
                        <span>/{currentPlan?.paymentInterval}</span>
                      </Fragment>
                    ) : (
                      <span className="font-bold">{!isCurrentPlanLifetime ? 'Free plan' : 'Lifetime'}</span>
                    )}
                  </div>
                </div>
                <button className={`${isCurrentPlanLifetime ? 'hidden' : ''} primary`} onClick={onUpgradeButtonClicked}>
                  {i18n.get('action.upgrade')}
                </button>
              </div>
            ) : (
              <span className="">{i18n.get('general.loading') + '...'}</span>
            )}
          </div>
        </div>

        {/* MORE INFO & DELETE ACCOUNT */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-full justify-around mb-14">
            <AccountAdvice
              icon={Unicons.UilShieldPlus}
              title={i18n.get('views.account.tabs.info.advice1.title')}
              description={i18n.get('views.account.tabs.info.advice1.description')}
            />
            <AccountAdvice
              icon={Unicons.UilShieldPlus}
              title={i18n.get('views.account.tabs.info.advice2.title')}
              description={i18n.get('views.account.tabs.info.advice2.description')}
            />
          </div>
          <span
            className="block text-center text-m-neutral-80 cursor-pointer mt-10"
            onClick={onDeletePermanentlyAccountClicked}
          >
            {i18n.get('action.deleteAccount')}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountPlanInfoTab;
