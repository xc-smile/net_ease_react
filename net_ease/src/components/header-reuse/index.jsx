import React, {Component} from "react";

import './index.styl'

export default class HeaderReuse extends Component {
  render() {
    return (

          <header className="header-detail border-1px">
            <div className="header-top">
              <div className="home" ></div>
              <div className="logo"></div>
              <div className="search"></div>
              <div className="cart"></div>
            </div>
          </header>

    )
  }
}
 