import React, { Component } from 'react';
import Balance from './balance/Balance';
import Tabs from './tabs/Tabs';
import Charges from './charges/Charges';
import Incomes from './incomes/Incomes';
import Button from './button/Button';
import { BrowserRouter, Route } from 'react-router-dom';



class Main extends Component {
    state = {
        balance: [...JSON.parse(localStorage.getItem('data'))].reduce((sum,item) => item.income+sum,0)
    }

    render() {
        return (
            
            <div>
                {/* Main page */}
                <Balance value={this.state.balance}/>

                <BrowserRouter>
             {/*   <Button/>*/}
            <div className="tab-items">
            <Tabs/>
            <Route exact path="/" component = {Charges}/>
            <Route  exact path="/incomes" component = {Incomes}/>  
            
          </div>
          <div>
          
            <Route path="/button" component = {Button}/>
         </div> 
        </BrowserRouter>
         </div>
            
    )
    }
}


export default Main;