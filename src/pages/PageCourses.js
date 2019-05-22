import React, { Component } from 'react';
import '../App.css';
import CoursesHeader from './Courses/Header/CoursesHeader';
import Courses_9_Squars from './Courses/Body/Courses_9_Squars';
import CoursesContainer_6_Blocks from './Courses/Body/CoursesContainer_6_Blocks';
import CoursesContainerShedulare from './Courses/Body/CoursesContainerShedulare';
import CoursesFooterAria from './Courses/Footer/CoursesFooterAria';



class PageCourses extends Component {
  render() {
    return (
      <div className="Courses">
        <header>
          <CoursesHeader />
        </header>
        <body>
          <Courses_9_Squars />
          <CoursesContainer_6_Blocks />
          <CoursesContainerShedulare />
        </body>
        <footer>
          <CoursesFooterAria />
        </footer>
      </div>
    );
  }
}

export default PageCourses;