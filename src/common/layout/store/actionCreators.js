// import {fromJS} from 'immutable';
import * as constants from './constants'

export const toggleCollapsed = (collapsed) =>({
  type:constants.LAYOUT_TOGGLE_COLLAPSED,
  collapsed
})

