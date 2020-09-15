import React, { Component }  from 'react';
import '../popup/popup.css';

class Form extends Component  {
    state = {
        category: "",
        description: "",
        date: "",
        income: null,
        Charges: null
    }
    handleSubmit = (event) => {
        event.preventDefault()
        
        const loc = JSON.parse(localStorage.getItem('data'));
        const newArr = [...loc,this.state];
        window.localStorage.setItem('data', JSON.stringify(newArr)
        );
        
       
      }
      changeDate = (event) => {
        this.setState( {
                [event.target.name]: event.target.value
            }  )
      }

    render(){
        return (
            <form className="form">
                <div className="form_wrapper">
                    <div className="form_input">
                        {/* <label>Choose a category:</label> */}
                        <select name="category" id="pet-select"  value={this.state.category} onChange = {this.changeDate}>
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                        </select>
                    </div>

                    <div className="form_input">
                        <label>Description:<input type="text" name="description" placeholder="" value={this.state.description} onChange = {this.changeDate} /></label>
                    </div>
                    <div className="form_input">
                        <label> Sum:  <input type="number" name="sum" placeholder="0" value={this.state.sum} onChange = {this.changeDate} /></label>
                    </div>
                    <div className="form_input">
                        <label>Start date: <input type="date" id="date" name="date" placeholder="2018-07-22" value={this.state.date} onChange = {this.changeDate} ></input></label>
                    </div>
                    <button type="onSubmit" onClick={this.handleSubmit} className="form_addnew">Add</button>
                </div>
            </form>
          );
    }

    
  }

export default Form;
