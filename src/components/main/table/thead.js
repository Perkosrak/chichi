import React from 'react';


function TableHeader({category,description,date,money =""}) {
    return (
        <thead>
            <tr>
            <th>{category}</th>
            <th>{description}</th>
            <th>{date}</th>
            <th>{money}</th>
            </tr>
      </thead>
    );
  }




export default TableHeader;