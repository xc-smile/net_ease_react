import React, {Component} from "react";
import BScroll from 'better-scroll'
import './index.styl'

export default class HomeNav extends Component {
  state = {
    navList: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
    initIndex: 0
  }
  handleClick (index) {
    this.setState({
      initIndex: index
    })
  }
  componentDidMount () {
    
    new BScroll('.header-nav', {
      click: true,
      scrollX: true,
      eventPassthrough: true
    })
  }
  render() {
    let {navList, initIndex} = this.state
    return (
      <div className="header-nav">
        <ul className="nav-list">
          {
            navList.map((item,index) =>
              <li className={`nav-item ${index === initIndex ? 'active' : ''}`}
                  key={index} onClick={() => {this.handleClick(index)}}>
                <span>{item}</span>
              </li>
            )
          }
      </ul>
  </div>
    )
  }
}
 