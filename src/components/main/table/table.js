
import React, { Component } from 'react';
import TableHeader from './thead';
import TableRow from './trow';
import './table.css';


const TableData = [
  {
    category: "Food",
    description: "Dinner with John",
    date: "05-08-2020",
    income: 550,
    Charges: 1200
  },
  {
    category: "Clothes",
    description: "red dress",
    date: "20-08-2020",
    income: 1200,
    Charges: 1200
  },
  {
    category: "Restaurants",
    description: "pizza and cola in Mimosa",
    date: "03-09-2020",
    income: 630,
    Charges: 1200
  },
  {
    category: "Utility bills",
    description: "",
    date: "09-09-2020",
    income: 1300,
    Charges: 1200
  },
  {
    category: "Pets",
    description: "royal canin",
    date: "10-09-2020",
    income: 120,
    Charges: 1200
  }
]


window.localStorage.setItem('data', JSON.stringify(TableData));





class Table extends Component {
    state = {
        data : JSON.parse(localStorage.getItem('data')),
        dog : 'true'
    }
    addNew = (e) => {
       console.log(this.state)
   
        console.log(e.target.category.value);
        console.log(e.target.description.value);
        console.log(e.target.date.value);
        console.log(e.target.money.value);

       this.setState({
           dog: 'Chio'
       })     
    }
    

    render() {
        return (
            <div className="App">
        
              <table>
                <TableHeader type="Income" />
              
    
                <tbody>
                {this.state.data.map(item => (
                  <TableRow category = {item.category} description = {item.description} date = {item.date} money = {item.income} />))
                }
                </tbody>

              </table>
            </div>
          );
    }
 
}

export default Table;
