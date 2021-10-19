import { PaymentState, LOADING, PaymentActionType } from './types';

export const PAYMENT_INITIAL_STATE: PaymentState = {
  loading: false,
}

export const payment = (prevState = PAYMENT_INITIAL_STATE, action: PaymentActionType) => {
  switch (action.type) {
    case LOADING: return { ...prevState, loading: action.payload }
    
    default: return prevState
  }
}
