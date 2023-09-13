/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import "./Cart.css";

const Cart = ({selectedActors,remaning,totalCost}) => {
    console.log(selectedActors);
    return (
        <div>
            <h5>This is Cart:{selectedActors.length}</h5>
            <h4>Reaming:{remaning}</h4>
            <h4>Total Cost:{totalCost}</h4>
            {
              selectedActors.map((actor)=>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;