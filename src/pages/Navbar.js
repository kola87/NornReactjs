import React from 'react';
import { NavLink } from 'react-router-dom';
import App from '../App.css';
const Navbar = () => {
    return (

        <div>
            <nav>
                <div className="menu_li">
                    <NavLink exact to="/" activeClassName={App.active}>Главная страница </NavLink>
                    <NavLink to="/PageCourses" >Курсы </NavLink>
                    <NavLink to="/PageSummerSchool" >Летняя школа </NavLink>
                    <NavLink to="/PageContacts" >Контакты </NavLink>
                    <NavLink to="/PageAboutUS" >О Нас </NavLink>
                </div>
            </nav>
        </div>

    )

}
export default Navbar;
