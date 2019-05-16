import React, { Component } from 'react';

import { PageHeader,Form, Row, Col, Input, Button, Icon, Skeleton } from 'antd';
import { DashboardWrapper } from './style'

class Dashboard extends Component {



  render() {
    return (
      <DashboardWrapper>
        <PageHeader onBack={() => null} title="dashboard" subTitle="This is a dashboard" />
        <Form className="wmui-form" onSubmit={this.handleSearch}>
          {/* <Row gutter={24}>{this.getFields()}</Row> */}
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button.Group>
                <Button icon="search" onClick={this.queryEvt} type="primary">查询</Button>
                <Button icon="sync" onClick={this.resetEvt}>重置</Button>
              </Button.Group>
              <Button type="primary" icon={this.state.expand ? 'up' : 'down'} onClick={this.toggle}>
                {this.state.expand ? '收起' : '展开'}
              </Button>
            </Col>
          </Row>
        </Form>
      </DashboardWrapper>
    )
  }
  
  state = {
    expand: false,
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: 'Input something!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };



}
export default Dashboard;