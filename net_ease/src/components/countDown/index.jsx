import React, {Component} from "react";
import './index.styl'


export default class CountDown extends Component {
  state = {
    hours: null,
    minute: null,
    second: null,
  }
  countDown = function() {
    let a = new Date();
    let aa = new Date(2018, 8, 28);
    this.setState({
      second: parseInt((aa - a) / 1000 % 60),
      minute: parseInt((aa - a) / 1000 / 60 % 60),
      hours: parseInt((aa - a) / 1000 / 60 / 60 % 24),
    })
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.countDown()
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  render() {
    let {hours, minute, second} = this.state;
    const {homeData} = this.props;
    let {flashSaleIndexVO} = homeData;
    if (!flashSaleIndexVO) {
      flashSaleIndexVO = {};
    }
    return (
      <div className="count-down">
        <div className="down">
          <h3>严 选 限 时 购</h3>
          <span>{hours}</span>
          :
          <span>{minute}</span>
          :
          <span>{second}</span>
          <p>下一场 {new Date(2018, 8, 14).getHours()} : 00 开始</p>
        </div>
        <div className="image">
          <img src={flashSaleIndexVO.primaryPicUrl} alt=""/>
          <div className="price">
            <span>¥{flashSaleIndexVO.activityPrice}</span>
            <span className="oldPrice">¥{flashSaleIndexVO.originPrice}</span>
          </div>
        </div>
      </div>
    )
  }
}
 