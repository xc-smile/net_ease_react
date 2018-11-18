import React, {Component} from "react";

import './index.styl'
export default class Cart extends Component {
  render() {
    return (
      <div className="container-cart">
        <header className='header-cart'>
          <h3>购物车</h3>
          <span>领卷</span>
        </header>
        <div className="main-cart">
          <div className="promise">
            <div>
              <span className="icon-item"></span>
              <span>网易自营品牌</span>
            </div>
            <div>
              <span className="icon-item"></span>
              <span>30天无忧退货</span>
            </div>
            <div>
              <span className="icon-item"></span>
              <span>48小时无忧退款</span>
            </div>
          </div>
          <div className="cart">
            <div className="image">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""/>
                <span>去添加点什么吧</span>
            </div>
            <div className="login">
              登陆
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 