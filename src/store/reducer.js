import { combineReducers } from  'redux-immutable'
import {reducer as layoutReducer} from '../common/layout/store'
export default combineReducers({
  layout:layoutReducer
})