import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './index.styl'
import {getClassifyData} from '../../redux/actions'
import ClassifyItem from './classifyItem'


class Classify extends Component {
  state = {
    activeIndex: 0
  }

  componentDidMount() {
    this.props.getClassifyData()
  }

  componentDidUpdate() {
    new BScroll('.large-list', {
      click: true,
    })
      new BScroll('.small-list', {
        click: true
      })
  }

  handleClick(index) {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    const {classifyData} = this.props
    const {activeIndex} = this.state
    return (
      <div>
        <header className="border-1px classify-header">
          <div className='header-box'>
            <span className="icon-item">
              <i className="iconfont icon-sousuo"></i>
            </span>
            <span>搜索物品,共123121款好物</span>
          </div>
        </header>
        <div className="main">
          <div className="classify-container">
            <div className="large-list">
              <ul>
                {
                  classifyData.map((list, index) =>
                    <li key={list.id} onClick={() => this.handleClick(index)}
                        className={index === activeIndex ? 'active' : ''}>
                      <Link to={`/classify/classifyitem/${list.id}`}>{list.name}</Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className='small-list'>
              <ClassifyItem classifyData={classifyData} activeIndex={activeIndex}/>
            </div>
            {/*<div className="small-list">
          <Route path="`/classify/classifyitem/${list.id}`"></Route>
      </div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.data,
  {getClassifyData}
)(Classify)
 