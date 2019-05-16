import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store'

import {UserInfo,UserName} from '../style'

import { Layout,Icon,Avatar } from 'antd';
const { Header } = Layout;

class WMHeader extends Component{
  render(){
    const {collapsed,toggleCollapsed} = this.props
    return (
      <Header className='wm-header'>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={()=>toggleCollapsed(collapsed)}
        />
        <UserInfo>
          <UserName>hi,xiefei</UserName>
          <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </UserInfo>
      </Header>
    )
  }
}

const mapStateToProps = (state) =>({
  collapsed: state.getIn(['layout','collapsed'])
})

const mapDispatchToProps = (dispatch) => ({
  toggleCollapsed(collapsed){
    dispatch(actionCreators.toggleCollapsed(!collapsed))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(WMHeader);