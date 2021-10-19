import { LOADING } from './constants';

export interface Loading {
  type: typeof LOADING
  payload: boolean
}

export type PaymentActionType = Loading
