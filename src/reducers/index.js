import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors,
  courses,
  ajaxStatusReducer
});

export default rootReducer;
