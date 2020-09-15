
import React, { Component } from 'react';
import TableHeader from './thead';
import TableRow from './trow';

const TableData = [
  {
    category: "food",
    description: "lemon",
    date: "01-02-2020",
    income: 1200,
    Charges: 1200
  },
  {
    category: "food",
    description: "lemon",
    date: "01-02-2020",
    income: 1200,
    Charges: 1200
  },
  {
    category: "food",
    description: "lemon",
    date: "01-02-2020",
    income: 1200,
    Charges: 1200
  },
  {
    category: "food",
    description: "lemon",
    date: "01-02-2020",
    income: 1200,
    Charges: 1200
  }
]


window.localStorage.setItem('data', JSON.stringify(TableData));





class Table extends Component {
    state = {
        data : JSON.parse(localStorage.getItem('data')),
        isCharge : true
    }
    addNew = (e) => {
        // console.log(this.state)
        // console.log(e.target.category.value);
        // console.log(e.target.description.value);
        // console.log(e.target.date.value);
        // console.log(e.target.money.value);
       
       this.setState({
           dog: 'Chio'
       })     
    }



    render() {
        return (
            <div className="App">
        
              <table>
                <TableHeader type = {this.state.isCharge ? "Charges" : "Income"} />
    
                <tbody>
                {this.state.data.map(item => (
                  <TableRow category = {item.category} description = {item.description} date = {item.date} money = {this.state.isCharge ? item.Charges : item.income} />))
                }
                </tbody>

              </table>
            </div>
          );
    }
 
}

export default Table;
