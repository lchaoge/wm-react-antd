import React, { Component } from 'react';

import { PageHeader,Form, Row, Col, Input, Button, Select } from 'antd';
import { DashboardWrapper } from './style'

class Dashboard extends Component {



  render() {
    return (
      <DashboardWrapper>
        <PageHeader onBack={() => null} title="Dashboard" subTitle="This is a Dashboard" />
        <Form className="wmui-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="大区">
                <Select placeholder="请选择大区">
                  <Option value="300">华北</Option>
                  <Option value="307">华东</Option>
                  <Option value="305">西北</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="门店名称">
                <Input type="text" placeholder="请输入门店编码或名称" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="客户名称">
                <Input type="text" placeholder="请输入客户编号或名称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="客户联系人">
                <Input type="text" placeholder="请输入客户联系人" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="客户状态">
                <Select placeholder="请选择客户状态">
                  <Option value="300">华北</Option>
                  <Option value="307">华东</Option>
                  <Option value="305">西北</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="客户类型">
                <Select placeholder="请选择客户类型">
                  <Option value="300">华北</Option>
                  <Option value="307">华东</Option>
                  <Option value="305">西北</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col className="wmui-form-btngroup" span={24}>
              <Button.Group>
                <Button icon="search" onClick={this.queryEvt} type="primary">查询</Button>
                <Button icon="sync" onClick={this.resetEvt}>重置</Button>
              </Button.Group>
              <Button className="btn-toggle" icon={this.state.expand ? 'up' : 'down'} onClick={this.toggle} type="primary" ghost>
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