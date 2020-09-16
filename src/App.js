import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Categories from './components/categories/Categories';
import Charts from './components/charts/Charts';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Navbar/>
        <Route exact path="/"  component = {Main}/>
        <Route exact path="/categories" component = {Categories}/>  
        <Route exact path="/charts" component = {Charts}/> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;
