import { fromJS } from 'immutable';
import * as constants from './constants'


const defaultState = fromJS({
  collapsed: false,
  menuList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LAYOUT_TOGGLE_COLLAPSED:
      return state.set('collapsed', action.collapsed)
    case constants.MENU_INIT:
      return state.set('menuList',action.menuList)
    default:
      return state;
  }
}