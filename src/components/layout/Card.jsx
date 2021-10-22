// REACT Libraries
import React from 'react';

// CUSTOM Libraries
import '../../assets/css/layout/Card.css';

export default props =>
    <div className="card">
        <div className="content">{props.children}</div>
        <div className="footer">{props.title}</div>
    </div>