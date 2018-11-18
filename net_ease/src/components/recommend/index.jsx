import React, {Component} from "react";
import './index.styl'

export default class Recommend extends Component {
  render() {
    let {dataOne, dataTwo, dataThree} = this.props
    if(!dataOne || !dataTwo || !dataThree){
      dataOne = {}
      dataTwo = {}
      dataThree = {}
    }
    return (
      <div className="recommend">
        <div className="title">为你推荐</div>
        <div className="image">
          <img src={dataOne.picUrl} alt="" />
          <span>{dataOne.typeName}</span>
        </div>
        <div className="info">
          <h3>{dataOne.title}</h3>
          <p>{dataOne.subTitle}</p>
          <span>{dataOne.priceInfo}元起</span>
        </div>
        <div className="small">
          <div className="left">
            <img src={dataTwo.avatar} alt=""/>
            <span>{dataTwo.nickname}</span>
            <h4>{dataTwo.title}</h4>
            <p>{dataTwo.subTitle}</p>
          </div>
          <div className="right">
            <img src={dataTwo.picUrl} alt=""/>
            <span>{dataTwo.typeName}</span>
          </div>
        </div>
        <div className="small">
          <div className="left">
            <img src={dataThree.avatar} alt=""/>
            <span>{dataThree.nickname}</span>
            <h4>{dataThree.title}</h4>
            <p>{dataThree.subTitle}</p>
          </div>
          <div className="right">
            <img src={dataThree.picUrl} alt=""/>
            <span>{dataThree.typeName}</span>
          </div>
        </div>
      </div>
    )
  }
}
 