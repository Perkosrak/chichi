import React from 'react';
import  './thead.css';


function TableHeader({type}) {
    return (
        <thead>
            <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>{type}</th>
            </tr>
      </thead>
    );
  }




export default TableHeader;