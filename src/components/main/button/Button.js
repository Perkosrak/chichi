import React from 'react';
import './button.css';
import {Link} from 'react-router-dom';

const Button = () => {
    return(
        <div className="button-add-more">
        <button component={Link} to="/ButtonAddMore">Add more</button>
</div>
    )
}


export default Button;