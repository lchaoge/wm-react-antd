import {fromJS} from 'immutable';
import Axios from '../../../static/utils/axios'
import * as Urls from './urlMapping'
import * as constants from './constants'

const menuInit = (menuList) =>({
  type:constants.MENU_INIT,
  menuList
})

export const toggleCollapsed = (collapsed) =>({
  type:constants.LAYOUT_TOGGLE_COLLAPSED,
  collapsed
})

export const getMenuList = () =>{
  return (dispatch) =>{
    Axios.get(Urls.POST_GET_MENULIST).then(res=>{
      if(res.code === '0000'){
        dispatch(menuInit(fromJS(res.data.menuList)))
      }else{
        console.log(res.msg)
      }
    }).catch(error=>{
      console.log(error)
    })
  }
}
