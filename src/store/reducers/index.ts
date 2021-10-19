import {combineReducers} from 'redux';
import { State } from '../types';
import { payment }            from '../payment/reducer';

const createReducer = combineReducers<State>({
  payment,
});

export default createReducer;
