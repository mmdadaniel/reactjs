// REACT Libraries
import React from 'react';

export default (props) => {
    return (
        <div>
            <button onClick={() => {
                props.clickThis(Math.random(), 'Gerado: ')
                }}>Alterar</button>
        </div>
    );
};
    

