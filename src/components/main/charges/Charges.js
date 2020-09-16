import React, { Component }  from 'react';
import Table from '../table/table';
import Popup from '../../popup/Popup';

class Charges extends Component {
    state = {
        isPopup: false
    }
    showPopup = () => {
        this.setState({
            isPopup : true
        })
    }
    closePopup = () => {
        this.setState({
            isPopup : false
        })
    }

    render() {
        return(
            <>
            <h1>Charges</h1>
            <Table/>
            <button onClick={this.showPopup}>Add New</button>

            {this.state.isPopup ? (<Popup closePopup={this.closePopup}/>) : null }
            </>
        )
    }
}


export default Charges;