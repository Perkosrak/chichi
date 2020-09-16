import React, { Component } from 'react';
import Button from '../main/button/Button';
import Balance from '../main/balance/Balance';
import Table from '../main/table/table';


class Categories extends Component {
    state = {
        // balance: "0"
        balance: [...JSON.parse(localStorage.getItem('data'))].reduce((sum,item) => item.income+sum,0)
    }
    render() {
    return(
        <div>
               <Balance value={this.state.balance}/>
               <Button/>
               <h1>Categories</h1>
                <Table/>
         </div>
    
)
}
}




export default Categories;