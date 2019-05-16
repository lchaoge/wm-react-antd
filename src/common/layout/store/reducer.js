import { fromJS } from 'immutable';
import * as constants from './constants'


const defaultState = fromJS({
  collapsed: false,
  menuList: [
    {
      "id":1,
      "title":"首页",
      "icon":"pie-chart",
      "url":"/login"
    },{
      "id":2,
      "title":"客户管理",
      "icon":"desktop",
      "children":[
        {
          "id":5,
          "title":"二级菜单",
          "icon":"pie-chart",
          "url":"/"
        },
        {
          "id":9,
          "title":"二级菜单",
          "icon":"pie-chart",
          "url":"/"
        }
      ]
    },{
      "id":3,
      "title":"订单管理",
      "icon":"desktop",
      "children":[
        {
          "id":6,
          "title":"二级菜单",
          "icon":"pie-chart",
          "url":"/"
        }
      ]
    },{
      "id":4,
      "title":"系统设置",
      "icon":"desktop",
      "children":[
        {
          "id":7,
          "title":"二级菜单",
          "icon":"pie-chart",
          "url":"/"
        },
        {
          "id":8,
          "title":"二级菜单",
          "icon":"pie-chart",
          "url":"/"
        }
      ]
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LAYOUT_TOGGLE_COLLAPSED:
      return state.set('collapsed', action.collapsed)
    default:
      return state;
  }
}