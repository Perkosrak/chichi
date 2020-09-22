import React,{Component} from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';
import Charts from './components/charts/Charts';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app_wrapper">
//         <Navbar/>
//         <Route path="/main" component = {Main}/>
//         <Route path="/categories" component = {Categories}/>  
//         <Route path="/charts" component = {Charts}/> 
//       </div>
      
//     </BrowserRouter>
//   );
// }

// export default App;

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





export default class App extends Component {
  state = {
    data : JSON.parse(localStorage.getItem('data')),
    isCharge : true,
    dog: 'Chio the best'  
}
addNew = (e) => {
    // console.log(this.state)
}




  render() {
    return (
        <BrowserRouter>
          <div className="app_wrapper">
            <Navbar/>
            {/* <Route path="/main" component = {Main}/> */}
            <Route path="/main" render = {(props)=><Main globalProps = {this.state.data} />}/>
            <Route path="/categories" component = {Categories}/>  
            <Route path="/charts" component = {Charts}/> 
          </div>
          
        </BrowserRouter>
    );
  }
  }
  

