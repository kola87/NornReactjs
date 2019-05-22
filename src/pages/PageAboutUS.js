
import React, {Component} from 'react';

import AboutUS from './AboutUs/AboutUS';
import Navbar from './Navbar';

class PageAboutUS extends Component {
 render(){
     return <div> 
         <Navbar />
         <h2>page About us </h2>
         <AboutUS />
     </div>
 }
}

export default PageAboutUS;