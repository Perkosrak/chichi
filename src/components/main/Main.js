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
                <Balance value={this.state.balance}/>

                <BrowserRouter>
             {/*   <Button/>*/}
            <div className="tab-items">
            <Tabs/>

            {/* <p>{this.props.globalProps}</p> */}
            <Route path="/charges" render = {(props)=><Charges globalProps = {this.props.globalProps} />}/>
            <Route path="/incomes" component = {Incomes}/>  
            
          </div>


        </BrowserRouter>
         </div>
            
    )
    }
}


export default Main;