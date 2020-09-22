import React, { Component } from 'react';
import Table from '../main/table/table';


const Categories = () => {

    return(
        <div>
            <h1>It's a Categories Page</h1>
            <Table  type="Charges"
                    category = {'Category'}
                    description = {'Description'}
                    date = {'Date'}
                    money = {'Action'}/>
        </div>
    )
}

export default Categories;