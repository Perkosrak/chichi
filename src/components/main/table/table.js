
import React, { Component } from 'react';
import TableHeader from './thead';
import TableRow from './trow';

// const TableData = [
//   {
//     category: "food",
//     description: "lemon",
//     date: "01-02-2020",
//     income: 1200,
//     Charges: 1200
//   },
//   {
//     category: "food",
//     description: "lemon",
//     date: "01-02-2020",
//     income: 1200,
//     Charges: 1200
//   },
//   {
//     category: "food",
//     description: "lemon",
//     date: "01-02-2020",
//     income: 1200,
//     Charges: 1200
//   },
//   {
//     category: "food",
//     description: "lemon",
//     date: "01-02-2020",
//     income: 1200,
//     Charges: 1200
//   }
// ]


// window.localStorage.setItem('data', JSON.stringify(TableData));





class Table extends Component {
    // state = {
    //     data : JSON.parse(localStorage.getItem('data')),
    //     isCharge : true
    // }
    // addNew = (e) => {
    //     // console.log(this.state)
    // }


   
    render() 
    
    {
        return (
            <div className="App">
        
              <table>
                {/* <p>{this.props.type}</p> */}

                <TableHeader category = {this.props.category}
                             description = {this.props.description}
                             date = {this.props.date}
                             money = {this.props.money} />
    
                <tbody>
                {this.props.globalProps.map(item => (
                  <TableRow category = {item.category} description = {item.description} date = {item.date} money={item.Charges}
                  // money = {this.state.isCharge ? item.Charges : item.income} 
                  />))
                }
                </tbody>

              </table>
            </div>
          );
    }
 
}

export default Table;
