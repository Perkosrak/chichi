import React from 'react';
import Logo from '../../img/logo.png';
import './navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className = "navbar">
            <img src={Logo} className = "navbar_logo" alt="app_logo"/>
            <ul>
                <li> <NavLink to="/main" activeClassName="active" > Home </NavLink></li>
                <li> <NavLink to="/categories" activeClassName="active" > Categores </NavLink></li>
                <li> <NavLink to="/charts" activeClassName="active"> Charts </NavLink></li>
            </ul>
        </nav>
    )
}




export default Navbar;