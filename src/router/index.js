import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



import Login from '../pages/login'
import Register from '../pages/register'

// 公共部分
import WMLayout from '../common/layout'

import Dashboard from '../pages/dashboard'
import Detail from '../pages/detail'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={WMLayout} />
    </Switch>
  </BrowserRouter>
)

export const LayoutRouter = () => (
  <Switch>
    <Route path='/dashboard' exact component={Dashboard}></Route>
    <Route path='/login' exact component={Login}></Route>
    <Route path='/detail' exact component={Detail}></Route>
    <Redirect to="/dashboard" />
  </Switch>
)