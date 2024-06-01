import { combineReducers } from 'redux';
import common from './common';
import calendar from './calendar';
import memo from './memo';

const rootReducer = combineReducers({
  common,
  calendar,
  memo,
});

export default rootReducer;
