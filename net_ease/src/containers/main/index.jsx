import React,{Component} from "react";
import {Switch,Route} from "react-router-dom"
import FootNav from '../../components/footer-nav/index'
import Home from '../../containers/home'
import KnowThings from '../../containers/knowThings'
import Classify from '../../containers/classify'
import Cart from '../../containers/cart'



export default class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/knowthings' component={KnowThings}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
        <FootNav />
      </div>
    )
  }
}
