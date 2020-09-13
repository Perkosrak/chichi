import React, { Component } from 'react';
import Balance from './balance/Balance';
import Tabs from './tabs/Tabs';
import Charges from './charges/Charges';
import Incomes from './incomes/Incomes';
import Button from './button/Button';
import { BrowserRouter, Route } from 'react-router-dom';
// import { ReactComponent } from '*.svg';


// const Main = () => {
    
//     return(
//         <div>Main page.
//             <Balance value="2,652.07"/>
//             <BrowserRouter>
//         <div className="tab-items">
//         <Tabs/>
//         <Route path="/charges" component = {Charges}/>
//         <Route path="/incomes" component = {Incomes}/>  
        
//       </div>
//       <div>
//       <Button/>
//         <Route path="/button" component = {Button}/>
//         </div>
//     </BrowserRouter>
//      </div>
        
      
//     )
// }

class Main extends Component {
    state = {
        // balance: "0"
        balance: [...JSON.parse(localStorage.getItem('data'))].reduce((sum,item) => item.income+sum,0)
    }

    // conAll = () => {
    //     const total = [...JSON.parse(localStorage.getItem('data'))].reduce((sum,item) => item.income+sum,0)

    //     this.setState({
    //         balance: total
    //     })

    // }

    render() {
        return (
            
            <div>
                {/* Main page */}
                <Balance value={this.state.balance}/>

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
        
    
}


export default Main;