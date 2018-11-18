import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './assets/css/reset.css'
import {HashRouter, Switch, Route} from "react-router-dom"
import store from './redux/store'
import Main from './containers/main/index'

import "./mock/mockServer"


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root'));

