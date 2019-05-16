import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

class WMMenu extends Component {

  render() {
    const newMenuList = this.props.menuList.toJS()
    
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
        {
          newMenuList.map(item=>{
            if(item.children){
              return (
                <Menu.SubMenu key={item.id} title={
                  <span>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </span>
                }>
                {
                  item.children.map(el=>{
                    return (
                      <Menu.Item key={el.id}>
                        <Link to={item.url}>
                          <Icon type={el.icon} />
                          <span>{el.title}</span>
                        </Link>
                      </Menu.Item>
                    )
                  })
                }
                </Menu.SubMenu>
              )
            }else{
              return (
                <Menu.Item key={item.id}>
                  <Link to={item.url}>
                    <Icon type={item.icon} />
                    <span>{item.title}{item.url}</span>
                  </Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    )
  }

  

}

const mapStateToProps = (state) => ({
  menuList:state.getIn(['layout','menuList'])
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(WMMenu)