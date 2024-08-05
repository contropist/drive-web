import { Dispatch } from 'react';
import { Action } from 'app/payment/store/types';
import { AuthMethodTypes, CouponCodeData, ErrorType, PlanData } from 'app/payment/types';
import { StripeElementsOptions } from '@stripe/stripe-js';

export const useCheckout = (dispatchReducer: Dispatch<Action>) => {
  const setUserNameFromElementAddress = (userName: string) =>
    dispatchReducer({ type: 'SET_USER_NAME_FROM_ADDRESS_ELEMENT', payload: userName });

  const setCouponCodeName = (coupon: string) => dispatchReducer({ type: 'SET_PROMO_CODE_NAME', payload: coupon });

  const onRemoveAppliedCouponCode = () => {
    dispatchReducer({ type: 'SET_COUPON_CODE_DATA', payload: undefined });
    dispatchReducer({ type: 'SET_PROMO_CODE_NAME', payload: undefined });
  };

  const setAuthMethod = (method: AuthMethodTypes) => {
    dispatchReducer({ type: 'SET_AUTH_METHOD', payload: method });
  };

  const setAvatarBlob = (avatarBlob: Blob | null) => {
    dispatchReducer({
      type: 'SET_AVATAR_BLOB',
      payload: avatarBlob ?? null,
    });
  };

  const setStripeElementsOptions = (stripeElementsOptions: StripeElementsOptions) => {
    dispatchReducer({
      type: 'SET_ELEMENTS_OPTIONS',
      payload: stripeElementsOptions,
    });
  };

  const setPlan = (plan: PlanData) => {
    dispatchReducer({ type: 'SET_PLAN', payload: plan });
  };

  const setSelectedPlan = (selectedPlan: PlanData['selectedPlan']) => {
    dispatchReducer({ type: 'SET_CURRENT_PLAN_SELECTED', payload: selectedPlan });
  };

  const setPromoCodeData = (promoCodeData: CouponCodeData | undefined) => {
    dispatchReducer({ type: 'SET_COUPON_CODE_DATA', payload: promoCodeData });
  };

  const setIsUserPaying = (isPaying: boolean) => {
    dispatchReducer({
      type: 'SET_IS_PAYING',
      payload: isPaying,
    });
  };

  const setError = (type: ErrorType, error: string) => {
    dispatchReducer({
      type: 'SET_ERROR',
      payload: {
        [type]: error,
      },
    });
  };

  return {
    setAuthMethod,
    setError,
    setCouponCodeName,
    onRemoveAppliedCouponCode,
    setUserNameFromElementAddress,
    setAvatarBlob,
    setIsUserPaying,
    setPlan,
    setPromoCodeData,
    setSelectedPlan,
    setStripeElementsOptions,
  };
};
