import React, { Component } from 'react';
import { connect } from 'react-redux'
import WMHeader from './components/WMHeader'
import WMMenu from './components/WMMenu'
import { LayoutRouter } from '../../router'

import { LayoutWrapper, WMLogo } from './style'

import { Layout } from 'antd';
const { Sider, Content } = Layout;

class WMLayout extends Component {

  render() {
    const { collapsed } = this.props
    return (
      <LayoutWrapper>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <WMLogo />
            <WMMenu />
          </Sider>
          <Layout>
            <WMHeader />
            <Content className="wm-content">
              <LayoutRouter />
            </Content>
          </Layout>
        </Layout>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  collapsed: state.getIn(['layout', 'collapsed'])
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(WMLayout);