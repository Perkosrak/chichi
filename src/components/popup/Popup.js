import React from 'react';
import Form from '../form/Form';
import './popup.css';

const Popup = (props) => {

    return (
        <div className="popup">
            <button onClick = {props.closePopup} className="popup_close">Close</button>
            <h2>Add new item here</h2>
            <Form/>
        </div>
    )
}


export default Popup;