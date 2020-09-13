import React from 'react';

export const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name"> <input className="form-control" id="name" /></label>
      </div>
      <div className="form-group">
        <label htmlFor="description"> <input className="form-control" id="description" /></label>
      </div>
      <div className="form-group">
        <label htmlFor="data"> <input className="form-control" id="data" /></label>
      </div>
      <div className="form-group">
        <label htmlFor="money"> <input className="form-control" id="money" /></label>
      </div>
     

      <button className="form-control btn btn-primary">
          Add new
        </button>
    
    </form>
  );
};
export default Form;
