// REACT Libraries
import React from 'react';

import Products from '../data/products'

export default props => {

    function getListItem(){
        return Products.map(item => {
            return <li key={item.id}>#{item.id} - {item.name} - R${item.price}</li>
        })
    }

    return (
        <div>
            <h2>Repetições</h2>
            <ul>
                {getListItem()}
            </ul>
        </div>
    )
}