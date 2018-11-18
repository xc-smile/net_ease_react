import React, {Component} from "react";
import BScroll from 'better-scroll'

import './index.styl'

export default class PopularItemList extends Component {
  componentDidUpdate () {
    new BScroll('.list-container1', {
      click: true,
      scrollX: true,
      eventPassthrough: true
    })
  }
  render() {
    const {popularItemList} = this.props
    return (
      <div className="item-list">
        <div className="title">
          <h3>人气推荐·好物精选</h3>
          <span className="all">查看全部</span>
        </div>
        <div className="list-container1">
          <ul>
            {
              popularItemList && popularItemList.map((item) =>
                <li key={item.id}>
                  <div className="imgBox">
                    <img src={item.listPicUrl} alt=""/>
                  </div>
                  <span>{(item.itemTagList[0]?item.itemTagList[0]:{}).name}</span>
                  <h4>{item.name}</h4>
                  <p>{item.simpleDesc}</p>
                  <h5>¥{item.retailPrice}</h5>
                </li>
              )
            }

        </ul>
      </div>
  </div>
    )
  }
}
 