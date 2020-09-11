import React from 'react';
import Logo from '../../img/logo.png';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className = "navbar">
            <img src={Logo} className = "navbar_logo" alt="app_logo"/>
            <ul>
                <li> <a href="/main"> Home </a></li>
                <li> <a href="/categories"> Categores </a></li>
                <li> <a href="/charts"> Charts </a></li>
            </ul>
        </nav>
    )
}




export default Navbar;