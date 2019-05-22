import React, { Component } from 'react';
import MainpBlocksGirl from './Main/Body/MainpBlocksGirl';
import MainBlock2Black from './Main/Body/MainBlock2Black';
import MainBlock3Squares from './Main/Body/MainBlock3Squares';
import MainHeader from './Main/Header/MainHeader';
import MainBlock4SeaSlider from './Main/Body/MainBlock4SeaSlider';
import MainFooterAria from './Main/Footer/MainFooterAria';
import MainFooterMap from './Main/Footer/MainFooterMap';




class PageMain extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <MainHeader />
        </header>
        <body>
          <MainpBlocksGirl />
          <MainBlock2Black />
          <MainBlock3Squares />
          <MainBlock4SeaSlider />
        
        </body>
        <footer>
          <MainFooterAria />
          <MainFooterMap />
        </footer>
      </div>
    )
  }
}

export default PageMain;