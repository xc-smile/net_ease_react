import React, {Component} from "react";
import './index.styl'


export default class GoodList extends Component {
  render() {

    let {largeList} = this.props
    if(!largeList){
    largeList = []
  }
    return (
      <div className="goods-list-container">
        <ul className="large-classify">
          {
            largeList.map((Litem, index) =>
              <li className="large-list" key={Litem.id}>
                <div className="large-title">
                  <span>{Litem.name}</span>
                </div>
                <ul className="goods">
                  {
                    (Litem.itemList?Litem.itemList:[]).slice(0,7).map((item) =>
                      <li className="goods-list" key={item.id}>
                        <div className="image">
                          <img src={item.listPicUrl} alt=""/>
                        </div>
                        <div className="info">
                          <div>
                            {item.simpleDesc}
                          </div>
                          <p>
                            {item.name}
                          </p>
                          <span>¥{item.retailPrice}</span>
                        </div>
                      </li>
                    )
                  }
                  <li className="goods-list">
                    <div className="more">
                      <span>更多{largeList.name}好物</span>
                      <span className="icon-item">
                      <i className="iconfont icon-you-yuan"></i>
                  </span>
                    </div>
                  </li>
                </ul>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
 