import React, {Component} from "react";

import './classifyItem.styl'


export default class ClassifyItem extends Component {
  componentDidUpdate () {
    const ul = this.refs.list;
    const items = this.props.classifyData[this.props.activeIndex].subCateList.length
    let count = Math.floor(items / 3)
    if (items % 3) {
      count++
    }

    ul.style.height = count * 1.08 + 'rem'
  }

  render() {
  let {classifyData, activeIndex} = this.props
    if(!classifyData[activeIndex]){
    classifyData[activeIndex] = {}
    }
    return (
      <div className="item-box" >
        <div className="image">
          <img src={classifyData[activeIndex].bannerUrl} alt=""/>
        </div>
        <div className="list">
          <div className="title">
            {classifyData[activeIndex].name}
          </div>
          <div className="list-item">
            <ul ref="list">
              {
                (classifyData[activeIndex].subCateList?classifyData[activeIndex].subCateList:[]).map((item, index) =>
                  <li key={index}>
                    <img src={item.wapBannerUrl} alt=""/>
                    <span>{item.name}</span>
                  </li>
                )
              }

            </ul>
          </div>
        </div>
      </div>
    )
  }
}
 