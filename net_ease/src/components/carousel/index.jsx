import React, {Component} from "react";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.styl'

export default class Carousel extends Component {
  componentDidMount () {
    if(!this.swiper) {
      this.swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: true,
        observer: true,
      })
    }
  }
  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
  }
  render() {
    const {bannerList} = this.props
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((item, index) =>
              <div className="swiper-slide" key={index}>
                <img src={item.picUrl} alt="" />
              </div>
            )
          }
      </div>
      <div className="swiper-pagination">
      </div>
    </div>
    )
  }
}

 