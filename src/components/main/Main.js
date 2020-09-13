import React from 'react';
import Balance from './balance/Balance';
import Tabs from './tabs/Tabs';
import Charges from './charges/Charges';
import Incomes from './incomes/Incomes';
import Button from './button/Button';
import { BrowserRouter, Route } from 'react-router-dom';


const Main = () => {
    return(
        <div>Main page
            <Balance value="2,652.07"/>
            <BrowserRouter>
        <div className="tab-items">
        <Tabs/>
        <Route path="/charges" component = {Charges}/>
        <Route path="/incomes" component = {Incomes}/>  
        
      </div>
      <div>
      <Button/>
        <Route path="/button" component = {Button}/>
        </div>
    </BrowserRouter>
     </div>
        
      
    )
}


export default Main;