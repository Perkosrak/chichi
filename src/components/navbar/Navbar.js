import React from 'react';
import Logo from '../../img/chichi.jpg';
import './navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className = "navbar">
            <div className="chichi-logo">
                <img src={Logo} className = "navbar_logo" alt="app_logo"/>
                <span className="name-logo">CHICHI</span>
            </div>
            <ul>
                <li className="navbar-item"> <NavLink to="/main" activeClassName="active" > Home </NavLink></li>
                <li className="navbar-item"> <NavLink to="/categories" activeClassName="active" > Categores </NavLink></li>
                <li className="navbar-item"> <NavLink to="/charts" activeClassName="active"> Charts </NavLink></li>
            </ul>
        </nav>
    )
}




export default Navbar;