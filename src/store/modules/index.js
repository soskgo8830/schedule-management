import { combineReducers } from 'redux';
import common from './common';
import calendar from './calendar';

const rootReducer = combineReducers({
  common,
  calendar,
});

export default rootReducer;
