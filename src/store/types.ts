import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { PaymentState } from './payment/types/index';

export interface State {
  payment: PaymentState
}

interface ExtraArgs {}

export type AppThunkAction<A extends Action> = ThunkAction<void, State, ExtraArgs, A>

// export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
