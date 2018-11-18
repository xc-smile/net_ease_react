import React, {Component} from "react";
import BScroll from 'better-scroll'

import './index.styl'


export default class ItemList extends Component {
  componentDidUpdate () {
    new BScroll('.list-container', {
      click: true,
      scrollX: true,
      eventPassthrough: true
    })
  }
  componentDidMount () {
    console.log(this.props);
  }
  render() {
    const {itemList} = this.props

    return (
      <div className="item-list">
        <div className="title">
          <h3>新品首发</h3>
          <span className="all">查看全部</span>
        </div>
        <div className="list-container">
          <ul>
            {
              itemList && itemList.map((item) =>
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
 