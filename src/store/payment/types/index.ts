import { PaymentActionType } from './actions';
import { AppThunkAction } from '../../types';

export * from './constants';
export * from './actions';

export interface PaymentState {
  loading: boolean
}

export type Action = AppThunkAction<PaymentActionType>
