import React, {Component} from "react";
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'

import './index.styl'
import {getKnowData} from "../../redux/actions";
import HeaderReuse from '../../components/header-reuse'
import Recommend from '../../components/recommend'


class KnowThings extends Component {
  componentDidMount() {
    this.props.getKnowData()
    if(!this.swiper){
      this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
        autoplay: {
          delay: 2000, //3秒切换一次
          disableOnInteraction: false
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
    })}
    if(!this.scroll1) {
      this.scroll1 = new BScroll('.article-list', {
        click: true,
        scrollX: true,
        eventPassthrough: true
      })
    }
    if(!this.scroll2) {
      this.scroll2 = new BScroll('.topic', {
        click: true,
        scrollX: true,
        eventPassthrough: true
      })
    }
  }
  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
    if(this.scroll1) {
      this.scroll1.destroy()
    }
    if(this.scroll2){
      this.scroll2.destroy()
    }
  }
  render() {
    const {knowData} = this.props;
    if(!knowData.yxLook){
      knowData.yxLook = {}
    }
    return (
      <div>
        <HeaderReuse/>
        <div className='main'>
          <div className="swiper-container">
            <div className="swiper-wrapper">
            {
              (knowData.banner?knowData.banner:[]).map((item, index) =>
                  <div className="swiper-slide" key={index} >
                    <img src={item.picUrl} alt=""/>
                    <div className="info">
                      <span>{item.subTitle}</span>
                      <h3>{item.desc}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
              )
            }
            </div>
        </div>
          <div className="article-list">
            <ul>
              {
                (knowData.column?knowData.column:[]).map((item, index) => 
                  <li key={index}>
                    <div className="image">
                      <img src={item.picUrl} alt="" />
                      <span>{item.articleCount}</span>
                    </div>
                    <span>{item.title}</span>
                  </li>
                )
              }
              
          </ul>
        </div>
          <Recommend dataOne={knowData.recommendOne}
                     dataTwo={knowData.recommendTwo}
                     dataThree={knowData.recommendThree}/>
          <div className="ten-clock">
            <div className="title">
              十点一刻
            </div>
            <div className="topic">
              <ul>
                {
                  (knowData.tenfifteen?knowData.tenfifteen:[]).map((item, index) =>
                    <li key={item.id}>
                      <h3>今日话题</h3>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                      <div>
                        {
                          (item.participantAvatar?item.participantAvatar:[]).map((avatar, index) =>
                            <img src={avatar} alt="" key={index}/>
                          )
                        }
                        <span>{item.participantNum}人参与话题</span>
                      </div>
                    </li>
                  )
                }

              <li className="all">
                <span>查看全部话题</span>
                <span className="icon-item">
                <i className="iconfont icon-you-yuan"></i>
              </span>
              </li>
            </ul>
          </div>
        </div>
          <Recommend dataOne={knowData.zhenOne}
                     dataTwo={knowData.zhenTwo}
                     dataThree={knowData.zhenThree}/>
          <div className="look">
            <div className="title">
              严选LOOK
            </div>
            <div className="image">
              <img src={knowData.yxLook.picUrl} alt=""/>
            </div>
            <div className="comment">
              <div>
                <img src={knowData.yxLook.avatar} alt=""/>
                <span>{knowData.yxLook.nickname}</span>
              </div>
              <p>{knowData.yxLook.content}</p>
            </div>
          </div>
          <div className="find-more">
            <div className="title">
              <span></span>
              <h4>更多精彩</h4>
              <span></span>
            </div>
            <ul>
              {
                (knowData.findMore?knowData.findMore:[]).map((item, index) =>
                  <li key={index}>
                    <div className="image">
                      <img src={item.itemPicUrl} alt=""/>
                    </div>
                    <p>{item.title}</p>
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
export default connect (
  state => state.data,
  {getKnowData}
)(KnowThings)
 