// REACT Libraries
import React, { useState } from 'react';
import IndirectCommChildren from './IndirectCommChildren';

export default (props) => {

    const [num, setNum] = useState(0);
    const [text, setText] = useState("Valor: ");

    function clickThis(valueFromChild, textFromChild) {
        setNum(valueFromChild);
        setText(textFromChild);
    }

    return (
        <div>
            <h4>{text} {num}</h4>
            <IndirectCommChildren clickThis={clickThis}></IndirectCommChildren>
        </div>
    )
}