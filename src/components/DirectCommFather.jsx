// REACT Libraries
import React from 'react';
import DirectCommChildren from './DirectCommChildren';

export default props =>
    <div>
        <DirectCommChildren {...props}>Amanda</DirectCommChildren>
        <DirectCommChildren lastname="Matos">Daniel</DirectCommChildren>
        <DirectCommChildren lastname="Silva">Marcos</DirectCommChildren>
    </div>

    /* Os '...' são a função REACT chamada 'Spread' que transforma as informções recebidas no 
    componente (props) em um objeto */