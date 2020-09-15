import React from 'react';
import './tabs.css';
import {NavLink} from 'react-router-dom';


const Tabs = () => {
    return(
        <nav className = "tab-items">
            <ul>
                <li> <NavLink to="/charges" activeClassName="active" > Charges </NavLink></li>
                <li> <NavLink to="/incomes" activeClassName="active" > Incomes </NavLink></li>
            </ul>
        </nav>




    )
}


export default Tabs;