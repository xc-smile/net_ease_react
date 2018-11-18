import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './index.styl'

class FooterNav extends Component {
  render() {
    return (
      <footer className="foot-nav border-1px">
        <NavLink className="foot-item" to='/home'>
          <span className="icon-item">
            <i className="iconfont icon-shouye1"></i>
          </span>
          <span>首页</span>
        </NavLink>
        <NavLink className="foot-item" to='/knowthings'>
          <span className="icon-item">
            <i className="iconfont icon-fangkuang"></i>
          </span>
          <span>识物</span>
        </NavLink>
        <NavLink className="foot-item" to='/classify'>
          <span className="icon-item">
            <i className="iconfont icon-fenlei"></i>
          </span>
          <span>分类</span>
        </NavLink>
        <NavLink className="foot-item" to='/cart'>
          <span className="icon-item">
            <i className="iconfont icon-gouwuche"></i>
          </span>
          <span>购物车</span>
        </NavLink>
        <NavLink className="foot-item" to='/personal'>
          <span className="icon-item">
            <i className="iconfont icon-gerenyonghutouxiang"></i>
          </span>
          <span>个人</span>
        </NavLink>
      </footer>

    )
  }
}

export default FooterNav