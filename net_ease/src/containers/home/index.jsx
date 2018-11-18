import React, {Component} from "react";
import BScroll from 'better-scroll'

import './index.styl'
import HomeNav from '../../components/homeNav'
import Carousel from '../../components/carousel'
import ItemList from '../../components/itemList'
import GoodList from '../../components/goodList'
import CountDown from '../../components/countDown'
import PopularItemList from '../../components/popularItemList'
import {getBanner, getHomeData} from "../../redux/actions";
import {connect} from "react-redux";



class Home extends Component {


  componentDidMount() {
    this.props.getBanner()
    this.props.getHomeData()
    new BScroll('.subject-list', {
      click: true,
      scrollX: true,
      eventPassthrough: true
    })
}



  render() {


    const {bannerList, homeData} = this.props;



    return (
      <div className='container'>
        <header className="header-top">
          <div className="logo-search">
            <div className="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="search">
              <i className="iconfont icon-sousuo"></i>
              <span>搜索商品,共12311款好物</span>
            </div>
          </div>
          <HomeNav/>
        </header>
        <div className='main'>
          <Carousel bannerList={bannerList}/>
          <div className="promise">
            <div>
        <span className="icon-item">
          <i className="iconfont icon-gouxuan"></i>
        </span>
              <span>网易自营品牌</span>
            </div>
            <div>
        <span className="icon-item">
          <i className="iconfont icon-gouxuan"></i>
        </span>
              <span>30天无忧退货</span>
            </div>
            <div>
        <span className="icon-item">
          <i className="iconfont icon-gouxuan"></i>
        </span>
              <span>48小时无忧退款</span>
            </div>
          </div>
          <div className="brander">
            <div className="title">
              <span>品牌制造商直供</span>
              <span className="icon-item">
            <i className="iconfont icon-you-yuan"></i>
          </span>
            </div>
            <ul className="brand-list">
              {
                (homeData.tagList ? homeData.tagList : []).slice(0, 4).map((item, index) =>
                  <li className="brand-item" key={index}>
                    <img src={item.picUrl} alt=""/>
                    <div className="info">
                      <h4>{item.name}</h4>
                      <p className="price">{item.floorPrice}元起</p>
                      <span className="new">上新</span>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
          <ItemList itemList={homeData.newItemList}/>
          <PopularItemList popularItemList={homeData.popularItemList}/>
          <CountDown homeData={homeData}/>
          <div className="weal">
          </div>
          <div className="subject">
            <div className="title">
              <span>专题精选</span>
              <span className="icon-item">
          <i className="iconfont icon-you-yuan"></i>
        </span>
            </div>
            <div className="subject-list">
              <ul>
                {
                  (homeData.topicList?homeData.topicList:[]).map((item, index) =>
                    <li key={item.id}>
                      <div className="img">
                        <img src={item.itemPicUrl} alt=""/>
                      </div>
                      <div className="info">
                        <span>{item.subtitle}</span>
                        <p>{item.title}</p>
                        <span className="price">{item.priceInfo}元起</span>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <GoodList largeList={homeData.cateList}/>
          <div className="down-load-app">
            <span>下载APP</span>
            <span>电脑版</span>
            <p>网易公司版权所有 © 1997-2018</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.data,
  {getBanner, getHomeData}
)(Home)