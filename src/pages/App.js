import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import {Router} from '../router'

import Styled from '../static/style'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Styled />
        </Router>
      </Provider>
    );
  }
}

export default App;
